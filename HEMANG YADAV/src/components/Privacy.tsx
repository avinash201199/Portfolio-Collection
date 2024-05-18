import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Wir befolgen strenge Richtlinien gegen die Verbreitung der auf unserer Plattform gesammelten Informationen und verlangen von den Benutzern den Erwerb entsprechender Lizenzen, wenn sie Teile des Inhalts unserer Website nutzen möchten. Unser Engagement erstreckt sich auf den Schutz Ihrer persönlichen Daten und gewährleistet ein sicheres und vertrauenswürdiges Surferlebnis.</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>We uphold strict policies against the distribution of any information collected on our platform and require users to obtain appropriate licenses if they wish to utilize any part of our website's content. Our commitment extends to protecting your personal information, ensuring a secure and trustworthy browsing experience.</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
