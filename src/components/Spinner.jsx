import styles from '../css/Spinner.module.css';

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <span className={styles.spinning}><i className='bx bx-loader-circle'></i></span>
        </div>
    )
}
