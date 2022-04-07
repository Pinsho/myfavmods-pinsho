import styles from '../css/Grid.module.css'
import { MSFSLiveriesCard } from './MSFSLiveriesCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function MSFSLiveriesGrid() {
    const [liveries, setLiveries] =useState([])

    useEffect(() => {
        base("msfsliveries")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
            .eachPage((records, fetchNextPage) => {
                setLiveries(records)
                fetchNextPage();
            })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods} id="liveries">Liveries</div>
            <ul className={styles.grid}>
                {liveries.map((livery) => (
                    <MSFSLiveriesCard key={livery.id} livery={livery} />
                ))}
            </ul>
        </>
    );
}