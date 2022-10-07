import React from "react";
import Contact from "./components/contact/contact";
import { Fragment } from "react";
import Details from "./components/details/Details";
import Projects from "./components/projects/projects";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <Fragment>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Details />} />

            <Route exact path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
        {/* <Bottom /> */}
      </div>
    </Fragment>
  );
}

export default App;
