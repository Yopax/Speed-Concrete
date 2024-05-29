import React from "react";

function CardResult({ result ,und, description, title}) {
  return (
    <>
      <div className="h-full bg-gray-100  rounded-lg p-2  ">
        <h3 className="text-xs font-semibold dark:text-gray-900 max-sm:text-[9px]">{title}</h3>
        <div className="text-base font-bold my-1 dark:text-gray-900 max-sm:text-[12px]">
          {result} {und}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-[9px] max-sm:text-[6px]">
          {description}
        </p>
      </div>
    </>
  );
}

export default CardResult;
