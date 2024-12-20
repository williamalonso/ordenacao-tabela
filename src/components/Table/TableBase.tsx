// src/components/Table/TableBase.tsx
import React from 'react';
import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

interface TableProps {
  headers: string[];
  data: { [key: string]: string | number }[];
}

const TableBase: React.FC<TableProps> = ({ headers, data }) => {

  return (
    <div className='shadow-[0px_0px_16px_0px_rgba(0,0,0,0.40)] overflow-x-auto rounded-lg mx-auto'>
      <table className="table-auto w-full border-collapse bg-[#FFFFFF]">
        <thead>
          <tr className='text-[13px] font-montserrat border-b border-solid border-[#ddd]'>
            {
              headers.map((header, index) => (
                <th
                  key={index}
                  className={`text-[#757575] text-left p-4`}
                >
                  <div className={`min-w-32 flex
                    ${ header === 'Ação' ? 'flex justify-center' : ''}
                  `}>
                    <div className='cursor-pointer pr-2'>
                      {header}
                    </div>
                  </div>
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-4 font-bold border-b border-solid border-[#ddd]
                    ${header !== 'Nome do Produto' ? 'text-[#757575]' : ''}
                    ${header === 'Ação' ? 'text-center' : ''}
                  `}
                >
                  <div
                    className={`${
                      header === 'Status' && row[header] === 'Pendente'
                        ? 'text-center text-yellow-500 bg-orange-100 rounded-full'
                        : ''
                    } ${
                      header === 'Status' && row[header] === 'Ativo'
                        ? 'text-center text-green-500 bg-green-100 rounded-full'
                        : ''
                    } ${
                      header === 'Status' && row[header] === 'Inativo'
                        ? 'text-center text-red-500 bg-red-100 rounded-full'
                        : ''
                    }`}
                  >
                    {header === 'Nome do Produto' && (
                      <div className="flex items-center gap-2">
                        {row[header] === 'Cereja' && (
                          <img
                            src="/images/cereja.jpg"
                            alt="Cereja"
                            className="w-6 h-6"
                          />
                        )}
                        {row[header] === 'Melancia' && (
                          <img
                            src="/images/melancia.webp"
                            alt="Melancia"
                            className="w-6 h-6"
                          />
                        )}
                        {row[header] === 'Baunilha' && (
                          <img
                            src="/images/sorvete.png"
                            alt="Baunilha"
                            className="w-6 h-6"
                          />
                        )}
                        {row[header] === 'Brigadeiro' && (
                          <img
                            src="/images/brigadeiro.jpeg"
                            alt="Brigadeiro"
                            className="w-6 h-6"
                          />
                        )}
                        <span>{row[header]}</span>
                      </div>
                    )}

                    {header === 'Preço' && typeof row[header] === 'number' && (
                      <span>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(row[header])}
                      </span>
                    )}

                    {header === 'Quantidade' && typeof row[header] === 'number' && (
                      <span>
                        {row[header]} unidades
                      </span>
                    )}

                    {header !== 'Nome do Produto' && header !== 'Preço' && header !== 'Quantidade' && (row[header] || '-')}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBase;