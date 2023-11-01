import { useState, InputHTMLAttributes, } from "react";

type CustomInputProps = {
  containerstyle?: string;
  labeltext?: string;
  labelstyle?: string;
  name?: string;
  inputcasestyle?: string;
  lefticon?: React.ReactNode;
  type?: string;
  inputstyle?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const styles = {
  container: `border-2 border-grey-300 rounded-md flex items-center bg-white h-10`,
  mainInput: `block  w-full h-full rounded-sm outline-none pl-2 text-xs`,
  errorMsg: `text-xs text-red-500`,
  dangerBorder: `border-red-500`,
  blueBorder: `border-blue-500`,
  labelStyle: `mb-1 inline-block text-sm font-light`,
};

const CustomInput = (props: CustomInputProps) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <div className={`${props.containerstyle}`}>
      {props.labeltext && (
        <label
          htmlFor={props.name}
          className={`${styles.labelStyle} ${props.labelstyle}`}
        >
          {props.labeltext}
        </label>
      )}
      <div
        className={`${styles.container} ${props.inputcasestyle} ${
          onFocus && styles.blueBorder
        }`}
      >
        {props.lefticon && props.lefticon}

        <input
          {...props}
          type={props.type ? props.type : "text"}
          name={props.name}
          id={props.name}
          className={`${styles.mainInput} ${props.inputstyle}  ${
            props.error && styles.dangerBorder
          }`}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
        />
      </div>
      {props.error && <p className={styles.errorMsg}>{props.error}</p>}
    </div>
  );
};

export default CustomInput;

// NB
// containerStyle: styles the entire body which also houses the label
// inputCaseStyle: styles just the area around the icon and the input
// inputStyle: styles the input itself

// Example
{
  /* <CustomInput
    labeltext={"NIP Transfer Limit"}
    labelstyle={`mb-0 text-gray-400`}
    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-10`}
    inputcasestyle={`border-0 h-8`}
    inputstyle={`pl-0 text-md`}
    defaultValue="1,000,000"
/> */
}
