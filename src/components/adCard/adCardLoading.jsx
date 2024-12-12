import { useUIController } from "../../context/context";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANT } from "../uiElements/animations/framerMotionVaraints";

export default function AdCardLoading() {
  const [controller] = useUIController();
  return (
    <>
      <motion.div
        className={`animate-pulse card ad-card lg:w-[calc(100%-24px)] inline-block`}
        variants={FADE_UP_ANIMATION_VARIANT}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true  }}
      >
        <div className='flex justify-between bg-slate-400 dark:bg-slate-800 gap-3 p-3 w-full relative rounded-t-md'>
          <div className='ad-card-profile-img'>
            <div className='bg-slate-200 dark:bg-slate-700'></div>
          </div>

          <div className='flex flex-wrap justify-between items-center w-1/2'>
            <span className='text-start text-sm w-full h-10 bg-slate-200 dark:bg-slate-700 rounded'></span>
          </div>
        </div>
        <div className='bg-slate-300 dark:bg-slate-700 product-img h-80'></div>
        <div className='w-full p-3 h-14 bg-slate-400 dark:bg-slate-800 rounded-b-md'></div>
      </motion.div>
    </>
  );
}
