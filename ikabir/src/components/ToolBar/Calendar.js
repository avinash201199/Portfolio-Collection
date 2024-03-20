import React, { useState } from "react";
import moment from "moment";
import SortLeftIcon from "../../assets/svg/SortLeftIcon";
import SortRightIcon from "../../assets/svg/SortRightIcon";
import { makeStyles } from "@mui/styles";

const common = {
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  sb: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  typography: {
    fontSize: "11px",
    color: "#555",
    fontWeight: 400,
    textAlign: "center",
    lineHeight: "11px"
  }
};

const useStyles = makeStyles({
  calendar: {
    width: "100%",
    height: "275px",
    padding: "1ch",
    borderRadius: "0.5ch",
    border: "1px solid #cdcdcd",
    boxShadow:
      "0px 2px 1px -1px rgba(255, 255, 255, 0.2),0px 1px 1px 0px rgba(255, 255, 255, 0.14),0px 1px 3px 0px rgba(255, 255, 255, 0.12)",
    background: "#fff",
    overflow: "hidden"
  },
  navigation: {
    ...common.sb,
    marginBottom: "1.5ch"
  },
  weeks: {
    ...common.sb,
    marginBottom: "1.5ch",
    width: "100%"
  },
  week: {
    ...common.typography,
    width: "calc(100% / 8)"
  },
  days: {
    display: "flex",
    justifyContent: "space-between"
  },
  day: {
    ...common.center,
    ...common.typography,
    width: "calc(100% / 8)"
  },
  day_box: {
    backgroundColor: "#eee",
    borderRadius: "2px",
    padding: "4px 5px"
  },
  day_wrapper: {
    ...common.typography,
    ...common.center,
    position: "relative",
    width: "calc(100% / 8)",
    height: "32px",
    backgroundColor: "#fff"
  },
  btn: {
    display: "flex",
    padding: "3px 4px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#dedede"
    },
    "&:active": {
      backgroundColor: "#ccc"
    }
  },
  date: {
    "&:hover": {
      backgroundColor: "#dedede"
    }
  }
});

const Calendar = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(moment());

  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").add(7, "day").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];
  const weeks = ["", "S", "M", "T", "W", "T", "F", "S"];
  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  const isNotMonth = (day) => moment(day).isSame(value, "month");
  const isActive = (day) => day.isSame(new Date(), "day");
  const next = () => setValue((state) => state.clone().add(1, "month"));
  const previous = () => setValue((state) => state.clone().subtract(1, "month"));

  return (
    <div {...props} className={classes.calendar}>
      <div className={classes.navigation}>
        <button onClick={previous} className={classes.btn}>
          <SortLeftIcon style={{ width: "16px" }} />
        </button>
        <p style={{ fontSize: "16px", color: "#444" }}>{value.format("MMMM")}</p>
        <button onClick={next} className={classes.btn}>
          <SortRightIcon style={{ width: "16px" }} />
        </button>
      </div>
      <div className={classes.weeks}>
        {weeks.map((week, i) => (
          <div className={classes.week} key={i}>
            {week}
          </div>
        ))}
      </div>

      {calendar.map((week, i) => (
        <div className={classes.days} key={i}>
          <div className={classes.day}>
            <span className={classes.day_box}>{week[6].format("WW")}</span>
          </div>
          {week.map((day, j) => (
            <div className={classes.day_wrapper} key={j}>
              <span
                className={classes.date}
                style={{
                  color: isActive(day) ? "#eee" : (j == 0 || j == 6 || !isNotMonth(day)) && "#bbb",
                  background: isActive(day) && "#E95420",
                  padding: isActive(day) ? "8.7px 8px" : "7.7px 7px",
                  borderRadius: "50%"
                }}
              >
                {day.format("DD")}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
