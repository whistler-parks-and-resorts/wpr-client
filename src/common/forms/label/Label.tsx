const Label: React.FC<LabelProperties> = ({ id, text }: LabelProperties) => {
  return (
    <label className="label" htmlFor={id}>
      {text}
    </label>
  );
};

interface LabelProperties {
  id: string;
  text: string;
}

export default Label;
