import RequiredChildren from "../../interfaces/RequiredChildren";

const InputField: React.FC<RequiredChildren> = ({ children }: RequiredChildren) => {
  return <div className="field">{children}</div>;
};

export default InputField;
