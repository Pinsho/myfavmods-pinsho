import styles from '../css/Card.module.css';

export const DCSOtherCard = ({ other }) => {
    return (
        <li className={styles.modCard}>
            <img src={other.fields.Picture} width={300} height={165} alt={other.fields.title} className={styles.modImage}/>
            {/* <div className={styles.info}><a href={mod.fields.Info} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCircleInfo}/></a></div> */}
            <div className={styles.cardBody}>
                <div className={styles.title}>{other.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-info-circle' ></i>Type: <div className={styles.right}>{other.fields.TypeName}</div></div>
                <div><a href={other.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButtonDCS}>Download</a></div>
            </div>
        </li>
    );
}