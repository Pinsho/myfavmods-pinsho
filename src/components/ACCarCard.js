import styles from '../css/Card.module.css';

export const ACCarCard = ({ car }) => {
    return (
        <li className={styles.modCard}>
            <img src={car.fields.Picture} width={300} height={165} alt={car.fields.Name} className={styles.modImage}/>
            <div className={styles.cardBody}>
                <div className={styles.title}>{car.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-bookmark' ></i>Category: <div className={styles.right}>{car.fields.TypeName}</div></div>
                <div className={styles.type}><i className='bx bxs-tachometer'></i>Power: <div className={styles.right}>{car.fields.BHP}</div></div>
                <div className={styles.type}><i className='bx bxs-car' ></i>Wheel Drive: <div className={styles.right}>{car.fields.WheelDriveName}</div></div>
                <div><a href={car.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonAC}>Download</a></div>
            </div>
        </li>
    );
}   