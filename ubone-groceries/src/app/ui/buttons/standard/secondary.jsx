import styles from "./standard.module.css";

export default function SecondaryButton({ lefticon, righticon, action, text }) {
  return (
    <>
      {action ? (
        <button className={styles.secondary} onClick={action}>
          {lefticon && <img src={lefticon} alt={text} className="icon" />}
          {text}
          {righticon && <img src={righticon} alt={text} className="icon" />}
        </button>
      ) : (
        <button className={styles.secondary}>
          {lefticon && <img src={lefticon} alt={text} className="icon" />}
          {text}
          {righticon && <img src={righticon} alt={text} className="icon" />}
        </button>
      )}
    </>
  );
}
