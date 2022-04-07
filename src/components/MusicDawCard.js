import styles from '../css/Card.module.css';

export const MusicDawCard = ({ daw }) => {
    return (
        <li className={styles.modCard}>
            <img src={daw.fields.Picture} width={300} height={165} alt={daw.fields.Name} className={styles.modImage}/>
            <div className={styles.cardBody}>
                <div className={styles.title}>{daw.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-user' ></i>Developer: <div className={styles.right}>{daw.fields.Developer}</div></div>
                <div className={styles.type}><i className='bx bx-desktop'></i>Platform: <div className={styles.right}>{daw.fields.PlatformName}</div></div>
                <div><a href={daw.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonMusic}>Download</a></div>
            </div>
        </li>
    );
} 