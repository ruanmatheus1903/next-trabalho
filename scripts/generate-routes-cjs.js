/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Configurações
const PAGES_DIR = path.join(__dirname, '../src/app');
const OUTPUT_DIR = path.join(__dirname, '../public/routes-front-end');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'routes.json');
const IGNORE_ELEMENTS = ['script', 'style', 'head', 'noscript', 'meta', '[hidden]', 'nav', 'footer', '[class*="navbar"]', '[class*="footer"]', '[class*="menu"]'];

// Garante que o diretório existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✅ Diretório criado: ${OUTPUT_DIR}`);
}

// Função para extrair conteúdo visível
function extractVisibleContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(content);

    IGNORE_ELEMENTS.forEach(selector => $(selector).remove());
    $('[class*="btn"], [class*="button"], [class*="header"], [class*="container"], [class*="wrapper"]').remove();

    const mainContent = $('main, article, [class*="content"], section, p, h1, h2, h3, h4, h5, h6, li, td, th').text();

    return mainContent
      .replace(/\s+/g, ' ')
      .replace(/[{}()<>]/g, ' ')
      .replace(/import\s+.+?\s+from\s+.+?;/g, '')
      .replace(/className=".+?"/g, '')
      .replace(/export\s+default\s+function/g, '')
      .trim();
  } catch (error) {
    console.error(`⚠️ Erro processando ${filePath}:`, error.message);
    return '';
  }
}

// Função para formatar títulos
function formatTitle(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\[(\w+)\]/g, '$1');
}

// Função principal
async function generateRoutes() {
  const routes = new Map();

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (/\.(js|jsx|tsx)$/.test(file) && !file.endsWith('.test.js')) {
        const relativePath = path.relative(PAGES_DIR, path.dirname(filePath));
        const routePath = '/' + relativePath.replace(/\\/g, '/').replace(/\/page$/, '');

        if (routePath && !routes.has(routePath)) {
          const visibleContent = extractVisibleContent(filePath);
          const routeName = routePath.split('/').pop() || 'home';

          routes.set(routePath, {
            path: routePath || '/',
            title: formatTitle(routeName),
            description: `Conteúdo sobre ${formatTitle(routeName)}`,
            content: visibleContent
          });
        }
      }
    });
  }

  try {
    walkDir(PAGES_DIR);
    
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify([...routes.values()], null, 2),
      'utf8'
    );

    console.log(`✅ Arquivo gerado com sucesso: ${OUTPUT_FILE}`);
    console.log(`✅ Total de rotas geradas: ${routes.size}`);
  } catch (error) {
    console.error('❌ Erro ao gerar rotas:', error.message);
  }
}

generateRoutes().catch(console.error);