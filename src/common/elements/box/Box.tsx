import RequiredChildren from "../../interfaces/RequiredChildren";

const Box: React.FC<RequiredChildren> = ({ children }: RequiredChildren) => {
  return <div className="box">{children}</div>;
};

export default Box;
