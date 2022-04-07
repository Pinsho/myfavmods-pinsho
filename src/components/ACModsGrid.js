import styles from '../css/Grid.module.css';
import { ACCarCard } from './ACCarCard';
import { ACTrackCard } from './ACTrackCard';
import { ACOtherCard } from './ACOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import NoResults from '../pages/NoResults';
import { useLocation } from 'react-router-dom';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function ACModsGrid() {
    const [cars, setCars] =useState([])
    const [tracks, setTracks] =useState([])
    const [others, setOthers] =useState([])
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

        base("accars")
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
                fetchNextPage();
            })
        base("actracks")
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
        base("acother")
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
                setOthers(records)
                SetIsLoading(false);
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
            <div className={styles.maintitleACCars} id="cars">Cars</div>
            <ul className={styles.grid}>
                {cars.map((car) => (
                    <ACCarCard key={car.id} car={car} />
                ))}
            </ul>
            <div className={styles.maintitleACTracks} id="tracks">Tracks</div>
            <ul className={styles.grid}>
                {tracks.map((track) => (
                    <ACTrackCard key={track.id} track={track} />
                ))}
            </ul>
            <div className={styles.maintitleACOther} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <ACOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}