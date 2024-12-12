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
  const [adsData, setAdsData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [totalAdsCount, setToltalAdsCount] = useState(0);
  const [currentContext, setCurrentContext] = useState("")
  const scrolReff = useRef();
  const [contentLoaded, setContentLoaded] = useState(true); // Ensure you have a state for this
  const data = {}; // Make sure this is set appropriately to your data source

  async function handleScrollAds(skip , limit){
    isFetchingBlock = true;
    setContentLoaded(true)
    const response = await fetchOnScrollFetch(skip, limit, currentContext?.currentContext, currentContext?.contextId);
    setContentLoaded(false)
    isFetchingBlock = false;
    const heler = adsData
     heler.push(...response.adsData.adsData)
    setAdsData([...heler, ])
    setToltalAdsCount(response?.adsData?.overallCount)
   }
 


  const handleScroll = () => {
    try {

      const bodyElement = scrolReff.current;
      if (!bodyElement) return;
      const isScrollingDown = bodyElement.scrollTop > (bodyElement.dataset.scrollTop || 0);
      const isScrollingRight = bodyElement.scrollLeft > (bodyElement.dataset.scrollLeft || 0);
      
      bodyElement.dataset.scrollTop = bodyElement.scrollTop;
      bodyElement.dataset.scrollLeft = bodyElement.scrollLeft;
      if ((isScrollingDown || isScrollingRight )&& !isFetchingBlock) {
        const isBottom = (bodyElement.scrollTop + bodyElement.clientHeight) >= (bodyElement.scrollHeight - 200);
        if (isBottom  && skip <= totalAdsCount & !isFetchingBlock) {
          setSkip((prevSkip) => prevSkip + limit);
          handleScrollAds(skip +limit, limit)

        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const scrollElement = scrolReff.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isFetchingBlock, contentLoaded, skip, limit, currentContext]);

  return (
    <>
      <div className="dashboard">
        <Navbar />
        <div
          className={`card-container lg:grid lg:grid-cols-12 ${
            chatbotVisibility ? "xl:w-[76%]" : "xl:w-full"
          }`}
        >
          <div className={`ad-container lg:col-span-4 xl:col-span-5`} ref={scrolReff}>
            {onMobile ? (
              <>
                <AdCard adsData={adsData}  />
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
                  <AdCard adsData={adsData} />
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
