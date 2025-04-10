import React from 'react';

function ImoveisSidebar({ filters, setFilters, aplicarFiltros }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded-lg shadow">
      {/* Busca automática por nome */}
      <input
        type="text"
        name="nome"
        placeholder="Buscar por nome..."
        value={filters.nome}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {/* Filtros de localização */}
      <input
        type="text"
        name="cidade"
        placeholder="Cidade"
        value={filters.cidade}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="estado"
        placeholder="Estado"
        value={filters.estado}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="bairro"
        placeholder="Bairro"
        value={filters.bairro}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {/* Filtros numéricos */}
      <input
        type="number"
        name="quartos"
        placeholder="Min. Quartos"
        value={filters.quartos}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="banheiros"
        placeholder="Min. Banheiros"
        value={filters.banheiros}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="vagas"
        placeholder="Min. Vagas"
        value={filters.vagas}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {/* Filtros de preço */}
      <input
        type="number"
        name="precoMin"
        placeholder="Preço Mínimo"
        value={filters.precoMin}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="precoMax"
        placeholder="Preço Máximo"
        value={filters.precoMax}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {/* Filtro por Categoria */}
      <select
        name="categoria"
        value={filters.categoria}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Todas as Categorias</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Casa">Casa</option>
        <option value="Chácara">Chácara</option>
        <option value="Sítio">Sítio</option>
        <option value="Lançamento">Lançamento</option>
      </select>
      {/* Botão para aplicar os filtros manuais */}
      <button
        onClick={aplicarFiltros}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Filtrar
      </button>
    </div>
  );
}

export default ImoveisSidebar;
