import styles from '../css/Card.module.css';

export const MusicSamplesCard = ({ sample }) => {
    return (
        <li className={styles.modCard}>
            <img src={sample.fields.Picture} width={300} height={165} alt={sample.fields.Name} className={styles.modImage}/>
            <div className={styles.cardBody}>
                <div className={styles.title}>{sample.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-info-circle' ></i>Genre: <div className={styles.right}>{sample.fields.Genre}</div></div>
                <div className={styles.type}><i className='bx bxs-user' ></i>Developer: <div className={styles.right}>{sample.fields.Developer}</div></div>
                <div><a href={sample.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonMusic}>Download</a></div>
            </div>
        </li>
    );
} 