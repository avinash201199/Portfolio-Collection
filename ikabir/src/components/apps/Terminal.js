/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import React, { useState, useEffect } from "react";
import $ from "jquery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styled from "@mui/styles/styled";
import giphy from "../../assets/images/giphy.gif";
import { ClickAwayListener } from "@mui/material";

const StyledInput = styled("input")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  opacity: 0,
  outline: "none",
  background: "transparent",
  cursor: "text"
}));

const Terminal = ({ openApp }) => {
  const [obj, setObj] = useState({
    rows: 1,
    terminal: [],
    cursor: "",
    cd: "~",
    curDirname: "home",
    prevCommands: [],
    commandsInd: -1,
    childDirs: {
      home: ["Desktop"],
      Desktop: ["About", "Firefox", "Resume.pdf", "Trash"],
      About: ["Skills", "Education", "Projects", "Skills", "Resume.pdf"],
      Skills: ["React.js", "Node.js", "Express.js", "SQL", "MongoDB", "Django", "PostgreSQL"],
      Projects: [
        "Portfolio",
        "Fabbl",
        "Asynchronous Youtube Search",
        "Virtual Queue",
        "Real Estate App",
        "Find Who Unfollows You"
      ],
      languages: ["Javascript", "Java", "Python"]
    }
  });
  const [curId, setCurId] = useState(1);

  useEffect(() => {
    initializeTerminal();
  }, []);

  useEffect(() => {
    getCursor(curId);
  }, [curId]);

  const getCursor = (id) => {
    clearInterval(obj.cursor);
    $(`input#terminal-input-${id}`).trigger("focus");
    $(`input#terminal-input-${id}`).on("input", function () {
      $(`#cmd span#show-${id}`).text($(this).val());
    });
    obj.cursor = window.setInterval(function () {
      if ($(`#cursor-${id}`).css("visibility") === "visible") {
        $(`#cursor-${id}`).css({ visibility: "hidden" });
      } else {
        $(`#cursor-${id}`).css({ visibility: "visible" });
      }
    }, 500);
  };

  useEffect(() => {
    startCursor(obj.rows - 2);
    return () => {
      clearInterval(obj.cursor);
    };
  }, [obj.rows]);

  const initializeTerminal = () => {
    clearInterval(obj.cursor);
    $("#terminalBody").empty();
    addNewRow();
  };

  const addNewRow = () => {
    const terminal = obj.terminal;
    terminal.push(terminalRow(obj.rows));
    setCurId(obj.rows);
    setObj((state) => ({ ...state, terminal }));
    obj.rows += 2;
  };

  const terminalRow = (id) => {
    return (
      <React.Fragment key={id}>
        <Box sx={{ width: "100%", height: "1.25rem", display: "flex", px: 0.2 }}>
          <Stack direction="row">
            <Typography sx={{ color: "rgb(78, 158, 6)" }}>ubuntu@ubuntu2004</Typography>
            <Typography sx={{ color: "#fff", fontWeight: 500, margin: "0 1px" }}>:</Typography>
            <Typography sx={{ color: "rgb(52, 101, 164)" }}>{obj.cd}</Typography>
            <Typography sx={{ ml: "1px", mr: ".25rem", fontWeight: 500, color: "#fff" }}>
              $
            </Typography>
          </Stack>
          <Box
            id="cmd"
            onClick={focusTerminal}
            sx={{
              backgroundColor: "transparent",
              position: "relative",
              overflow: "hidden",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "0%",
              cusror: "text"
            }}
          >
            <Typography
              component="span"
              id={`show-${id}`}
              sx={{
                float: "left",
                whiteSpace: "pre",
                paddingBottom: "0.25rem",
                opacity: 1,
                fontWeight: 400,
                letterSpacing: "1px"
              }}
            />
            <Typography
              id={`cursor-${id}`}
              sx={{
                float: "left",
                marginTop: "0.25rem",
                width: "0.375rem",
                height: "0.8725rem",
                backgroundColor: "#fff"
              }}
            />
            <StyledInput
              id={`terminal-input-${id}`}
              data-row-id={id}
              spellCheck={false}
              autoFocus={true}
              autoComplete={"off"}
              type="text"
              onBlur={unFocusCursor}
              onKeyDown={handleEnter}
            />
          </Box>
        </Box>
        <Box id={`row-result-${id}`} sx={{ my: 0.5, whiteSpace: "pre-line" }}></Box>
      </React.Fragment>
    );
  };

  const focusTerminal = (e) => {
    clearInterval(obj.cursor);
    startCursor($(e.target).data("row-id"));
  };

  const unFocusCursor = (e) => {
    stopCursor($(e.target).data("row-id"));
  };

  const startCursor = (id) => {
    clearInterval(obj.cursor);
    $(`input#terminal-input-${id}`).trigger("focus");
    $(`input#terminal-input-${id}`).on("input", function () {
      console.log($(`#cmd span#show-${id}`), id);
      $(`#cmd span#show-${id}`).text($(this).val());
    });
    obj.cursor = window.setInterval(function () {
      if ($(`#cursor-${id}`).css("visibility") === "visible") {
        $(`#cursor-${id}`).css({ visibility: "hidden" });
      } else {
        $(`#cursor-${id}`).css({ visibility: "visible" });
      }
    }, 500);
  };

  const stopCursor = (id) => {
    clearInterval(obj.cursor);
    $(`#cursor-${id}`).css({ visibility: "visible" });
  };

  const removeCursor = (rowId) => {
    stopCursor(rowId);
    $(`#cursor-${rowId}`).css({ display: "none" });
  };

  const clearInput = (id) => {
    $(`input#terminal-input-${id}`).trigger("blur");
  };

  const handleEnter = (e) => {
    const rowId = $(e.target).data("row-id");
    let prev_command;
    switch (e.key) {
      case "Enter":
        const curCommand = $(`input#terminal-input-${rowId}`).val().trim();
        if (curCommand) {
          removeCursor(rowId);
          handleCommand(curCommand, rowId);
        } else {
          return;
        }
        obj.prevCommands.push(curCommand);
        obj.commandsInd = obj.prevCommands.length - 1;
        clearInput(rowId);
        break;
      case "ArrowUp":
        if (obj.commandsInd <= -1) prev_command = "";
        else prev_command = obj.prevCommands[obj.commandsInd];

        $(`input#terminal-input-${rowId}`).val(prev_command);
        $(`#show-${rowId}`).text(prev_command);

        obj.commandsInd--;
        break;
      case "ArrowDown":
        if (obj.commandsInd >= obj.prevCommands.length) return;
        if (obj.commandsInd <= -1) obj.commandsInd = 0;
        if (obj.commandsInd === obj.prevCommands.length) prev_command = "";
        else prev_command = obj.prevCommands[obj.commandsInd];

        $(`input#terminal-input-${rowId}`).val(prev_command);
        $(`#show-${rowId}`).text(prev_command);

        obj.commandsInd++;
        break;
      default:
        break;
    }
  };

  const childDirectories = (parent) => {
    let files = [];
    files.push(`<div class="class1">`);
    obj.childDirs[parent].forEach((file) => {
      files.push(`<span class="class2">'${file}'</span>`);
    });
    files.push(`</div>`);
    return files;
  };
  const closeTerminal = () => {
    $("#close-terminal").trigger("click");
  };

  const handleCommand = (command, rowId) => {
    const commandsArr = command.split(" ").filter(Boolean);
    const main = commandsArr.shift();
    const rest = commandsArr.join(" ").trim();
    let result = "";
    switch (main) {
      case "cd":
        if (commandsArr.length === 0 || rest === "") {
          obj.cd = "~";
          obj.curDirname = "home";
          break;
        }
        if (commandsArr.length > 1) {
          result = "Invalid command, too many arguments";
          break;
        }
        if (obj.childDirs[obj.curDirname].includes(rest)) {
          obj.cd += "/" + rest;
          obj.curDirname = rest;
        } else if (rest === ".." || rest === "../") {
          result = "Type 'cd' to go back 😅";
          break;
        } else {
          result = `bash: cd: ${commandsArr}: No such file or directory`;
        }
        break;
      case "ls":
        let target = commandsArr[0];
        if (target === "" || target === undefined || target === null) target = obj.curDirname;

        if (commandsArr.length > 1) {
          result = "too many arguments, arguments must me <1.";
          break;
        }
        if (target in obj.childDirs) {
          result = childDirectories(target).join("");
        } else {
          result = `ls: cannot access '${commandsArr}': No such file or directory                    `;
        }
        break;
      case "pwd":
        let str = obj.cd;
        result = str.replace("~", "/home/ubuntu");
        break;
      case "code":
        openApp("vscode");
        break;
      case "spotify":
        openApp("spotify");
        break;
      case "firefox":
      case "chrome":
        openApp("firefox");
        break;
      case "about-me":
      case "about":
        openApp("about-me");
        break;
      case "settings":
        openApp("settings");
        break;
      case "resume":
        openApp("resume");
        break;
      case "clear":
        initializeTerminal();
        return;
      case "exit":
        closeTerminal();
        return;
      case "sudo":
        result = `<img src=${giphy} />`;
        break;
      case "help":
        result =
          "Available Commands: [ cd, ls, pwd, clear, exit, spotify, code, settings, about, firefox, chrome, resume, sudo, help ]";
        break;
      default:
        result =
          "Command '" +
          main +
          "' not found. " +
          "\n" +
          "Available Commands: [ cd, ls, pwd, clear, exit, spotify, code, settings, about, firefox, chrome, resume, sudo, help ]";
    }
    document.getElementById(`row-result-${rowId}`).innerHTML = result;
    addNewRow();
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        clearInterval(obj.cursor);
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(44, 0, 30)",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          cursor: "text"
        }}
        onClick={() => {
          getCursor(curId);
        }}
        id="terminalBody"
      >
        {obj.terminal}
      </Box>
    </ClickAwayListener>
  );
};

export default Terminal;

export const displayTerminal = (openApp) => {
  return <Terminal openApp={openApp}> </Terminal>;
};
