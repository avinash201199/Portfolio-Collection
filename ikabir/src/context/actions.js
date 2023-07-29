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

const getActions = (dispatch) => {
  return {
    login: (val) => dispatch({ type: AUTH, payload: val }),
    setBg: (bgImage) => dispatch({ type: SET_BG, payload: bgImage }),
    setAppOpen: (app) => dispatch({ type: SET_APP_OPEN, payload: app }),
    setAppState: (appState) => dispatch({ type: SET_APP_STATE, payload: appState }),
    setAlreadyOpenedApps: (appId) => dispatch({ type: SET_ALREADY_OPENED_APPS, payload: appId }),
    setAllApps: (allApps) => dispatch({ type: SET_ALL_APPS, payload: allApps }),
    setLock: (value) => dispatch({ type: SET_LOCK, payload: value }),
    setShutDown: (value) => dispatch({ type: SET_SHUTDOWN, payload: value })
  };
};

export default getActions;
