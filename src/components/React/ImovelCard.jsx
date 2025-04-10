import React from "react";

function ImovelCard({ imovel }) {
  const data = imovel.data;

  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      <a href={`/imoveis/${imovel.slug}/`} className="block">
        <img
          src={data.image || "/imagens/sem-imagem.jpg"}
          alt={data.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <span className="text-sm text-secondary uppercase font-medium tracking-wide">
            {data.categoria || "Imóvel"}
          </span>

          <h3 className="text-xl font-bold text-primary mt-1">{data.title}</h3>

          <p className="text-gray-600 text-sm mt-1">
            {data.location || "Localização não informada"}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-3">
            <span>{data.bedrooms || 0} quartos</span>
            <span>{data.parking || 0} vagas</span>
            <span>{data.area_total || "Área não informada"}</span>
          </div>

          <p className="text-lg font-bold text-secondary mt-3">
            {data.price || "Sob consulta"}
          </p>
        </div>
      </a>
    </article>
  );
}

export default ImovelCard;
