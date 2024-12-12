import { motion } from "framer-motion";
import OpenChatBotDark from "../../assets/icons/open-chatbot-dark.png";
import OpenChatBotLight from "../../assets/icons/open-chatbot-light.png";
import { setChatbotVisibility, useUIController } from "../../context/context";
import { CLICK_ZOOM_IN } from "../uiElements/animations/framerMotionVaraints";

export default function ChatBotGlobalButton() {
  const [controller, dispatch] = useUIController();
  const { chatbotVisibility, isDarkMode } = controller;

  return (
    <>
      {!chatbotVisibility && (
        <motion.button
          className='chatbot-button open'
          variants={CLICK_ZOOM_IN}
          whileTap='whileTap'
          whileHover='whileHover'
          onClick={() => setChatbotVisibility(dispatch, !chatbotVisibility)}
        >
          <img
            src={isDarkMode ? OpenChatBotDark : OpenChatBotLight}
            alt='chatbot'
          />
        </motion.button>
      )}
    </>
  );
}
