import styles from '../css/Grid.module.css';
import { MusicVstCard } from './MusicVstCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function MusicVstGrid() {
    const [vsts, setVsts] =useState([])

    useEffect(() => {
        base("musicvst")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setVsts(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMissions} id="vsts">VSTs</div>
            <ul className={styles.grid}>
                {vsts.map((vst) => (
                    <MusicVstCard key={vst.id} vst={vst} />
                ))}
            </ul>
        </>
    );
}