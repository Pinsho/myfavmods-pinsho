import styles from '../css/Card.module.css';

export const MSFSAirportsCard = ({ airport }) => {
    return (
        <li className={styles.modCard}>
            <img src={airport.fields.Picture} width={300} height={165} alt={airport.fields.Name} className={styles.modImage}/>{/* 
            <div className={styles.info}><a href={livery.fields.Info} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCircleInfo}/></a></div> */}
            <div className={styles.cardBody}>
                <div className={styles.title}>{airport.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-info-circle'></i>OACI: <div className={styles.right}>{airport.fields.OACI}</div></div>
                <div className={styles.type}><i className='bx bxs-bookmark' ></i>Category: <div className={styles.right}>{airport.fields.TypeName}</div></div>
                <div className={styles.type}><i className='bx bxs-map' ></i>Location: <div className={styles.right}>{airport.fields.Location}</div></div>
                <div className='dwnButton'><a href={airport.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonMSFS}>Download</a></div>
            </div>
        </li>
    );
}  