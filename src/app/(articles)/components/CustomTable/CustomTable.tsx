import { GridContainer } from "@/components";

interface TableRowData {
  [key: string]: string | number;
}

interface PropsTableProps {
  data: TableRowData[];
}

export const CustomTable: React.FC<PropsTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <></>;
  }

  const columns = Object.keys(data[0]);

  return (
    <GridContainer>
      <div className="col-span-8 col-start-1 md:col-span-8 md:col-start-3 w-full font-mono font-light overflow-x-scroll">
        <span className="block w-max min-w-full text-sm rounded-md overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-md bg-gray-dark-XX">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} scope="col" className="py-3 px-6">
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-gray-dark border-b border-gray last:border-none"
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="py-4 px-6 whitespace-nowrap">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </span>
      </div>
    </GridContainer>
  );
};
