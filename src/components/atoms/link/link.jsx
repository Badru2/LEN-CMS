import { Link } from "react-router-dom";

const ButtonLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default ButtonLink;
