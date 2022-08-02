import RequiredChildren from "../../interfaces/RequiredChildren";

const Columns: React.FC<RequiredChildren> = ({ children }) => {
  return <div className="columns">{children}</div>;
};

export default Columns;
