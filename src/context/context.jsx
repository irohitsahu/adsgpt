import { createContext, useContext, useReducer, useMemo } from "react";

import PropTypes from "prop-types";

const UIFunctionality = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CHATBOT_VISIBILITY": {
      return { ...state, chatbotVisibility: action.value };
    }
    case "DROPDOWN_VISIBILITY": {
      return {
        ...state,
        dropdownVisibility: {
          ...state.dropdownVisibility,
          [action.dropdownID]: action.value,
        },
      };
    }
    case "AD_DROPDOWN_VISIBILITY": {
      if (action.dropdownID === "") {
        return { ...state, adDropdownVisibility: {} };
      }
      return {
        ...state,
        adDropdownVisibility: {
          ...state.adDropdownVisibility,
          [action.dropdownID]: action.value,
        },
      };
    }
    case "DARKMODE": {
      return { ...state, isDarkMode: action.value };
    }
    case "ON_MOBILE": {
      return { ...state, onMobile: action.value };
    }
    case "CAN_CHAT": {
      return { ...state, canChat: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UIControllerProvider({ children }) {
  const initialState = {
    chatbotVisibility: false,
    dropdownVisibility: {
      ProfileDropdown: false,
      LanguageDropdown: false,
    },
    adDropdownVisibility: {},
    isDarkMode: true,
    onMobile: false,
    canChat: true,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return (
    <UIFunctionality.Provider value={value}>
      {children}
    </UIFunctionality.Provider>
  );
}

function useUIController() {
  const context = useContext(UIFunctionality);

  if (!context) {
    throw new Error(
      "useUIController should be used inside the UIControllerProvider."
    );
  }

  return context;
}

const setChatbotVisibility = (dispatch, value) =>
  dispatch({ type: "CHATBOT_VISIBILITY", value });
const setDropdownVisibility = (dispatch, dropdownID, value) =>
  dispatch({ type: "DROPDOWN_VISIBILITY", dropdownID, value });
const setAdDropdownVisibility = (dispatch, dropdownID, value) =>
  dispatch({ type: "AD_DROPDOWN_VISIBILITY", dropdownID, value });
const setIsDarkMode = (dispatch, value) =>
  dispatch({ type: "DARKMODE", value });
const setOnMobile = (dispatch, value) => dispatch({ type: "ON_MOBILE", value });
const setCanChat = (dispatch, value) => dispatch({ type: "CAN_CHAT", value });
export {
  UIControllerProvider,
  useUIController,
  setChatbotVisibility,
  setDropdownVisibility,
  setAdDropdownVisibility,
  setIsDarkMode,
  setOnMobile,
  setCanChat
};

UIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
