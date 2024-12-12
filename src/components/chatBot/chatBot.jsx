import CloseChatbot from "../../assets/icons/close-chatbot.png";
import Bot from "../../assets/icons/bot.png";
import ChatBotProfile from "../../assets/icons/chat-bot-profile.png";
import { setChatbotVisibility, useUIController } from "../../context/context";
import ChatBotInputField from "./chatbotInput";
import { motion } from "framer-motion";
import {
  CLICK_ZOOM_IN,
  FADE_UP_ANIMATION_VARIANT,
  MENU_ITEM_STAGGER_VARIANT,
  SCALE_UP_VARIANT,
} from "../uiElements/animations/framerMotionVaraints";
import React, { useEffect, useRef } from 'react';

export default function ChatBot({ chats, Sokets, setChats }) {
  const [controller, dispatch] = useUIController();
  const { chatbotVisibility } = controller;

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <>
      <div className='chatbot card'>
        <div className='chatbot-header p-3'>
          <motion.button
            className='chatbot-button close'
            variants={CLICK_ZOOM_IN}
            whileTap='whileTap'
            whileHover='whileHover'
            onClick={() => setChatbotVisibility(dispatch, !chatbotVisibility)}
          >
            <img src={CloseChatbot} alt='chatbot' />
          </motion.button>
          <div className='flex justify-center items-center gap-2'>
            <img className="h-6" src={Bot} alt='bot' />
            <span>Chats Bot</span>
          </div>
        </div>
        <div className='chatbot-body p-3'>
          <span>Welcome Rajdeep !</span>
          <motion.div 
            className='flex gap-3 flex-wrap justify-center items-center'
            variants={SCALE_UP_VARIANT}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            {[...Array(4)].map((_, index) => (
              <motion.button
                key={index}
                className='chatbot-suggestion-box p-3'
                variants={MENU_ITEM_STAGGER_VARIANT}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lorem ipsum dolor sit amet consectetur.
              </motion.button>
            ))}
          </motion.div>
          <div className='chatbot-message-box'>
            {chats.map((text, index) => (
              <React.Fragment key={index}>
                {text.responseby === "user" ? (
                  <motion.div
                    className='outgoing-message'
                    variants={FADE_UP_ANIMATION_VARIANT}
                    initial='initial'
                    whileInView='whileInView'
                    viewport={{ once: false }}
                  >
                    <span className='content p-2'>
                      {text?.message}
                    </span>
                    <span className='profile-image'>RS</span>
                  </motion.div>
                ) : (
                  <motion.div
                    className='incoming-message'
                    variants={FADE_UP_ANIMATION_VARIANT}
                    initial='initial'
                    whileInView='whileInView'
                    viewport={{ once: false }}
                  >
                    <span className='profile-image'>
                    <img src={ChatBotProfile} alt='bot' />
                    </span>
                    <span className='content p-3'>
                      {text?.message}
                    </span>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>
        <div className='chatbot-footer p-3'>
          <ChatBotInputField Sokets={Sokets} setChats={setChats} chats={chats} />
        </div>
      </div>
    </>
  );
}
