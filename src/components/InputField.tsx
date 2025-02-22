import { useState } from "react";
import { FaWeight, FaRulerVertical, FaVenusMars } from "react-icons/fa";

const BMIInputFields = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex lg:text-xl text-sm items-center lg:w-[388px] w-full p-3 bg-[#FBE9E2] border border-gray-400 rounded-full">
        <FaWeight className="text-gray-500 mr-3" />
        <input
          type="number"
          placeholder="Input your weight (kg)"
          className="bg-transparent outline-none w-full text-gray-600"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min={1}
        />
      </div>

      <div className="flex lg:text-xl text-sm items-center lg:w-[388px] w-full p-3 bg-[#FBE9E2] border border-gray-400 rounded-full">
        <FaRulerVertical className="text-gray-500 mr-3" />
        <input
          type="number"
          placeholder="Input your height (cm)"
          className="bg-transparent outline-none w-full text-gray-600"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min={1}
        />
      </div>

      <div className="flex lg:text-xl text-sm items-center lg:w-[388px] w-full p-3 bg-[#FBE9E2] border border-gray-400 rounded-full">
        <FaVenusMars className="text-gray-500 mr-3" />
        <select
          className="bg-transparent outline-none w-full text-gray-600"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default BMIInputFields;
