import styles from '../css/Grid.module.css'
import { ACOtherCard } from './ACOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function ACOtherGrid() {
    const [others, setOthers] =useState([])

    useEffect(() => {
        base("acother")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
            .eachPage((records, fetchNextPage) => {
                setOthers(records)
                fetchNextPage();
            })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <ACOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}