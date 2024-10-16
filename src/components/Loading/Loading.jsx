import React from "react";

const Loading = ({padding, classes}) => {
  return (
    <div className={`py-[${padding}] w-full`}>
      <span className={`${classes} mx-auto block rounded-full border-2 border-solid border-t-white border-[#008459] animate-spin`}></span>
    </div>
  );
};

export default Loading;
