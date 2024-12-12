import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANT } from "./animations/framerMotionVaraints";

const BackdropOverlay = () => {
  return (
    <>
      <motion.div
        className="backdrop-overlay"
        variants={FADE_UP_ANIMATION_VARIANT}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      ></motion.div>
    </>
  );
};

export default BackdropOverlay;
