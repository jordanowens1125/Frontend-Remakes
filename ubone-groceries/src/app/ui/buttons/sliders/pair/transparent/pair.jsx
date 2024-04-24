import Left from "../../left";
import Right from "../../right";
import styles from "./pair.module.css";

export default function Pair({ leftaction, rightaction }) {
  return (
    <div className={styles.transparentpair}>
      <Left action={leftaction} />
      <Right action={rightaction} />
    </div>
  );
}
