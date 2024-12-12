import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANT } from "../../uiElements/animations/framerMotionVaraints";

const LineChartLoading = () => {
  return (
    <>
      <motion.div
        className='animate-pulse bg-slate-300 dark:bg-slate-800 card chart-card flex flex-col justify-center items-center gap-3 p-3'
        variants={FADE_UP_ANIMATION_VARIANT}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true }}
      >
        <h1 className='bg-slate-200 dark:bg-slate-700 h-5 w-2/3 rounded-md text-xl'></h1>
        <div className='flex flex-col xl:flex-row justify-center items-center gap-5 w-full'>
          <div className='h-80 w-full xl:w-[70%] bg-slate-200 dark:bg-slate-700 rounded-md'></div>
          <div className='flex flex-wrap xl:flex-col justify-center items-center h-full w-full xl:w-[30%] gap-5'>
            <motion.div
              className='bg-slate-200 dark:bg-slate-700 p-3 flex flex-col justify-center items-center rounded-md gap-3 w-full'
              variants={FADE_UP_ANIMATION_VARIANT}
              initial='initial'
              whileInView='whileInView'
              viewport={{ once: true }}
            >
              <h3 className='bg-slate-400 dark:bg-slate-800 h-5 w-2/3 rounded-md'></h3>
              <span className='bg-slate-400 dark:bg-slate-800 h-5 w-full rounded-md'></span>
            </motion.div>
            <motion.div
              className='bg-slate-200 dark:bg-slate-700 p-3 flex flex-col justify-center items-center rounded-md gap-3 w-full'
              variants={FADE_UP_ANIMATION_VARIANT}
              initial='initial'
              whileInView='whileInView'
              viewport={{ once: true }}
            >
              <h3 className='bg-slate-400 dark:bg-slate-800 h-5 w-2/3 rounded-md'></h3>
              <span className='bg-slate-400 dark:bg-slate-800 h-5 w-full rounded-md'></span>
            </motion.div>
            <motion.div
              className='bg-slate-200 dark:bg-slate-700 p-3 flex flex-col justify-center items-center rounded-md gap-3 w-full'
              variants={FADE_UP_ANIMATION_VARIANT}
              initial='initial'
              whileInView='whileInView'
              viewport={{ once: true }}
            >
              <h3 className='bg-slate-400 dark:bg-slate-800 h-5 w-2/3 rounded-md'></h3>
              <span className='bg-slate-400 dark:bg-slate-800 h-5 w-full rounded-md'></span>
            </motion.div>
            <motion.div
              className='bg-slate-200 dark:bg-slate-700 p-3 flex flex-col justify-center items-center rounded-md gap-3 w-full'
              variants={FADE_UP_ANIMATION_VARIANT}
              initial='initial'
              whileInView='whileInView'
              viewport={{ once: true }}
            >
              <h3 className='bg-slate-400 dark:bg-slate-800 h-5 w-2/3 rounded-md'></h3>
              <span className='bg-slate-400 dark:bg-slate-800 h-5 w-full rounded-md'></span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LineChartLoading;
