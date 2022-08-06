import RequiredChildren from "../../interfaces/RequiredChildren";

const Columns: React.FC<RequiredChildren> = ({ children }: RequiredChildren) => {
  return <div className="columns">{children}</div>;
};

export default Columns;
