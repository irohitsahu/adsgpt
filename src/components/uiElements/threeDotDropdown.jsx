import { motion } from "framer-motion";
import {
  MENU_ITEM_STAGGER_VARIANT,
  SCALE_UP_VARIANT,
} from "./animations/framerMotionVaraints";

const ThreeDotDropdown = () => {
  return (
    <>
      <motion.div
        className='threedot-dropdown p-3'
        variants={SCALE_UP_VARIANT}
        initial='initial'
        animate='animate'
        exit='exit'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <motion.button
          className='solid-text hover:font-bold'
          variants={MENU_ITEM_STAGGER_VARIANT}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Open In PAS
        </motion.button>
        <motion.button
          className='solid-text hover:font-bold'
          variants={MENU_ITEM_STAGGER_VARIANT}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Open Ad
        </motion.button>
      </motion.div>
    </>
  );
};

export default ThreeDotDropdown;
