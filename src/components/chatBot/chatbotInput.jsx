import { motion } from "framer-motion";
import SendMessageArrow from "../../assets/icons/send-arrow.png";
import { CLICK_ZOOM_IN } from "../uiElements/animations/framerMotionVaraints";
import { useState, useCallback } from "react";
import { useUIController, setCanChat } from "../../context/context";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}-${minutes}-${seconds}`;
}

export default function ChatBotInputField({ Sokets, setChats }) {
  const [controller, dispatch] = useUIController();
  const { canChat } = controller;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback((e) => {
    e.preventDefault();

    setInputValue(e.target.value);
  }, []);

  const handleSendMessage = useCallback((e) => {
      if (inputValue!=="" && inputValue.trim() && Sokets) {
      const newMessage = {
        uid: "sfjkdhsdjhksfd",
        chatId:"834982309",
        message: inputValue,
        timestamp: formatDate(new Date()),
        responseby: "user"
      };


      setChats((prevChats) => [...prevChats, newMessage]);
      setInputValue("");
      setCanChat(dispatch, false)
      Sokets.emit("chat", newMessage);
      
      };

  }, [inputValue, setChats, Sokets]);

  return (
    <>
      <input
         onKeyDown={(event)=>{ 
          if (event.key === 'Enter') {
            handleSendMessage();
           }}}
        className='chatbot-input'
        type='text'
        placeholder={canChat ? 'Write Something' : 'Generating your data...'}
        value={inputValue}
        onChange={handleInputChange}
        disabled={!canChat}
      />
      <button className="send-msg" onClick={handleSendMessage} disabled={!canChat}>
        <motion.img
          src={SendMessageArrow}
          alt='send'
          variants={CLICK_ZOOM_IN}
          whileTap='whileTap'
          whileHover='whileHover'
        />
      </button>
    </>
  );
}
