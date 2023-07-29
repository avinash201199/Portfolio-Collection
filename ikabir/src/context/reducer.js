/* eslint-disable no-case-declarations */
import {
  AUTH,
  SET_BG,
  SET_APP_OPEN,
  SET_APP_STATE,
  SET_ALREADY_OPENED_APPS,
  SET_ALL_APPS,
  SET_LOCK,
  SET_SHUTDOWN
} from "./constants";
import bgImage from "../assets/images/ubuntu-20-04-2.webp";
import apps from "../config/apps";

export const initialState = {
  isAuth: localStorage.getItem("isAuth") ? localStorage.getItem("isAuth") : false,
  bgImage: localStorage.getItem("bgImage") ? localStorage.getItem("bgImage") : bgImage,
  alreadyOpenedApps: [],
  initFavourite: {},
  appState: {
    focusedWindows: {},
    closedWindows: {},
    favouriteApps: {},
    hideSideBar: false,
    minimizedWindows: {},
    overlappedWindows: {},
    desktopApps: []
  },
  apps: apps,
  allApps: false,
  isLock: localStorage.getItem("isLock") ? JSON.parse(localStorage.getItem("isLock")) : false,
  isShutDown: localStorage.getItem("isShutDown")
    ? JSON.parse(localStorage.getItem("isShutDown"))
    : false
};

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("isAuth", true);
      localStorage.setItem("isLock", false);
      localStorage.setItem("isShutDown", false);
      return {
        ...state,
        isAuth: action.payload
      };
    case SET_BG:
      localStorage.setItem("bgImage", action.payload);
      return {
        ...state,
        bgImage: action.payload
      };
    case SET_APP_OPEN:
      const { appName, isOpen = false, isMaximized = false, isMinimized = false } = action.payload;
      return {
        ...state,
        apps: {
          ...state.apps,
          [appName]: { isOpen, isMaximized, isMinimized }
        }
      };
    case SET_APP_STATE:
      return {
        ...state,
        appState: { ...state.appState, ...action.payload }
      };
    case SET_ALREADY_OPENED_APPS:
      const apps = state.alreadyOpenedApps;
      apps.push(action.payload);
      return {
        ...state,
        alreadyOpenedApps: apps
      };
    case SET_ALL_APPS:
      return {
        ...state,
        allApps: action.payload
      };
    case SET_LOCK:
      localStorage.setItem("isLock", action.payload);
      return {
        ...state,
        isLock: action.payload
      };
    case SET_SHUTDOWN:
      localStorage.setItem("isShutDown", action.payload);
      return {
        ...state,
        isShutdown: action.payload
      };
  }
  return state;
};

export default reducer;
