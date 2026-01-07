'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SearchPage from '../../components/Search';
import Model from '../../components/model-page';

export default function SearchResults() {
  const params = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (params?.query) {
      setSearchTerm(decodeURIComponent(params.query as string));
    }
  }, [params]);

  return (
    <div>
      <Model
        caminhoImagem="/images/"
        titulo={`Busca: ${searchTerm}`}
        subtitulo={
          <span>
            <a href="../" className="text-white hover:underline">
              INÍCIO
            </a>
            &nbsp;» <span className="brightness-125">BUSCA</span>
          </span>
        }
      >
        <div></div>
      </Model>

      <SearchPage searchTerm={searchTerm} />
    </div>
  );
}