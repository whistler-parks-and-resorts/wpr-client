import RequiredChildren from "../../interfaces/RequiredChildren";

const Column: React.FC<RequiredChildren> = ({ children }) => {
  return <div className="column">{children}</div>;
};

export default Column;
