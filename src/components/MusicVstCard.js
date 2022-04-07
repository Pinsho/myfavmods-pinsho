import styles from '../css/Card.module.css';

export const MusicVstCard = ({ vst }) => {
    return (
        <li className={styles.modCard}>
            <img src={vst.fields.Picture} width={300} height={165} alt={vst.fields.Name} className={styles.modImage}/>
            <div className={styles.cardBody}>
                <div className={styles.title}>{vst.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-info-circle' ></i>Type: <div className={styles.right}>{vst.fields.Type}</div></div>
                <div className={styles.type}><i className='bx bxs-user' ></i>Developer: <div className={styles.right}>{vst.fields.Developer}</div></div>
                <div className={styles.type}><i className='bx bx-desktop'></i>Platform: <div className={styles.right}>{vst.fields.PlatformName}</div></div>
                <div><a href={vst.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonMusic}>Download</a></div>
            </div>
        </li>
    );
} 