import CreditSection from "@/components/CreditSection";

const items = [
  "Extremely Weak → Very underweight, at risk of malnutrition.",
  "Weak → Underweight, should increase nutritional intake.",
  "Normal → Ideal weight, maintain a healthy lifestyle!",
  "Overweight → Excessive weight, need attention to diet and physical activity.",
  "Obesity → Obesity, increase a healthy lifestyle to prevent the risk of disease.",
  "Extremely Obesity → Extreme obesity, requires further medical attention.",
];

const HomePage = () => {
  return (
    <div className="font-(family-Inter:<custom-property>)">
      {/* Navbar */}
      <nav className="fixed top-5 right-5 left-5 bg-[#D14C30] text-white p-3 shadow-lg z-50 rounded-full backdrop-blur-md">
        <div className="mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <img src="/images/Logo.svg" alt="Logo" className="lg:w-16 w-8" />
            <span className="lg:text-lg text-md font-bold">BodyCheck </span>
          </div>
          <div className="hidden lg:block space-x-6">
            <a href="#home" className="hover:text-[#771500]">
              Home
            </a>
            <a href="#about" className="hover:text-[#771500]">
              About
            </a>
            <a href="#get-started" className="hover:text-[#771500]">
              Get Started
            </a>
          </div>
          <div className="block lg:hidden">
            <img src="/images/menu.svg" alt="Menu" className="w-6" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative h-screen bg-cover bg-top text-center text-[#F4C9BF] flex flex-col items-center justify-center pt-20"
        style={{
          backgroundImage:
            "url('/images/sports-couple-training-summer-forest.svg')",
        }}
      >
        <h1 className="lg:text-[60px] text-2xl font-bold">
          Check Your BMI Now!
        </h1>
        <p className="lg:text-[28px] text-sm pt-5 pb-5 lg:leading-8">
          Find out if your weight is ideal or needs more attention. Enter your
          height, weight, and gender to see your BMI category now!
        </p>
        <button className="px-5 py-2 lg:text-[20px] text-sm lg:w-[217px] w-sm font-semibold rounded-full transition-all bg-[#9CB6DB] text-[#0E1E3D] hover:bg-[#7D8EAB] hover:text-[#0E1E3D]">
          <a href="#get-started">Get Started</a>
        </button>
      </header>

      {/* About BMI Section */}
      <section id="about" className="p-10 text-left bg-[#F7F3F0]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3">
          {/* Column Left */}
          <div>
            <p className="mt-10 lg:text-[44px] text-2xl text-[#9E1C00]">
              What is BMI?
            </p>
            <p className="mt-[27px] max-w-[720px] text-[#213555] lg:text-[20px] text-sm lg:leading-8">
              {`Body Mass Index (BMI) is a simple method to classify a person's
              weight based on their height and weight. BMI is used to determine
              whether a person has a healthy weight or not. By calculating BMI,
              a person can understand whether their weight is within the normal
              range or at risk. These risks can be related to health problems
              such as malnutrition, obesity, or other weight-related diseases.
              Therefore, understanding and monitoring BMI can help in
              maintaining body balance and overall health.`}
            </p>
            <img
              src="/images/assets_1.svg"
              alt="Char 1"
              className="w-[627px] h-[385px]"
            />
          </div>

          {/* Column Right */}
          <div className="container">
            <div className="text-[#213555] lg:text-[20px] text-sm">
              <img
                src="/images/assets_2.svg"
                alt="Char 2"
                className="w-[691px] h-[373px]"
              />
              <ul className="pl-5  space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="flex gap-2 item-center">
                    <img
                      src="images/checkmark.svg"
                      alt="Checkmark"
                      className="lg:w-6 w-5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex pt-5 pl-5">
                Do you want to know which category you belong to?
              </div>
              <div className="pt-5 pl-5">
                <button className="px-5 py-2 lg:text-[20px] text-sm lg:w-[217px] w-sm font-semibold rounded-full transition-all bg-[#9CB6DB] text-[#0E1E3D] hover:bg-[#7D8EAB] hover:text-[#0E1E3D]">
                  <a href="#get-started">Get Started</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        id="get-started"
        className="grid grid-cols-1 p-10 bg-[#F7F3F0] text-left justify-start flex"
      >
        <div className="">
          <h2 className="lg:text-[44px] text-2xl text-[#9E1C00]">
            Get Started
          </h2>
          <p className="lg:text-[20px] text-sm pt-[27px] text-[#213555] md:max-w-[1254px] lg:leading-8">
            {`Calculate Your BMI Now! Enter the following data to find out your
            weight category, namely weight, height, and gender. With this
            information, you can find out whether your weight is in the healthy
            or risky category, so you can take the right steps to maintain your
            body's health.`}
          </p>
          <div className="">
            <BMIInputFields />
          </div>

          <div className="flex lg:text-[16px] text-[10px] lg:leading-6 pt-5">
            <p>
              {`*Note : The BMI Classification App uses a neural network model to
              estimate and classify your Body Mass Index/BMI based on height,
              weight, and gender data. However, these results are based on
              general statistical trends and may not accurately reflect your
              health status. The app's creators are not responsible for any
              decisions made based on the results and advise users to consult
              with a qualified healthcare provider for personalized advice and
              guidance.`}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#405372] text-[#FBE9E2] text-center p-6">
        <div className="lg:text-[20px] text-md font-bold place-self-center">
          <p>Credit by</p>
        </div>
        <div className="mt-1 space-y-1">
          <CreditSection />
        </div>
      </footer>
    </div>
  );
};

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

export default HomePage;
