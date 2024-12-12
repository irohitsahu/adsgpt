import { useEffect } from "react";
import { setIsDarkMode, useUIController } from "../../context/context";
import { motion } from "framer-motion";
import { CLICK_ZOOM_IN } from "./animations/framerMotionVaraints";

export default function ThemeToogleSwitch() {
  const [controller, dispatch] = useUIController();
  const { isDarkMode } = controller;
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(dispatch, newIsDarkMode);
    localStorage.setItem("isDarkMode", newIsDarkMode);
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const isDarkModeFromLocalStorage = localStorage.getItem("isDarkMode");
    if (isDarkModeFromLocalStorage !== null) {
      setIsDarkMode(dispatch, JSON.parse(isDarkModeFromLocalStorage));
    } else {
      setIsDarkMode(dispatch, false);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <motion.div
      className='gradient-border toggle-theme-container w-14 h-8 align-middle select-none transition duration-200 ease-in'
      variants={CLICK_ZOOM_IN}
      whileTap='whileTap'
      whileHover='whileHover'
    >
      <input
        type='checkbox'
        name='toggle'
        id='toggle'
        className='toggle-theme absolute block w-5 h-5 appearance-none cursor-pointer'
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label
        htmlFor='toggle'
        className='toggle-label block overflow-hidden h-8 w-14 cursor-pointer'
      ></label>
    </motion.div>
  );
}
