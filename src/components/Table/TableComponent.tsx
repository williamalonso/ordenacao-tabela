// src/components/Table/TableComponent.tsx
import React from 'react';
import TableBase from '@/components/Table/TableBase';

const TableComponent: React.FC = () => {

  const headers = ['Nome', 'Idade', 'País'];
  
  const data = [
    { Nome: 'Alice', Idade: 25, País: 'Brasil' },
    { Nome: 'Roberto', Idade: 30, País: 'Canadá' },
    { Nome: 'Carlos', Idade: 35, País: 'Reino Unido' },
    { Nome: 'Fernanda', Idade: 28, País: 'Argentina' },
    { Nome: 'Luís', Idade: 40, País: 'México' },
    { Nome: 'Mariana', Idade: 22, País: 'Portugal' },
  ];

  return (
    <div>
      <h2>Exemplo de Tabela</h2>
      <TableBase headers={headers} data={data} />
    </div>
  );
};

export default TableComponent;