import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-0 right-0 bg-[#00df9a] min-w-[4rem] rounded-full md:font-medium my-6 mx-[30px] py-3 text-black text-center"
          onClick={scrollToTop}
          title="Back to top"
        >
          <AiOutlineArrowUp className="mx-auto" size={30} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
