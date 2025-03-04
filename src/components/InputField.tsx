import { useState } from "react";
import { BiLoader } from "react-icons/bi";
import { FaWeight, FaRulerVertical, FaVenusMars } from "react-icons/fa";

const BMIInputFields = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const calculateBMI = () => {
    setLoading(true);
    setTimeout(() => {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);

      if (weight && height) {
        const heightInMeter = heightNum / 100;
        const bmiResult = (weightNum / (heightInMeter * heightInMeter)).toFixed(
          2
        );
        setBmi(bmiResult);
        setError("");
      } else {
        setError("Please input both weight and height");
        setBmi("");
      }
      setLoading(false);
    }, 2000);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 16) return "Extremely Weak";
    if (bmi < 18.5) return "Weak";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    if (bmi < 35) return "Obesity";
    return "Extremely Obesity";
  };

  const getBMIImage = (category: string, gender: string) => {
    if (!gender) return "";
    const imageMap: Record<string, Record<string, string>> = {
      male: {
        "Extremely Weak": "/images/BMI-Extremly Weak-Man.svg",
        Weak: "/images/BMI-Weak-Man.svg",
        Normal: "/images/BMI-Normal-Man.svg",
        Overweight: "/images/BMI-Overweight-Man.svg",
        Obesity: "/images/BMI-Obesity-Man.svg",
        "Extremely Obesity": "/images/BMI-Extremly Obesity-Man.svg",
      },
      female: {
        "Extremely Weak": "/images/BMI-Extremly Weak-Women.svg",
        Weak: "/images/BMI-Weak-Women.svg",
        Normal: "/images/BMI-Normal-Women.svg",
        Overweight: "/images/BMI-Overweight-Women.svg",
        Obesity: "/images/BMI-Obesity-Women 1.svg",
        "Extremely Obesity": "/images/BMI-Extremly Obesity-Women.svg",
      },
    };
    return imageMap[gender]?.[category] || "";
  };

  const resetBMI = () => {
    setBmi("");
    setGender("");
    setWeight("");
    setHeight("");
  };

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
          disabled={!!bmi}
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button
        onClick={calculateBMI}
        className="px-5 py-2 lg:text-[20px] text-sm font-semibold rounded-full transition-all lg:w-[217px] w-full bg-[#F4C9BF] text-[#1A2A44] hover:bg-[#E89F8F] hover:text-[#1A2A44]"
      >
        Check BMI Results
      </button>

      {bmi && (
        <button
          onClick={resetBMI}
          className="px-5 py-2 lg:text-[20px] text-sm font-semibold rounded-full transition-all lg:w-[217px] w-full bg-red-400 text-[#1A2A44] hover:bg-red-600 hover:text-[#1A2A44]"
        >
          Reset Button
        </button>
      )}

      {loading && (
        <div className="flex justify-center items-center py-5">
          <BiLoader size={50} className="animate-spin" />
        </div>
      )}
      {error && !loading && (
        <p className="text-red-500 lg:text-[20px] text-sm pb-3 text-bold">
          {error}
        </p>
      )}
      {bmi && !loading && (
        <div>
          <p className="lg:text-[20px] text-sm pt-[27px] text-[#213555] md:max-w-[876px] lg:leading-8">
            Based on the data you entered, you fall into the{" "}
            {getBMICategory(parseFloat(bmi))} category. Maintain a healthy
            lifestyle and consult a nutritionist if necessary!
          </p>
          <img
            src={getBMIImage(getBMICategory(parseFloat(bmi)), gender)}
            alt={getBMICategory(parseFloat(bmi))}
            className="mx-auto my-5"
          />
        </div>
      )}
    </div>
  );
};

export default BMIInputFields;
