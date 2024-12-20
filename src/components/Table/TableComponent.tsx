// src/components/Table/TableComponent.tsx
import React from 'react';
import TableBase from '@/components/Table/TableBase';

interface TableRow {
  [key: string]: string | number;
};

const TableComponent: React.FC = () => {

  const initialData: TableRow[]  = [
    { 'Nome do Produto': 'Cereja', 'ID do Produto': '#KP267400', Preço: 90.50, Quantidade: 350, Tipo: 'Fruta', Status: 'Pendente', 'Ação': '...' },
    { 'Nome do Produto': 'Melancia', 'ID do Produto': '#TL449003', Preço: 10.99, Quantidade: 23, Tipo: 'Fruta', Status: 'Ativo', 'Ação': '...' },
    { 'Nome do Produto': 'Baunilha', 'ID do Produto': '#GB651535', Preço: 100.50, Quantidade: 1200, Tipo: 'Sorvete', Status: 'Inativo', 'Ação': '...' },
    { 'Nome do Produto': 'Brigadeiro', 'ID do Produto': '#SD558612', Preço: 9.99, Quantidade: 4, Tipo: 'Sobremesa', Status: 'Ativo', 'Ação': '...' },
  ];

  const headers = ['Nome do Produto', 'ID do Produto', 'Preço', 'Quantidade', 'Tipo', 'Status', 'Ação'];

  return (
    <div className='overflow-x-auto w-full'>
      <div className='mx-auto max-w-screen-xl mb-4'>
        <h2 className='font-bold text-4xl mb-5'>Produto</h2>
        <TableBase 
          headers={headers} 
          data={initialData} 
        />
      </div>
    </div>
  );
};

export default TableComponent;