// src/components/Table/TableComponent.tsx
import React from 'react';
import TableBase from '@/components/Table/TableBase';

const TableComponent: React.FC = () => {

  const headers = ['Nome do Produto', 'ID do Produto', 'Preço', 'Quantidade', 'Tipo', 'Status', 'Ação'];
  
  const data = [
    { 'Nome do Produto': 'Cereja', 'ID do Produto': '#KP267400', Preço: 'R$90', Quantidade: '350 pcs', Tipo: 'Sobremesa', Status: 'Pendente', 'Ação': '...' },
    { 'Nome do Produto': 'Cereja', 'ID do Produto': '#KP267400', Preço: 'R$90', Quantidade: '350 pcs', Tipo: 'Sobremesa', Status: 'Pendente', 'Ação': '...' },
    { 'Nome do Produto': 'Cereja', 'ID do Produto': '#KP267400', Preço: 'R$90', Quantidade: '350 pcs', Tipo: 'Sobremesa', Status: 'Pendente', 'Ação': '...' },
  ];

  return (
    <div className='overflow-x-auto w-full'>
      <div className='mx-auto max-w-screen-xl mb-4'>
        <h2 className='font-bold text-4xl mb-5'>Produto</h2>
        <TableBase headers={headers} data={data} />
      </div>
    </div>
  );
};

export default TableComponent;