import { motion } from "framer-motion";
import {
  MENU_ITEM_STAGGER_VARIANT,
  SCALE_UP_VARIANT,
} from "./animations/framerMotionVaraints";

import EnglishIcon from "../../assets/icons/lang/united-kingdom.png";
import DetuchIcon from "../../assets/icons/lang/germany.png";
import FranceIcon from "../../assets/icons/lang/france.png";
import ItalianIcon from "../../assets/icons/lang/italy.png";

const LanguageDropdown = () => {
  return (
    <>
      <motion.div
        className='language-dropdown gradient-border p-3'
        variants={SCALE_UP_VARIANT}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.button
          className='solid-text flex gap-3 justify-start items-center hover:font-bold'
          variants={MENU_ITEM_STAGGER_VARIANT}
        >
          <img className='w-4' src={EnglishIcon} alt='en' />
          <span>English</span>
        </motion.button>
        <motion.button
          className='solid-text flex gap-3 justify-start items-center hover:font-bold'
          variants={MENU_ITEM_STAGGER_VARIANT}
        >
          <img className='w-4' src={DetuchIcon} alt='en' /> <span>Deutsch</span>
        </motion.button>
        <motion.button
          className='solid-text flex gap-3 justify-start items-center hover:font-bold'
          variants={MENU_ITEM_STAGGER_VARIANT}
        >
          <img className='w-4' src={FranceIcon} alt='en' />
          <span>Français</span>
        </motion.button>
        <motion.button
          className='solid-text flex gap-3 justify-start items-center hover:font-bold'
          variants={MENU_ITEM_STAGGER_VARIANT}
        >
          <img className='w-4' src={ItalianIcon} alt='en' />
          <span>Italiano</span>
        </motion.button>
      </motion.div>
    </>
  );
};

export default LanguageDropdown;
