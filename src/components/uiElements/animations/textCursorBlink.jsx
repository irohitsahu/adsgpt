import { motion } from "framer-motion";
import { TEXT_CURSOR_BLINK_VARIANT } from "./framerMotionVaraints";

export default function TextCursor() {
  return (
    <motion.div
      variants={TEXT_CURSOR_BLINK_VARIANT}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-white"
    />
  );
}
