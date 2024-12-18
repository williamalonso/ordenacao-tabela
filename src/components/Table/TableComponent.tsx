// src/components/Table/TableComponent.tsx
import React, { useState } from 'react';
import TableBase from '@/components/Table/TableBase';

type TableRow = {
  [key: string]: string;
};

const TableComponent: React.FC = () => {

  const initialData: TableRow[]  = [
    { 'Nome do Produto': 'Cereja', 'ID do Produto': '#KP267400', Preço: 'R$90,50', Quantidade: '350 unidades', Tipo: 'Fruta', Status: 'Pendente', 'Ação': '...' },
    { 'Nome do Produto': 'Melancia', 'ID do Produto': '#TL449003', Preço: 'R$10,99', Quantidade: '23 litros', Tipo: 'Fruta', Status: 'Ativo', 'Ação': '...' },
    { 'Nome do Produto': 'Baunilha', 'ID do Produto': '#GB651535', Preço: 'R$100,50', Quantidade: '1200 unidades', Tipo: 'Sorvete', Status: 'Inativo', 'Ação': '...' },
    { 'Nome do Produto': 'Brigadeiro', 'ID do Produto': '#SD558612', Preço: 'R$9,99', Quantidade: '4 unidades', Tipo: 'Sobremesa', Status: 'À Venda', 'Ação': '...' },
  ];

  const [data, setData] = useState(initialData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const headers = ['Nome do Produto', 'ID do Produto', 'Preço', 'Quantidade', 'Tipo', 'Status', 'Ação'];

  const handleSort  = (header: string) => {
    if (sortColumn === header) {
      // Alternar direção se a mesma coluna for clicada
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Nova coluna selecionada, define como ascendente
      setSortColumn(header);
      setSortDirection('asc');
    }

    // Ordenar os dados
    const sortedData = [...data].sort((a, b) => {
      const valueA = a[header] || '';
      const valueB = b[header] || '';

      // Comparação com base na direção
      if (sortDirection === 'asc') {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
    });

    setData(sortedData);
  };

  return (
    <div className='overflow-x-auto w-full'>
      <div className='mx-auto max-w-screen-xl mb-4'>
        <h2 className='font-bold text-4xl mb-5'>Produto</h2>
        <TableBase 
          headers={headers} 
          data={data} 
          onSort={handleSort} 
          sortColumn={sortColumn}
          sortDirection={sortDirection} 
        />
      </div>
    </div>
  );
};

export default TableComponent;