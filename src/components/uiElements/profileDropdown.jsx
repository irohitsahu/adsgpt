import { motion } from "framer-motion";
import {
  CLICK_ZOOM_IN,
  SCALE_UP_VARIANT,
  MENU_ITEM_STAGGER_VARIANT,
} from "./animations/framerMotionVaraints";

const ProfileDropdown = () => {
  return (
    <>
      <motion.div
        onClick={(e) => e.stopPropagation}
        className='profile-dropdown gradient-border'
        variants={SCALE_UP_VARIANT}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.div
          className='flex flex-row justify-start items-center gap-3 p-3 border-b w-full'
          variants={MENU_ITEM_STAGGER_VARIANT}
        >
          <motion.button
            className='profile-image solid-text'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            AH
          </motion.button>
          <span className='flex flex-col'>
            <span className='solid-text'>Arushi Handa</span>
            <span className='solid-text'>aru@gmail.com</span>
          </span>
        </motion.div>
        <motion.div className='flex flex-col gap-1 justify-start items-start p-3'>
          <motion.button
            className='solid-text hover:font-bold'
            variants={MENU_ITEM_STAGGER_VARIANT}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Revert back to dashboard
          </motion.button>
          <motion.button
            className='solid-text hover:font-bold'
            variants={MENU_ITEM_STAGGER_VARIANT}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProfileDropdown;
