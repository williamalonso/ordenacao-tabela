// src/components/Table/TableComponent.tsx
import React from 'react';
import TableBase from '@/components/Table/TableBase';

const TableComponent: React.FC = () => {

  const headers = ['Nome do Produto', 'ID do Produto', 'Preço', 'Quantidade', 'Tipo', 'Status', 'Ação'];
  
  const data = [
    { 'Nome do Produto': 'Cereja', 'ID do Produto': '#KP267400', Preço: 'R$90,50', Quantidade: '350 unidades', Tipo: 'Fruta', Status: 'Pendente', 'Ação': '...' },
    { 'Nome do Produto': 'Melancia', 'ID do Produto': '#TL449003', Preço: 'R$10,99', Quantidade: '23 litros', Tipo: 'Fruta', Status: 'Ativo', 'Ação': '...' },
    { 'Nome do Produto': 'Baunilha', 'ID do Produto': '#GB651535', Preço: 'R$100,50', Quantidade: '1200 unidades', Tipo: 'Sorvete', Status: 'Inativo', 'Ação': '...' },
    { 'Nome do Produto': 'Brigadeiro', 'ID do Produto': '#SD558612', Preço: 'R$9,99', Quantidade: '4 unidades', Tipo: 'Sobremesa', Status: 'À Venda', 'Ação': '...' },
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