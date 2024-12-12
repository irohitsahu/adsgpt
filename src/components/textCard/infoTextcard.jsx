import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import TextCursor from "../uiElements/animations/textCursorBlink";
import { useEffect, useState } from "react";
import SearchIcon from "../../assets/icons/adsGPT-search.jpg";
import { FADE_UP_ANIMATION_VARIANT } from "../uiElements/animations/framerMotionVaraints";
import InfoTextCardLoading from "./infoTextcardLoading";

export default function InfoTextCard({Sokets}) {
  const [isDataPresent] = useState(true);
  const baseText =
    "Last year, Google and YouTube ads saw a peak in audience targeting from May to August, while Facebook and Instagram dominated at the start and end of the year. In the last month alone, over 78,000 advertisers collectively posted more than 3.7 million ads across these platforms, totalling approximately $83 billion in spending.";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 5,
      ease: "easeInOut",
    });
    return controls.stop;
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {isDataPresent ? (
        <motion.div
          className='card infoText-card-gradient infoText-card flex justify-center items-center gap-3 p-3'
          variants={FADE_UP_ANIMATION_VARIANT}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        >
          
          <span className='gradient-text'>
          <img src={SearchIcon} alt='search' className='search-icon' />
            <motion.span>{displayText}</motion.span>
            <TextCursor />
          </span>
        </motion.div>
      ) : (
        <InfoTextCardLoading />
      )}
    </>
  );
}
