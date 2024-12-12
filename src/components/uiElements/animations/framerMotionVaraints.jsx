import { easeInOut } from "framer-motion";

export const FADE_UP_ANIMATION_VARIANT = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const FADE_UP_FROM_END_ANIMATION_VARIANT = {
  initial: { opacity: 0, y: 500 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const FADE_LEFT_ANIMATION_VARIANT = {
  initial: { opacity: 0, x: 100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const FADE_LEFT_FROM_END_ANIMATION_VARIANT = {
  initial: { opacity: 1, x: 500 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 1,
    x: 500,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};

export const TEXT_CURSOR_BLINK_VARIANT = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export const SCALE_UP_VARIANT = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  exit: { opacity: 0, scale: 0 },
};

export const CLICK_ZOOM_IN = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

export const MENU_ITEM_STAGGER_VARIANT = {
  initial: { opacity: 0, scale: 0, x: 100 },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0, scale: 0 },
};
