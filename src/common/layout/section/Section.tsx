import RequiredChildren from "../../interfaces/RequiredChildren";

const Section: React.FC<RequiredChildren> = ({ children }: RequiredChildren) => {
  return <div className="section">{children}</div>;
};

export default Section;
