import styles from './standard.module.css'

export default function Disabled({ text, lefticon, righticon }) {
  return (
    <button className={styles.disabled}>
      {lefticon && <img src={lefticon} alt={text} />}
      {text}
      {righticon && <img src={righticon} alt={text} />}
    </button>
  );
}
