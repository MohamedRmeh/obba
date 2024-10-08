import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Select from "react-select";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleToggleCategories = () => setCategoriesOpen(!isCategoriesOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const countryOptions = [
    { value: "syria", label: "سوريا" },
    { value: "germany", label: "ألمانيا" },
    { value: "uae", label: "الإمارات" },
    { value: "egypt", label: "مصر" },
    { value: "kuwait", label: "الكويت" },
  ];

  const selectStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#f2f2f2",
      borderRadius: "9999px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "5px 10px",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "10px",
    }),
  };

  return (
    <>
      <div className="sm:hidden block" onClick={handleToggleMenu}>
        <Image
          className="cursor-pointer"
          src="/icons/menu.png"
          width={30}
          height={35}
          alt="menu"
        />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-4/5 max-w-sm bg-white font-sans shadow-lg z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="mb-5">
                  <button onClick={handleToggleMenu}>
                    <Image
                      src="/icons/close.png"
                      width={25}
                      height={25}
                      alt="close"
                    />
                  </button>
                </div>
               
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed h-screen inset-0 bg-black z-40"
              onClick={handleToggleMenu}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
