import styles from "./standard.module.css";

export default function PrimaryButton({ lefticon, righticon, action, text }) {
  return (
    <>
      {action ? (
        <button className={styles.primary} onClick={action}>
          {lefticon && <img src={lefticon} alt={text} className="icon" />}
          {text}
          {righticon && <img src={righticon} alt={text} className="icon" />}
        </button>
      ) : (
        <button className={styles.primary}>
          {lefticon && <img src={lefticon} alt={text} className="icon" />}
          {text}
          {righticon && <img src={righticon} alt={text} className="icon" />}
        </button>
      )}
    </>
  );
}
