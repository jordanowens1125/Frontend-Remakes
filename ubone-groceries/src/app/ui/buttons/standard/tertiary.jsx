import styles from "./standard.module.css";

export default function TertiaryButton({ lefticon, righticon, action, text }) {
  return (
    <>
      {action ? (
        <button className={styles.tertiary} onClick={action}>
          {lefticon && <img src={lefticon} alt={text} className="icon" />}
          {text && text}
          {righticon && <img src={righticon} alt={text} className="icon" />}
        </button>
      ) : (
        <button className={styles.tertiary}>
          {lefticon && <img src={lefticon} alt={text} className="icon" />}
          {text && text}
          {righticon && <img src={righticon} alt={text} className="icon" />}
        </button>
      )}
    </>
  );
}
