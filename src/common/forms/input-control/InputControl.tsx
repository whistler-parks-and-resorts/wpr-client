import RequiredChildren from "../../interfaces/RequiredChildren";

const InputControl: React.FC<RequiredChildren> = ({ children }: RequiredChildren) => {
  return <div className="control">{children}</div>;
};

export default InputControl;
