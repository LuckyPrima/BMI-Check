const CreditSection = () => {
  const credits = [
    {
      name: "Elandra Maulana",
      linkedin: "https://www.linkedin.com/in/elandra-maulana-391140206/",
      github: "#",
    },
    {
      name: "M. Farid Rahman",
      linkedin: "https://www.linkedin.com/in/muhammad-farid-952795217/",
      github: "#",
    },
    {
      name: "Lucky Prima Putra Helen",
      linkedin:
        "https://www.linkedin.com/in/lucky-prima-putra-helen-00baab179/",
      github: "#",
    },
  ];

  return (
    <div className="text-[#FBE9E2] ">
      <div className="flex flex-col items-center space-y-3">
        {credits.map((person, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-80 p-3"
          >
            <span className="text-[16px]">{person.name}</span>
            <div className="flex gap-2">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer">
                <img src="images/github.svg" alt="GitHub" className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditSection;
