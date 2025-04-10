import React, { useState, useEffect } from 'react';
import ImoveisSidebar from './ImoveisSidebar';
import ImoveisList from './ImoveisList';

function ImoveisWrapper({ imoveis }) {
  const [filteredImoveis, setFilteredImoveis] = useState(imoveis);

  const [filters, setFilters] = useState({
    nome: '',
    cidade: '',
    estado: '',
    bairro: '',
    quartos: '',
    banheiros: '',
    vagas: '',
    precoMin: '',
    precoMax: '',
    categoria: '' // ainda usaremos string aqui
  });

  const [appliedFilters, setAppliedFilters] = useState(null);

  // Captura os parâmetros da URL ao carregar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoriaURL = params.get('categoria');

    const categoriaTratada = categoriaURL
      ? categoriaURL
          .split(',')
          .map(cat => cat.trim().toLowerCase())
          .join(',') // mantém como string separada por vírgula para compatibilidade com o estado atual
      : '';

    setFilters(prev => ({ ...prev, categoria: categoriaTratada }));

    setAppliedFilters({
      cidade: '',
      estado: '',
      bairro: '',
      quartos: '',
      banheiros: '',
      vagas: '',
      precoMin: '',
      precoMax: '',
      categoria: categoriaTratada
    });
  }, []);

  const aplicarFiltros = () => {
    setAppliedFilters({
      cidade: filters.cidade,
      estado: filters.estado,
      bairro: filters.bairro,
      quartos: filters.quartos,
      banheiros: filters.banheiros,
      vagas: filters.vagas,
      precoMin: filters.precoMin,
      precoMax: filters.precoMax,
      categoria: filters.categoria
    });
  };

  useEffect(() => {
    if (!appliedFilters) return;

    const categoriasFiltro = appliedFilters.categoria
      ? appliedFilters.categoria.split(',').map(cat => cat.trim().toLowerCase())
      : [];

    const result = imoveis.filter(imovel => {
      const data = imovel.data;

      const matchNome = filters.nome
        ? data.title.toLowerCase().includes(filters.nome.toLowerCase())
        : true;

      const matchCidade = appliedFilters.cidade
        ? data.city?.toLowerCase() === appliedFilters.cidade.toLowerCase()
        : true;
      const matchEstado = appliedFilters.estado
        ? data.state?.toLowerCase() === appliedFilters.estado.toLowerCase()
        : true;
      const matchBairro = appliedFilters.bairro
        ? data.bairro?.toLowerCase().includes(appliedFilters.bairro.toLowerCase())
        : true;
      const matchQuartos = appliedFilters.quartos
        ? Number(data.bedrooms) >= Number(appliedFilters.quartos)
        : true;
      const matchBanheiros = appliedFilters.banheiros
        ? Number(data.bathrooms || 0) >= Number(appliedFilters.banheiros)
        : true;
      const matchVagas = appliedFilters.vagas
        ? Number(data.parking || 0) >= Number(appliedFilters.vagas)
        : true;

      const precoImovel = parseFloat(data.price.replace(/[^0-9.-]+/g, '')) || 0;
      const matchPrecoMin = appliedFilters.precoMin
        ? precoImovel >= parseFloat(appliedFilters.precoMin)
        : true;
      const matchPrecoMax = appliedFilters.precoMax
        ? precoImovel <= parseFloat(appliedFilters.precoMax)
        : true;

      const matchCategoria = categoriasFiltro.length > 0
        ? categoriasFiltro.includes(data.categoria?.toLowerCase())
        : true;

      return (
        matchNome &&
        matchCidade &&
        matchEstado &&
        matchBairro &&
        matchQuartos &&
        matchBanheiros &&
        matchVagas &&
        matchPrecoMin &&
        matchPrecoMax &&
        matchCategoria
      );
    });

    setFilteredImoveis(result);
  }, [filters.nome, appliedFilters, imoveis]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <main className="md:col-span-3">
        <ImoveisList imoveis={filteredImoveis} />
      </main>
      <aside className="md:col-span-1">
        <ImoveisSidebar
          filters={filters}
          setFilters={setFilters}
          aplicarFiltros={aplicarFiltros}
        />
      </aside>
    </div>
  );
}

export default ImoveisWrapper;
