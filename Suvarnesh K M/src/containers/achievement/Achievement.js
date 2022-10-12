import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { SRLWrapper } from "simple-react-lightbox";


export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <SRLWrapper>
            <div className="achievement-cards-div">
              {achievementSection.achievementsCards.map((card, i) => {
                return (
                  <a href={card.image}>
                    <AchievementCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        image: card.image,
                      }}
                    />
                  </a>
                );
              })}
            </div>
          </SRLWrapper>
        </div>
      </div>
    </Fade>
  );
}
