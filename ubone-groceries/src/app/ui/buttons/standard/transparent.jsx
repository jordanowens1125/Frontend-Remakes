import styles from "./standard.module.css";

export default function Transparent({ action, lefticon, righticon, text }) {
  return (
    <>
      {action ? (
        <button className={styles.transparent} onClick={action}>
          {lefticon && <img src={lefticon} alt="" className="icon" />}
          {text && <p>{text}</p>}
          {righticon && <img src={righticon} alt="" className="icon" />}
        </button>
      ) : (
        <button className={styles.transparent}>
          {lefticon && <img src={lefticon} alt="" className="icon" />}
          {text && <p>{text}</p>}
          {righticon && <img src={righticon} alt="" className="icon" />}
        </button>
      )}
    </>
  );
}
