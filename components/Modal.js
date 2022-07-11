import styles from "../styles/Modal.module.css";

export default function Modal(props) {
  return (
      <div className={styles.card}>
        <h2>A Modal</h2>
        <button onClick={props.onAction}>Dismiss</button>
      </div>
  );
}
