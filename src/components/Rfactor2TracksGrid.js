import styles from '../css/Grid.module.css';
import { Rfactor2TrackCard } from './Rfactor2TrackCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function Rfactor2TracksGrid() {
    const [tracks, setTracks] =useState([])

    useEffect(() => {
        base("rf2tracks")
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
                    <Rfactor2TrackCard key={track.id} track={track} />
                ))}
            </ul>
        </>
    );
}