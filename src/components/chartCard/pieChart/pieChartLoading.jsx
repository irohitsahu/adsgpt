import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANT } from "../../uiElements/animations/framerMotionVaraints";

export default function PieChartLoading() {
  return (
    <>
      <motion.div
        className="animate-pulse bg-slate-300 dark:bg-slate-800 card chart-card flex flex-col justify-center items-center gap-3 p-3"
        variants={FADE_UP_ANIMATION_VARIANT}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
                <h1 className='bg-slate-200 dark:bg-slate-700 h-5 w-2/3 rounded-md text-xl'></h1>
        <div className="flex flex-row justify-center items-center gap-5 w-full">
        <div className='h-80 w-full bg-slate-200 dark:bg-slate-700 rounded-md'></div>
        </div>
      </motion.div>
    </>
  );
}
