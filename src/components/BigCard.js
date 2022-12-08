import React from "react";
import * as styles from "./big-card.module.scss";

const BigCard = ({
  cardHeadingInfo,
  cardImage,
  cardTitle,
  cardDescription,
  calendarImage,
  buttonText,
}) => {
  return (
    <div className={styles.bigCard}>
      <div className={styles.imageContainer}>
        <img src={cardImage} alt="sami" />
      </div>
      <div className={styles.bodyContainer}>
        <p>{cardHeadingInfo}</p>
        <h3 className={styles.cardTittle}>{cardTitle}</h3>
        <p>{cardDescription}</p>
        <div className={styles.calendar}>
          <img src={calendarImage} alt="sa" />
          <p>
            Dienstag, 25.10 2022
            <br />
            18:00-19:30 Uhr
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
