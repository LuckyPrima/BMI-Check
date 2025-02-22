import { useState } from "react";

const ButtonCheck = ({ text }: { text: string }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked(true)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className={`
            px-5 py-2 lg:text-[20px] text-sm font-semibold rounded-full transition-all lg:w-[217px] w-full
            ${
              isClicked
                ? "bg-[#F4C9BF] text-[#1A2A44]"
                : "bg-[#F4C9BF] text-[#1A2A44]"
            }
            hover:bg-[#E89F8F] hover:text-[#1A2A44]
            active:bg-[#771500] active:text-[#9BACC7]
          `}
    >
      {text}
    </button>
  );
};

export default ButtonCheck;
