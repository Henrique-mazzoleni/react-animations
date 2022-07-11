import styles from '../styles/Backdrop.module.css';

export default function Backdrop(props) {
    return <div onClick={props.onAction} className={styles.backdrop}></div>
}