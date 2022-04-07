import styles from '../css/Grid.module.css';
import { DCSOtherCard } from './DCSOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function DCSOtherGrid() {
    const [others, setOther] =useState([])

    useEffect(() => {
        base("dcsother")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setOther(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <DCSOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}