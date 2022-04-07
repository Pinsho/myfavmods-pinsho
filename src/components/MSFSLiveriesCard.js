import styles from '../css/Card.module.css';

export const MSFSLiveriesCard = ({ livery }) => {
    return (
        <li className={styles.modCard}>
            <img src={livery.fields.Picture} width={300} height={165} alt={livery.fields.Name} className={styles.modImage}/>{/* 
            <div className={styles.info}><a href={livery.fields.Info} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCircleInfo}/></a></div> */}
            <div className={styles.cardBody}>
                <div className={styles.title}>{livery.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-plane-alt'></i>Airplane: <div className={styles.right}>{livery.fields.Airplane}</div></div>
                <div className={styles.type}><i className='bx bxs-info-circle' ></i>Airline: <div className={styles.right}>{livery.fields.Airline}</div></div>
                <div className={styles.type}><i className='bx bxs-droplet-half' ></i>Resolution: <div className={styles.right}>{livery.fields.Resolution}</div></div>
                <div className='dwnButton'><a href={livery.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonMSFS}>Download</a></div>
            </div>
        </li>
    );
}   