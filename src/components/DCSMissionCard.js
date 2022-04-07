import styles from '../css/Card.module.css';

export const DCSMissionCard = ({ mission }) => {
    return (
        <li className={styles.modCard}>
            <img src={mission.fields.Picture} width={300} height={165} alt={mission.fields.Name} className={styles.modImage}/>
            
            <div className={styles.cardBody}>
                <div className={styles.title}>{mission.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-flag-alt' ></i>Mission type: <div className={styles.right}>{mission.fields.TypeName}</div></div>
                <div className={styles.type}><i className='bx bxs-map' ></i>Map: <div className={styles.right}>{mission.fields.MapName}</div></div>
                <div className={styles.type}><i className='bx bxs-plane-alt' ></i>Unit: <div className={styles.right}>{mission.fields.Unit}</div></div>
                <div className={styles.type}><i className='bx bxs-error-circle' ></i>Required mods: <div className={styles.right}>{mission.fields.AdditionalMods}</div></div>
                <div><a href={mission.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonDCS}>Download</a></div>
            </div>
        </li>
    );
}   