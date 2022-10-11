/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Markdown from "markdown-to-jsx";
import aboutMd from "../../assets/markdown/About.md";
import educationMd from "../../assets/markdown/Education.md";
import sillsMd from "../../assets/markdown/Skills.md";
import Typography from "@mui/material/Typography";
import AboutIcon from "../../assets/svg/AboutIcon";
import { styled } from "@mui/styles";
import EducationIcon from "../../assets/svg/EducationIcon";
import SkillsIcon from "../../assets/svg/SkillsIcon";
import ProjectsIcon from "../../assets/svg/ProjectsIcon";
import ResumeIcon from "../../assets/svg/ResumeIcon";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import resume from "../../assets/documents/Ichan_Kabir_Resume.pdf";
import ResumeViewer from "./ResumeViewer";

const CodeBlock = ({ className, children }) => {
  let lang = "text"; // default monospaced text
  if (className && className.startsWith("lang-")) {
    lang = className.replace("lang-", "");
  }
  return (
    <SyntaxHighlighter language={lang} style={CodeStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock = ({ children, ...rest }) => {
  if ("type" in children && children["type"] === "code") {
    return CodeBlock(children["props"]);
  }
  return <pre {...rest}>{children}</pre>;
};

const Tab = styled(Stack)(() => ({
  outline: "2px solid transparent",
  outlineOffset: "2px",
  width: { md: "100%" },
  borderRadius: { md: 0 },
  alignItems: "center",
  justifyContent: "flex-start",
  margin: "2px 0"
}));

const About = () => {
  const [obj, setObj] = useState({ activeTab: "about" });

  const screens = {
    about: <AboutMe />,
    education: <Education />,
    skills: <Skills />,
    resume: <ResumeViewer />
  };

  return (
    <Box width="100%" height="100%" display="flex" maxHeight="100%" flexGrow={1} overflowY="none">
      <Stack
        sx={{
          borderRight: "1px solid rgba(0, 0, 0, 0.4)",
          width: { xs: "20%", md: "25%" },
          display: { xs: "none", md: "flex" },
          overflowY: "auto"
        }}
        className={"windowMainScreen"}
      >
        <Tab
          direction="row"
          onClick={() => setObj((state) => ({ ...state, activeTab: "about" }))}
          sx={{
            backgroundColor: obj.activeTab === "about" && "#E05221",
            "&:hover": {
              backgroundColor: obj.activeTab === "about" ? "#E05221" : "#3D3D3D"
            },
            pl: { md: 1.25 },
            py: 0.75
          }}
        >
          <AboutIcon sx={{ width: "16px", height: "auto" }} />
          <Typography variant="body2" sx={{ ml: { md: "0.5ch" } }}>
            About Me
          </Typography>
        </Tab>
        <Tab
          direction="row"
          onClick={() => setObj((state) => ({ ...state, activeTab: "education" }))}
          sx={{
            backgroundColor: obj.activeTab === "education" && "#E05221",
            "&:hover": {
              backgroundColor: obj.activeTab === "education" ? "#E05221" : "#3D3D3D"
            },
            pl: { md: 1.25 },
            py: 0.75
          }}
        >
          <EducationIcon sx={{ width: "16px", height: "auto" }} />
          <Typography variant="body2" sx={{ ml: { md: "0.5ch" } }}>
            Education
          </Typography>
        </Tab>
        <Tab
          direction="row"
          onClick={() => setObj((state) => ({ ...state, activeTab: "skills" }))}
          sx={{
            backgroundColor: obj.activeTab === "skills" && "#E05221",
            "&:hover": {
              backgroundColor: obj.activeTab === "skills" ? "#E05221" : "#3D3D3D"
            },
            pl: { md: 1.25 },
            py: 0.75
          }}
        >
          <SkillsIcon sx={{ width: "16px", height: "auto" }} />
          <Typography variant="body2" sx={{ ml: { md: "0.5ch" } }}>
            Skills
          </Typography>
        </Tab>
        <Tab
          direction="row"
          onClick={() => setObj((state) => ({ ...state, activeTab: "projects" }))}
          sx={{
            backgroundColor: obj.activeTab === "projects" && "#E05221",
            "&:hover": {
              backgroundColor: obj.activeTab === "projects" ? "#E05221" : "#3D3D3D"
            },
            pl: { md: 1.25 },
            py: 0.75
          }}
        >
          <ProjectsIcon sx={{ width: "16px", height: "auto" }} />
          <Typography variant="body2" sx={{ ml: { md: "0.5ch" } }}>
            Projects
          </Typography>
        </Tab>
        <Tab
          direction="row"
          onClick={() => setObj((state) => ({ ...state, activeTab: "resume" }))}
          sx={{
            backgroundColor: obj.activeTab === "resume" && "#E05221",
            "&:hover": {
              backgroundColor: obj.activeTab === "resume" ? "#E05221" : "#3D3D3D"
            },
            pl: { md: 1.25 },
            py: 0.75
          }}
        >
          <ResumeIcon sx={{ width: "16px", height: "auto" }} />
          <Typography variant="body2" sx={{ ml: { md: "0.5ch" } }}>
            Resume
          </Typography>
        </Tab>
      </Stack>
      <Box
        sx={{
          display: "flex",
          width: { xs: "75%", md: "80%" },
          overflowY: "auto",
          flexGrow: 1,
          backgroundColor: "#222",
          p: 3
        }}
      >
        {screens[obj.activeTab]}
      </Box>
    </Box>
  );
};

const AboutMe = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    fetch(aboutMd)
      .then((res) => res.text())
      .then((text) => setAbout(text));
  });

  return (
    <Markdown
      style={{ width: "100%", height: "100%" }}
      options={{
        overrides: {
          pre: PreBlock
        }
      }}
      children={about}
    />
  );
};

const Education = () => {
  const [education, setEducation] = useState("");
  useEffect(() => {
    fetch(educationMd)
      .then((res) => res.text())
      .then((text) => setEducation(text));
  });

  return (
    <Markdown
      style={{ width: "100%", height: "100%", padding: "0 3ch" }}
      options={{
        overrides: {
          pre: PreBlock
        }
      }}
      children={education}
    />
  );
};

const Skills = () => {
  const [skills, setSkills] = useState("");
  useEffect(() => {
    fetch(sillsMd)
      .then((res) => res.text())
      .then((text) => setSkills(text));
  });

  return (
    <Markdown
      style={{ width: "100%", height: "100%", padding: "0 3ch" }}
      options={{
        overrides: {
          pre: PreBlock
        }
      }}
      children={skills}
    />
  );
};

const Resume = () => {
  return (
    <iframe
      style={{ width: "100%", height: "100%" }}
      src={resume}
      title="Ichan Kabir Resume"
      frameBorder="0"
    />
  );
};

export default About;
