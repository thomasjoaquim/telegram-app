interface TableColumn {
  key: string
  label: string
  render?: (value: any, row: any) => React.ReactNode
  width?: string
}

interface TableProps {
  columns: TableColumn[]
  data: any[]
  isLoading?: boolean
  emptyMessage?: string
}

export default function Table({
  columns,
  data,
  isLoading = false,
  emptyMessage = 'Nenhum dado encontrado',
}: TableProps) {
  if (isLoading) {
    return (
      <div className="card">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="card text-center py-8">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ${
                    column.width ? `w-${column.width}` : ''
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="px-6 py-4 text-sm text-gray-900"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
