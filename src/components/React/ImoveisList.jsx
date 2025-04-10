import React from 'react';
import ImovelCard from '../../components/React/ImovelCard';

function ImoveisList({ imoveis }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 pt-8">
      {imoveis.length === 0 ? (
        <p className="text-gray-500">Nenhum imóvel encontrado com os filtros aplicados.</p>
      ) : (
        imoveis.map((imovel) => (
          <ImovelCard key={imovel.slug} imovel={imovel} />
        ))
      )}
    </div>
  );
}

export default ImoveisList;
