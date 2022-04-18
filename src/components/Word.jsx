import styles from "./Word.module.css";

function Word({ index, word, classification, frequency }) {
  return (
    <div className={styles.container}>
      <div className={styles.rankAndWord}>
        <div className={styles.rank}>{index + 1}</div>
        <div className={styles.word}>{word}</div>
      </div>
    </div>
  );
}

export default Word;
