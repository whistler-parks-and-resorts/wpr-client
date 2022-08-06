import RequiredChildren from "../../interfaces/RequiredChildren";

const Container: React.FC<RequiredChildren> = ({ children }: RequiredChildren) => {
  return <div className="container">{children}</div>;
};

export default Container;
