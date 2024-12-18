// src/components/Table/TableBase.tsx
import React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

interface TableProps {
  headers: string[];
  data: { [key: string]: string | number }[];
  onSort: (header: string) => void;
  sortColumn: string | null;
  sortDirection: 'asc' | 'desc';
}

const TableBase: React.FC<TableProps> = ({ headers, data, onSort, sortColumn, sortDirection }) => {

  return (
    <div className='shadow-[0px_0px_16px_0px_rgba(0,0,0,0.40)] overflow-x-auto rounded-lg mx-auto'>
      <table className="table-auto w-full border-collapse bg-[#FFFFFF]">
        <thead>
          <tr className='text-[13px] font-montserrat border-b border-solid border-[#ddd]'>
            {
              headers.map((header, index) => (
                <th
                  key={index}
                  onClick={() => onSort(header)} // Função fornecida pelo pai
                  className={`text-[#757575] text-left p-4`}
                >
                  <div className={`min-w-32 flex
                    ${ header === 'Ação' ? 'flex justify-center' : ''}
                  `}>
                    <div className='cursor-pointer pr-2'>
                      {header}
                    </div>
                    {/* Espaço fixo para os ícones */}
                    <span className="w-4 h-4">
                      {sortColumn === header && (
                        <span>
                          {sortDirection === 'asc' ? (
                            <ChevronUpIcon className="text-gray-500 inline" />
                          ) : (
                            <ChevronDownIcon className="text-gray-500 inline" />
                          )}
                        </span>
                      )}
                    </span>
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
                    } ${
                      header === 'Status' && row[header] === 'À Venda'
                        ? 'text-center text-blue-500 bg-blue-100 rounded-full'
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
                    {header !== 'Nome do Produto' && (row[header] || '-')}
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