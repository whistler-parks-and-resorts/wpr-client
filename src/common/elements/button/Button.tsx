const Button: React.FC<ButtonProperties> = ({ text, type = "button" }: ButtonProperties) => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};

interface ButtonProperties {
  text: string;
  type?: "button" | "submit";
}

export default Button;
