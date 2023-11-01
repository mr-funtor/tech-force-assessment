"use client";

import { ComponentProps } from "react";

type CustomButtonProps = {
  containerStyle?: string;
  buttonText: string;
  type: "button" | "submit" | "reset";
  textStyle?: string;
} & ComponentProps<"button">;

const styles = {
  btnBody: `bg-primaryBlue w-32 h-12 text-sm rounded-full`,
  btnBody2: `bg-primaryBlue w-32 h-12 text-primaryBlue text-sm rounded-full`,
  textStyle: `text-white`,
};

// EXAMPLE
{
  /* <CustomButton
    buttonText="Log In"
    type="button"
    containerStyle={`bg-primaryBlue border-[0.9px] border-primaryBlue mr-5`}
    textStyle="text-primaryBlue"
/> */
}

const CustomButton = ({
  onClick,
  containerStyle,
  buttonText,
  type,
  textStyle,
  children,
}: CustomButtonProps) => {
  return (
    <button
      className={`${containerStyle} ${styles.btnBody}`}
      onClick={onClick}
      type={type}
    >
      <p className={textStyle ? textStyle : styles.textStyle}>
        {children ? children : buttonText}
      </p>
    </button>
  );
};

export default CustomButton;
