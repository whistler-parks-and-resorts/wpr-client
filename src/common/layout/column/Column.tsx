import OptionalChildren from "../../interfaces/OptionalChildren";

const Column: React.FC<OptionalChildren> = ({ children }: OptionalChildren) => {
  return <div className="column">{children}</div>;
};

export default Column;
