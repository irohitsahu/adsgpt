import { AnimatePresence, motion } from "framer-motion";
import AdCard from "../../components/adCard/adCard";
import LineChart from "../../components/chartCard/lineChart/lineChart";
import PieChart from "../../components/chartCard/pieChart/pieChart";
import ChatBot from "../../components/chatBot/chatBot";
import ChatBotGlobalButton from "../../components/chatBot/chatbotGlobalButton";
import Navbar from "../../components/navbar/navbar";
import InfoTextCard from "../../components/textCard/infoTextcard";
import BackdropOverlay from "../../components/uiElements/backdropOverlay.";
import {
  setOnMobile,
  useUIController,
  setCanChat,
} from "../../context/context";
import { FADE_LEFT_FROM_END_ANIMATION_VARIANT } from "../../components/uiElements/animations/framerMotionVaraints";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import fetchOnScrollFetch from '../../components/apis/onscrollAds';
import MapAnimatedBubble from "../../components/chartCard/mapAnimatedBubble/mapAnimatedBubble";
import RealTimeDataSorting from "../../components/chartCard/realTimeDataSorting/realTimeDataSorting";
import ColumnMovingBullet from "../../components/chartCard/columnWithMovingBullets/columnWithMovingBullets";

let isFetchingBlock= false; // Ensure you have a state for this

export default function Dashboard() {
  const [controller, dispatch] = useUIController();
  const { chatbotVisibility, onMobile } = controller;
  const [chats, setChats] = useState([]);
  const [Sokets, setSocket] = useState();
  const [analyticsChartBottom, setAnalyticsChartBottom] = useState({
    chartArr: "",
    title: "",
  });
  const [analyticsChartTop, setAnalyticsChartTop] = useState({
    chartArr: "",
    cards: "",
    title: "",
  });

 


  return (
    <>
      <div className="dashboard">
        <Navbar />
        <div
          className={`card-container lg:grid lg:grid-cols-12 ${
            chatbotVisibility ? "xl:w-[76%]" : "xl:w-full"
          }`}
        >
          <div className={`ad-container lg:col-span-4 xl:col-span-5`}>
            {onMobile ? (
              <>
                <AdCard  />
              </>
            ) : (
              <>
                <div
                  className={`lg:colums-1 gap-0 w-full lg:columns-1 ${
                    chatbotVisibility
                      ? "xl:columns-1 2xl:columns-2"
                      : "xl:columns-2 overflow-hidden"
                  }`}
                >
                  <AdCard />
                </div>
              </>
            )}
          </div>
          <div
            className={`chart-container lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-6`}
          >
            <LineChart analyticsChartTop={analyticsChartTop} />
            {/* <InfoTextCard Sokets={Sokets} /> */}
            <PieChart analyticsChartBottom={analyticsChartBottom} />
            <MapAnimatedBubble/>
            <RealTimeDataSorting/>
            <ColumnMovingBullet/>
          </div>
        </div>
        <ChatBotGlobalButton />

        {chatbotVisibility && <BackdropOverlay />}
        <AnimatePresence>
          {chatbotVisibility && (
            <motion.div
              className="chatbot-container xl:w-[calc(24%-24px)]"
              variants={FADE_LEFT_FROM_END_ANIMATION_VARIANT}
              initial="initial"
              animate="whileInView"
              exit="exit"
              // viewport={{ once: true }}
            >
              <ChatBot chats={chats} Sokets={Sokets} setChats={setChats} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
