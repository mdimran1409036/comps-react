/* eslint-disable react/prop-types */
const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => (
    <th key={column.label}>{column.label}</th>
  ));
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td className="p-3" key={column.label}>``
        {column.render ? column.render(rowData): null}
      </td>
    ));
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
