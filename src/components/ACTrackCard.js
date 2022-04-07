import styles from '../css/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const ACTrackCard = ({ track }) => {
    return (
        <li className={styles.modCard}>
            <img src={track.fields.Picture} width={300} height={165} alt={track.fields.Name} className={styles.modImage}/>
            <div className={styles.info}><a href={track.fields.Info} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCircleInfo}/></a></div>
            <div className={styles.cardBody}>
                <div className={styles.title}>{track.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-map' ></i>Location: <div className={styles.right}>{track.fields.Location}</div></div>
                <div className={styles.type}><i className='bx bxs-ruler' ></i>Length: <div className={styles.right}>{track.fields.Length}</div></div>
                <div><a href={track.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonAC}>Download</a></div>
            </div>
        </li>
    );
} 