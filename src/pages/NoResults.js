import React, { Component } from 'react';
import styles from '../css/NoResults.module.css';

export default class NoResults extends Component {
    render() {
        return (
            <div className={styles.container}>
                <span className={styles.main}><i className='bx bxs-dizzy iconResults'></i> Ops!</span>
                <span className={styles.subtitle}>Nothing found</span>
                <span className={styles.text}>Please, try another search</span>
            </div>
        )
    }
}
