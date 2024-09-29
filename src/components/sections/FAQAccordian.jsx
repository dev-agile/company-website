import React, { useState, useEffect } from "react";

const faqData = [
  {
    question:
      "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor ?",
    answer: "Answer to question 1",
  },
  {
    question:
      "Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus ?",
    answer: "Answer to question 2",
  },
  {
    question:
      "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor ?",
    answer: "Answer to question 3",
  },
  {
    question:
      "Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus ?",
    answer: "Answer to question 4",
  },
  {
    question:
      "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor ?",
    answer: "Answer to question 5",
  },
  {
    question:
      "Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus ?",
    answer: "Answer to question 6",
  },
];





const useTheme = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && localStorage.getItem("appTheme")) {
      return localStorage.getItem("appTheme");
    }
    return "light"; // default theme
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const targetElement = mutation.target;
          const currentTheme = targetElement.classList.contains("dark") ? "dark" : "light";
          setTheme(currentTheme);
        }
      }
    };

    const observer = new MutationObserver(callback);
    const config = { attributes: true, attributeFilter: ["class"] };
    const targetNode = document.documentElement;

    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, []);

  return theme;
};

const FAQAccordionItem = ({ faq, onToggle, isOpen, theme }) => (
  <div className={`border-b rounded-lg p-4 ${theme === "dark" ? "bg-black-700" : "bg-white"}`}>
    <div className="flex justify-between items-center">
      <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        {faq.question}
      </h3>
      <button
        onClick={onToggle}
        className={`ml-2 p-4 rounded-full w-[70px] ${isOpen ? "bg-red-500 text-white" : "bg-gray-200"} !text-[24px] font-[600]`}
        aria-expanded={isOpen}
      >
        {isOpen ? "−" : "+"}
      </button>
    </div>
    {isOpen && (
      <div className="transition-height duration-300 ease-in-out max-h-40 overflow-hidden">
        <p className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          {faq.answer}
        </p>
      </div>
    )}
  </div>
);

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const theme = useTheme();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-10 mt-24">
      <div className={`w-3/4 mx-auto ${theme === "dark" ? "bg-black-700" : "bg-white"} rounded-md shadow-md pt-3 transition duration-300 ease-in-out`}>
        <h1 className={`text-[36px] font-bold text-center mb-10 mt-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          Frequently Asked Questions
        </h1>
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;

