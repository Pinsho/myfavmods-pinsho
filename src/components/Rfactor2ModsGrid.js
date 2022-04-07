import styles from '../css/Grid.module.css';
import { Rfactor2CarCard } from './Rfactor2CarCard';
import { Rfactor2TrackCard } from './Rfactor2TrackCard';
import { Rfactor2OtherCard } from './Rfactor2OtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import NoResults from '../pages/NoResults';
import { useLocation } from 'react-router-dom';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function Rfactor2ModsGrid() {
    const [cars, setCars] =useState([])
    const [tracks, setTracks] =useState([])
    const [others, setOther] =useState([])
    const [isLoading, SetIsLoading] = useState(true);

    function useQuery() {
        return new  URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        SetIsLoading(true);

        const filter = search 
        ? search
        : "";

        const formulaCars = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}),Search('" + filter.toLowerCase() + "', {WheelDrive_low}),Search('" + filter.toLowerCase() + "', {BHP_low}))";
        const formulaTracks = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Location_low}),Search('" + filter.toLowerCase() + "', {Length_low}))";
        const formulaOther = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}))";

        base("rf2cars")
        .select({ 
            view: "Grid view",
            filterByFormula: formulaCars,
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
            .eachPage((records, fetchNextPage) => {
                setCars(records)
                SetIsLoading(false);
                fetchNextPage();
            })
        base("rf2tracks")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaTracks,
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
        base("rfactor2other")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaOther,
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
    }, [search]);

    if (isLoading){
        return(
            <Spinner/>
        )
    }

    if(cars.length === 0 && tracks.length === 0 && others.length === 0){
        return(
            <NoResults/>
        )
    }

    return (
        <>
            <div className={styles.maintitleRf2Cars} id="cars">Cars</div>
            <ul className={styles.grid}>
                {cars.map((car) => (
                    <Rfactor2CarCard key={car.id} car={car} />
                ))}
            </ul>
            <div className={styles.maintitleRf2Tracks} id="tracks">Tracks</div>
            <ul className={styles.grid}>
                {tracks.map((track) => (
                    <Rfactor2TrackCard key={track.id} track={track} />
                ))}
            </ul>
            <div className={styles.maintitleRf2Other} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <Rfactor2OtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}