import { ButtonSize, ButtonTheme } from "./const";

const StyleButton = ({ children, onClick, theme = ButtonTheme.primary, size = ButtonSize.large, className }) => {
  return (
    <button onClick={onClick} className={`${theme} ${className} ${size} rounded-sm font-bold`}>
      {children}
    </button>
  );
};

const Button = ({ children, onClick, theme, size, className }) => {
  return (
    <StyleButton onClick={onClick} theme={theme} size={size} className={className}>
      {children}
    </StyleButton>
  );
};

export default Button;
