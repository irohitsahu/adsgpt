import { motion } from "framer-motion";
import TextCursor from "../uiElements/animations/textCursorBlink";
import SearchIcon from "../../assets/icons/adsGPT-search.jpg";
import { FADE_UP_ANIMATION_VARIANT } from "../uiElements/animations/framerMotionVaraints";

export default function InfoTextCardLoading() {
  return (
    <>
      <motion.div
        className='animate-pulse bg-slate-300 dark:bg-slate-800  card infoText-card flex justify-center items-center gap-3 p-3'
        variants={FADE_UP_ANIMATION_VARIANT}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true }}
      >
        <span className='flex flex-col justify-center items-center gap-3 w-full'>
          <span className='bg-slate-400 dark:bg-slate-700 h-5 w-full rounded-md'></span>
          <span className='bg-slate-400 dark:bg-slate-700 h-5 w-full rounded-md'></span>
          <span className='bg-slate-400 dark:bg-slate-700 h-5 w-full rounded-md'></span>
          <span className='bg-slate-400 dark:bg-slate-700 h-5 w-full rounded-md'></span>
        </span>
      </motion.div>
    </>
  );
}
