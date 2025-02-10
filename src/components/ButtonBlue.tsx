import { useState } from "react";

const ButtonBlue = ({ text }: { text: string }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked(true)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className={`
            px-5 py-2 text-[20px] font-semibold rounded-full transition-all w-[217px] h-[44px]
            ${
              isClicked
                ? "bg-[#9BACC7] text-[#0E1E3D]"
                : "bg-[#9CB6DB] text-[#0E1E3D]"
            }
            hover:bg-[#7D8EAB] hover:text-[#0E1E3D]
            active:bg-[#405372] active:text-[#9BACC7]
          `}
    >
      {text}
    </button>
  );
};

export default ButtonBlue;
