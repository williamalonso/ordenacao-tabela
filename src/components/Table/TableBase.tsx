// src/components/Table/TableBase.tsx
import React from 'react';

interface TableProps {
  headers: string[];
  data: { [key: string]: string | number }[];
}

const TableBase: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className='shadow-[0px_0px_16px_0px_rgba(0,0,0,0.40)] overflow-x-auto max-w-full'>
      <table className="table-auto w-full border-collapse bg-[#FFFFFF
]">
        <thead>
          <tr>
            {
              headers.map((header, index) => (
                <th
                  key={index}
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    backgroundColor: '#f4f4f4',
                    textAlign: 'left',
                  }}
                >
                  {header}
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
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                  }}
                >
                  {row[header] || '-'}
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