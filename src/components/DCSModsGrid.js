import styles from '../css/Grid.module.css';
import '../css/Grid.module.css';
import { DCSModCard } from './DCSModCard';
import { DCSMissionCard } from './DCSMissionCard';
import { DCSOtherCard } from './DCSOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { useLocation } from 'react-router-dom';
import NoResults from '../pages/NoResults';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');


export function DCSModsGrid() {

    const [mods, setMods] = useState([]);
    const [missions, setMissions] = useState([]);
    const [others, setOther] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);
    
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        SetIsLoading(true);

        const filter = search 
        ? search
        : "";

        const formulaMods = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}),Search('" + filter.toLowerCase() + "', {Manufacturer_low}),Search('" + filter.toLowerCase() + "', {Year}))";
        const formulaMissions = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}),Search('" + filter.toLowerCase() + "', {Unit_low}),Search('" + filter.toLowerCase() + "', {Map_low}),Search('" + filter.toLowerCase() + "', {AditionalMods_low}))";
        const formulaOther = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}))";

        base("dcsmods")
            .select({ 
                view: "Grid view",
                /* === USE filterByFormula: "Search('Some_Text',{Field_Name})" === */
                /* filterByFormula: "Search('" + filter.toLowerCase() + "', {Name_low})", */
                filterByFormula: formulaMods,
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
        base("dcsmissions")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaMissions,
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
        base("dcsother")
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
                SetIsLoading(false)
            })
            
    }, [search]);

    

    if (isLoading){
        return(
            <Spinner/>
        )
    }
    
    if(mods.length === 0 && missions.length === 0 && others.length === 0){
        return(
            <NoResults/>
        )
    }
    
    return (
        <>
            <div className={styles.maintitleDCSMods} id="mods">MODs</div>
            <div>
                <ul className={styles.grid}>
                    {mods.map((mod) => (
                        <DCSModCard key={mod.id} mod={mod} />
                    ))}
                </ul>
            </div>
            <div className={styles.maintitleDCSMissions} id="missions">Missions</div>
            <ul className={styles.grid}>
                {missions.map((mission) => (
                    <DCSMissionCard key={mission.id} mission={mission} />
                ))}
            </ul>
            <div className={styles.maintitleDCSOther} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <DCSOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}
