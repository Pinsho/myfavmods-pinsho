import styles from '../css/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const MSFSModCard = ({ mod }) => {
    return (
        <li className={styles.modCard}>
            <img src={mod.fields.Picture} width={300} height={165} alt={mod.fields.Name} className={styles.modImage}/>
            <div className={styles.info}><a href={mod.fields.Info} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCircleInfo}/></a></div>
            <div className={styles.cardBody}>
                <div className={styles.title}>{mod.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-bookmark' ></i>Category: <div className={styles.right}>{mod.fields.TypeName}</div></div>
                <div className={styles.type}><i className='bx bxs-factory'></i>Manufacturer: <div className={styles.right}>{mod.fields.Manufacturer}</div></div>
                <div className={styles.type}><i className='bx bxs-user' ></i>Developer: <div className={styles.right}>{mod.fields.Developer}</div></div>
                <div className='dwnButton'><a href={mod.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonMSFS}>Download</a></div>
            </div>
        </li>
    );
}   