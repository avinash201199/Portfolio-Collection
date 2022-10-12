import React, { lazy } from "react";
import resume from "../../assets/documents/Ichan_Kabir_Resume.pdf";
// Core viewer
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResumeViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#333333"
      }}
    >
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js">
        <Viewer
          fileUrl={resume}
          plugins={[defaultLayoutPluginInstance]}
          renderError={console.log}
        />
      </Worker>
    </div>
    // <Worker workerUrl={resume}>{/* <Demo /> */}</Worker>
    // <iframe
    //   src={resume}
    //   frameBorder="0"
    //   title="Ichan Kabir Resume"
    //   style={{ width: "100%", height: "100%" }}
    // ></iframe>
  );
};

export default ResumeViewer;
