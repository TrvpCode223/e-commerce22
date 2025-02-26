import React from 'react';

// Définition des tailles de texte
const sizes = {
  textxs: "text-[12px] font-medium",
  textlg: "text-[20px] font-medium",
  text2xl: "text-[32px] font-medium md:text-[30px] sm:text-[28px]",
  text3xl: "text-[36px] font-medium md:text-[34px] sm:text-[32px]",
  text4xl: "text-[110px] font-medium md:text-[48px]",
  headingxs: "text-[14px] font-semibold",
  headings: "text-[16px] font-semibold",
  headingmd: "text-[20px] font-semibold",
  headinglg: "text-[24px] font-semibold md:text-[22px]",
  headingxl: "text-[32px] font-semibold md:text-[30px] sm:text-[28px]",
  heading2xl: "text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
  heading3xl: "text-[48px] font-semibold md:text-[44px] sm:text-[38px]",
  heading4xl: "text-[54px] font-semibold md:text-[46px] sm:text-[40px]",
  texts: "text-[12px] font-medium",
  textmd: "text-[16px] font-medium",
};

// Composant Heading
const Heading = ({
  children,
  className = "",
  size = "textmd",
  as: Component = "h6", // Par défaut, le composant est un <h6>
  ...restProps
}) => {
  return (
    <Component
      className={`text-black-900_01 font-poppins ${sizes[size]} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };