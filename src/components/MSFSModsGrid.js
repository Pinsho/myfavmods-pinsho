import styles from '../css/Grid.module.css';
import { MSFSModCard } from './MSFSModCard';
import {MSFSLiveriesCard} from './MSFSLiveriesCard'
import {MSFSAirportsCard} from './MSFSAirportsCard'
import {MSFSOtherCard} from './MSFSOtherCard'
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { useLocation } from 'react-router-dom';
import NoResults from '../pages/NoResults';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function MSFSModsGrid() {
    const [mods, setMods] =useState([])
    const [airports, setAirports] =useState([])
    const [liveries, setLiveries] =useState([])
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

        const formulaAddon = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}),Search('" + filter.toLowerCase() + "', {Developer_low}),Search('" + filter.toLowerCase() + "', {Manufacturer_low}))";
        const formulaLiveries = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Airline_low}),Search('" + filter.toLowerCase() + "', {Airplane_low}),Search('" + filter.toLowerCase() + "', {Resolution_low}))";
        const formulaAirports = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {OACI_low}),Search('" + filter.toLowerCase() + "', {Type_low}),Search('" + filter.toLowerCase() + "', {Location_low}))";
        const formulaOther = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}))";
        
        base("msfsmods")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaAddon,
                sort:[
                    {
                        field: 'Name', direction: 'asc'
                    }
                ],
            })
            .eachPage((records, fetchNextPage) => {
                setMods(records)
                fetchNextPage();
            })
        base("msfsliveries")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaLiveries,
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
        base("msfsairports")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaAirports,
                sort:[
                    {
                        field: 'Name', direction: 'asc'
                    }
                ],
            })
            .eachPage((records, fetchNextPage) => {
                setAirports(records)
                fetchNextPage();
            })
        base("msfsother")
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

    if(mods.length === 0 && airports.length === 0 && liveries.length === 0 && others.length === 0){
        return(
            <NoResults/>
        )
    }

    return (
        <>
            <div className={styles.maintitleMSFSAddons} id="addons">Addons</div>
            <ul className={styles.grid}>
                {mods.map((mod) => (
                    <MSFSModCard key={mod.id} mod={mod} />
                ))}
            </ul>
            <div className={styles.maintitleMSFSLiveries} id="liveries">Liveries</div>
            <ul className={styles.grid}>
                {liveries.map((livery) => (
                    <MSFSLiveriesCard key={livery.id} livery={livery} />
                ))}
            </ul>
            <div className={styles.maintitleMSFSAirports} id="airports">Airports</div>
            <ul className={styles.grid}>
                {airports.map((airport) => (
                    <MSFSAirportsCard key={airport.id} airport={airport} />
                ))}
            </ul>
            <div className={styles.maintitleMSFSOther} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <MSFSOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}