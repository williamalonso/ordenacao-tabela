// src/components/Table/TableBase.tsx
import React from 'react';

interface TableProps {
  headers: string[];
  data: { [key: string]: string | number }[];
}

const TableBase: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
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