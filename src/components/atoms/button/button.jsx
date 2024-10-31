import { ButtonSize, ButtonTheme, ButtonType } from "./const";

const StyleButton = ({ children, type = ButtonType.submit, onClick, theme = ButtonTheme.primary, size = ButtonSize.large, className }) => {
  return (
    <button onClick={onClick} type={type} className={`${theme} ${className} ${size} rounded-sm font-bold`}>
      {children}
    </button>
  );
};

const Button = ({ children, type, onClick, theme, size, className }) => {
  return (
    <StyleButton onClick={onClick} type={type} theme={theme} size={size} className={className}>
      {children}
    </StyleButton>
  );
};

export default Button;
