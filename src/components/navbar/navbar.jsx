import { setDropdownVisibility, useUIController } from "../../context/context";
import AdsGTPLogoDark from "../../assets/icons/adsGPT-dark.png";
import AdsGTPLogoLight from "../../assets/icons/adsGPT-light.png";
import ProfileDropdown from "../uiElements/profileDropdown";
import LanguageDropdown from "../uiElements/languageDropdown";
import EnglishIcon from "../../assets/icons/lang/united-kingdom.png";
import { IoChevronUpOutline } from "react-icons/io5";
import ThemeToogleSwitch from "../uiElements/themeToggleSwitch";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { CLICK_ZOOM_IN } from "../uiElements/animations/framerMotionVaraints";

export default function Navbar() {
  const [controller, dispatch] = useUIController();
  const { isDarkMode, dropdownVisibility } = controller;
  return (
    <>
      <div className='navbar p-3 md:px-14'>
        <button className='navbar-logo'>
          <img src={isDarkMode ? AdsGTPLogoDark : AdsGTPLogoLight} alt='logo' />
        </button>
        <div className='flex justify-between items-center gap-3 lg:gap-5'>
          <div className='relative'>
            <motion.button
              className='solid-text flex justify-center items-center gap-3'
              variants={CLICK_ZOOM_IN}
              whileTap='whileTap'
              whileHover='whileHover'
              onClick={(e) => {
                setDropdownVisibility(
                  dispatch,
                  "LanguageDropdown",
                  !dropdownVisibility.LanguageDropdown
                );
                e.stopPropagation();
              }}
            >
              <img className='w-4' src={EnglishIcon} alt='en' />
              <span className='hidden lg:block'>English</span>
              <motion.div
                animate={{
                  rotate: dropdownVisibility.LanguageDropdown ? 180 : 0,
                }}
              >
                <IoChevronUpOutline />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {dropdownVisibility.LanguageDropdown && <LanguageDropdown />}
            </AnimatePresence>
          </div>
          <ThemeToogleSwitch />
          <div className='relative'>
            <motion.button
              className='profile-image solid-text'
              variants={CLICK_ZOOM_IN}
              whileTap='whileTap'
              whileHover='whileHover'
              onClick={(e) => {
                setDropdownVisibility(
                  dispatch,
                  "ProfileDropdown",
                  !dropdownVisibility.ProfileDropdown
                );
                e.stopPropagation();
              }}
            >
              AH
            </motion.button>
            <AnimatePresence>
              {dropdownVisibility.ProfileDropdown && <ProfileDropdown />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
