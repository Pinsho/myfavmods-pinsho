import styles from '../css/Grid.module.css';
import { MusicDawCard } from './MusicDawCard';
import { MusicVstCard } from './MusicVstCard';
import { MusicSamplesCard } from './MusicSamplesCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import NoResults from '../pages/NoResults';
import { useLocation } from 'react-router-dom';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function MusicModsGrid() {
    const [daws, setDaws] =useState([])
    const [vsts, setVsts] =useState([])
    const [samples, setSamples] = useState([])
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

        const formulaDAW = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Developer_low}),Search('" + filter.toLowerCase() + "', {Platform_low}))";
        const formulaVST = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Developer_low}),Search('" + filter.toLowerCase() + "', {Platform_low}),Search('" + filter.toLowerCase() + "', {Type_low}))";
        const formulaSamples = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Developer_low}),Search('" + filter.toLowerCase() + "', {Genre_low}))";

        base("musicdaw")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaDAW,
                sort:[
                    {
                        field: 'Name', direction: 'asc'
                    }
                ],
            })
            .eachPage((records, fetchNextPage) => {
                setDaws(records)
                fetchNextPage();
            })
        base("musicvst")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaVST,
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
        base("musicsamples")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaSamples,
                sort:[
                    {
                        field: 'Name', direction: 'asc'
                    }
                ],
            })
            .eachPage((records, fetchNextPage) => {
                setSamples(records)
                SetIsLoading(false);
                fetchNextPage();
            })
    }, [search]);

    if (isLoading){
        return(
            <Spinner/>
        )
    }

    if(daws.length === 0 && vsts.length === 0 && samples.length === 0){
        return(
            <NoResults/>
        )
    }

    return (
        <>
            <div className={styles.maintitleMusicDaw} id="daws">DAWs</div>
            <ul className={styles.grid}>
                {daws.map((daw) => (
                    <MusicDawCard key={daw.id} daw={daw} />
                ))}
            </ul>
            <div className={styles.maintitleMusicVST} id="vsts">VSTs</div>
            <ul className={styles.grid}>
                {vsts.map((vst) => (
                    <MusicVstCard key={vst.id} vst={vst} />
                ))}
            </ul>
            <div className={styles.maintitleMusicSamples} id="samples">Samples</div>
            <ul className={styles.grid}>
                {samples.map((sample) => (
                    <MusicSamplesCard key={sample.id} sample={sample} />
                ))}
            </ul>
        </>
    );
}