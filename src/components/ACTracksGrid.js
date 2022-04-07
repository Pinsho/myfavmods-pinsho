import styles from '../css/Grid.module.css';
import { ACTrackCard } from './ACTrackCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function ACTracksGrid() {
    const [tracks, setTracks] =useState([])

    useEffect(() => {
        base("actracks")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
            .eachPage((records, fetchNextPage) => {
                setTracks(records)
                fetchNextPage();
            })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods} id="tracks">Tracks</div>
            <ul className={styles.grid}>
                {tracks.map((track) => (
                    <ACTrackCard key={track.id} track={track} />
                ))}
            </ul>
        </>
    );
}