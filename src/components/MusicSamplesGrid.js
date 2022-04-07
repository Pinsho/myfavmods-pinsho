import styles from '../css/Grid.module.css';
import { MusicSamplesCard } from './MusicSamplesCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function MusicSamplesGrid() {
    const [samples, setSamples] = useState([])

    useEffect(() => {
        base("musicsamples")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setSamples(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMissions} id="samples">Samples</div>
            <ul className={styles.grid}>
                {samples.map((sample) => (
                    <MusicSamplesCard key={sample.id} sample={sample} />
                ))}
            </ul>
        </>
    );
}