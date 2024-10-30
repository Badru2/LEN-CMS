const StyledTable = ({ thead = [], tbody = [] }) => {
  return (
    <table className="table">
      <thead>
        <tr className="text-2xl bg-gray-100">
          {thead.map((th, index) => (
            <th key={index}>{th}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tbody.map((tr, index) => (
          <tr key={index} className="hover:bg-gray-200">
            {tr.map((td, index) => (
              <td key={index}>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Table = ({ thead = [], tbody = [] }) => {
  return <StyledTable thead={thead} tbody={tbody} />;
};

export default Table;
