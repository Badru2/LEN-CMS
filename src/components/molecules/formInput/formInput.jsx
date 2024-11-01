import Button from "../../atoms/button/button";
import { ButtonType } from "../../atoms/button/const";
import Input from "../../atoms/input/input";

const FormInput = ({ type = [], name = [], placeholder = [], value = [], onChange = [], onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-3">
      {type.map((type, index) => (
        <Input key={index} type={type} name={name[index]} placeholder={placeholder[index]} value={value[index]} onChange={onChange[index]} className={className} />
      ))}
      <Button type={ButtonType.submit}>Submit</Button>
    </form>
  );
};

export default FormInput;
