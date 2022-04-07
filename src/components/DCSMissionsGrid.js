import styles from '../css/Grid.module.css';
import { DCSMissionCard } from './DCSMissionCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function DCSMissionsGrid() {
    const [missions, setMissions] =useState([])

    useEffect(() => {
        base("dcsmissions")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setMissions(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMissions} id="missions">Missions</div>
            <ul className={styles.grid}>
                {missions.map((mission) => (
                    <DCSMissionCard key={mission.id} mission={mission} />
                ))}
            </ul>
        </>
    );
}