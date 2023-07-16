import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
  children?: React.ReactNode;
  id?: string;
  placeholder?: string;
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, id, children, labelText, type = "text", placeholder = "", autoComplete="off", error, ...props }, ref) => {
    return (
      <div className={className + " relative"}>
        {labelText && (
          <label
            className="block mb-2 !lg:text-sm !xl:text-xl text-light"
            htmlFor={id}
          >
            {labelText}
          </label>
        )}
        <div className="">
          <input
            id={id}
            autoComplete={autoComplete}
            className={`flex items-center h-12 px-4 w-64 mt-2 rounded focus:outline-none focus:border-2 dark:focus:border-primary focus:border-primary 
              ${error && "border-red-500 border  animate-shake"} ${
              children ? "rounded-r-md" : "rounded-md"
            }`}
            {...props}
            ref={ref}
            type={type}
            placeholder={placeholder}
          ></input>

          <div className="flex">{children}</div>
        </div>
        {error && (
          <p className="text-red-600 text-right animate-shake">{error}</p>
        )}
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;