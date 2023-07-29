import React from "react";
import "./AchievementCard.scss";
export default function AchievementCard({ cardInfo, isDark }) {


  return (

    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt={cardInfo.name} className="card-image" />
      </div>
    </div>

  );
}
