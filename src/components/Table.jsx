/* eslint-disable react/prop-types */
const Table = ({ data }) => {
  const renderedRows = data.map((item) => (
    <tr key={item.name} className="border-b">
      <td className="p-3">{item.name}</td>
      <td className="p-3">
        <div className={`p-3 m-2 ${item.color}`}></div>
      </td>
      <td className="p-3">{item.score}</td>
    </tr>
  ));
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>name</th>
          <th>color</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;

