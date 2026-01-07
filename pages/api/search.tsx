// /pages/api/search.tsx
import routes from "../../public/routes-front-end/routes.json";

interface Route {
  path: string;
  title: string;
  description: string;
  content: string;
}

export default function HandleSearch(searchTerm: string): string | undefined {
  if (!searchTerm) {
    return undefined;
  }

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  // Busca primeiro no conteúdo visível
  const contentMatch = (routes as Route[]).find(route => 
    route.content.toLowerCase().includes(normalizedSearchTerm)
  );

  if (contentMatch) {
    return contentMatch.path.includes("page") 
      ? contentMatch.path.replace("/page", "") 
      : contentMatch.path;
  }

  // Se não encontrar no conteúdo, busca no título
  const titleMatch = (routes as Route[]).find(route => 
    route.title.toLowerCase().includes(normalizedSearchTerm)
  );

  return titleMatch?.path.includes("page") 
    ? titleMatch.path.replace("/page", "") 
    : titleMatch?.path;
}