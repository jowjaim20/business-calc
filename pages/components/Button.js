import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex items-center justify-center px-3 py-0.5 text-white rounded bg-lime-600 hover:bg-lime-400"
    >
      {children}
    </button>
  );
};
const ButtonLink = ({ children, href = "/", toggle }) => {
  const dispatch = useDispatch();
  return (
    <Link href={href}>
      <button
        onClick={() => dispatch(toggle())}
        type="button"
        className="px-4 py-1 text-white bg-green-500 rounded-md shadow-md"
      >
        <a>{children}</a>
      </button>
    </Link>
  );
};
const RedButton = ({ children, type = "button", onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex items-center justify-center px-3 py-0.5 text-white rounded hover:bg-amber-400 bg-amber-600"
    >
      {children}
    </button>
  );
};
export { RedButton, ButtonLink };

export default Button;
