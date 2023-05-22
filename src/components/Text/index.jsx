import React from "react";

const variantClasses = {
  h1: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  h2: "text-base",
  h3: "text-xs",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
