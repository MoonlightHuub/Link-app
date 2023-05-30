import imagesJson from "../data/constants.json";
import styles from "../Css/card.module.css";

function Card() {
  const HandleBntClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <ul className={styles.cardContainer}>
      {imagesJson.map((e) => (
        <li className={styles.card} onClick={() => HandleBntClick(e.link)} key={e.id}>
          <img src={e.image} alt={e.name} className={styles.image} />
          <h2 className={styles.title}>{e.name}</h2>
        </li>
      ))}
    </ul>
  );
}

export default Card;
