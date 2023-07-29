import moment from "moment";

export const getCurrentTime = (date) => {
  return moment(date).format("ddd MMM DD HH:mm:ss");
};
