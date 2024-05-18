import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Wir freuen uns, die Einführung unserer neuen Funktion bekannt zu geben, mit der Sie Ihr Benutzererlebnis wie nie zuvor anpassen können! Tauchen Sie ein in eine Welt personalisierter Optionen, die genau auf Sie zugeschnitten sind. Bleiben Sie außerdem auf dem Laufenden über spannende Updates und exklusive Angebote. Vielen Dank, dass Sie Teil unserer Community sind!</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>We're thrilled to announce the launch of our new feature, allowing you to customize your user experience like never before! Dive into a world of personalized options tailored just for you. Plus, stay tuned for exciting updates and exclusive offers coming your way. Thank you for being part of our community!</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
