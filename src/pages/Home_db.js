import { Link } from "react-router-dom";
import Airtable from 'airtable';
import { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export default function Home() {
    
        const [categoriesFS, setCategoriesFS] = useState([]);
        const [categoriesMS, setcategoriesMS] = useState([]);
        const [categoriesMusic, setCategoriesMusic] = useState([]);

        useEffect(() => {
            base("categories")
                .select({ 
                    view: "Grid view",
                    filterByFormula:"Section=1",
                    sort:[
                        {
                            field: 'Name', direction: 'asc'
                        }
                    ],
                })
                .eachPage((records, fetchNextPage) => {
                    setCategoriesFS(records)
                    fetchNextPage();
                })
            base("categories")
                .select({ 
                    view: "Grid view",
                    filterByFormula:"Section=2",
                    sort:[
                        {
                            field: 'Name', direction: 'asc'
                        }
                    ],
                })
                .eachPage((records, fetchNextPage) => {
                    setcategoriesMS(records)
                    fetchNextPage();
                })
            base("categories")
                .select({ 
                    view: "Grid view",
                    filterByFormula:"Section=3",
                    sort:[
                        {
                            field: 'Name', direction: 'asc'
                        }
                    ],
                })
                .eachPage((records, fetchNextPage) => {
                    setCategoriesMusic(records)
                    fetchNextPage();
                })
        }, []); 
        
        return (
            <div className='home'>
                <div className='category'>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bx-paper-plane'></i><span>FLIGHT SIMULATION</span></div>
                        <ul className='homeGrid'>
                            {categoriesFS.map((categoryFS) => (
                                <div className='wrapper' key={categoryFS.id}>
                                <Link to={categoryFS.fields.Link}><img src={categoryFS.fields.ImgURL} height={64} alt={categoryFS.fields.Name}/></Link>
                                <span className='long'><Link to={categoryFS.fields.Link}>{categoryFS.fields.Name}</Link></span>
                            </div>
                            ))}
                        </ul>
                    </div>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bx-car' ></i><span>MOTOR SIMULATION</span></div>
                        <ul className='homeGrid'>
                            {categoriesMS.map((categoryMS) => (
                                <div className='wrapper' key={categoryMS.id}>
                                <Link to={categoryMS.fields.Link}><img src={categoryMS.fields.ImgURL} height={64} alt={categoryMS.fields.Name}/></Link>
                                <span className='long'><Link to={categoryMS.fields.Link}>{categoryMS.fields.Name}</Link></span>
                            </div>
                            ))}
                        </ul>
                    </div>
                    <div className='categoryContainer'>
                        <div className='homeSection'><i className='bx bx-music' ></i><span>MUSIC</span></div>
                        <ul className='homeGrid'>
                            {categoriesMusic.map((categoryMusic) => (
                                <div className='wrapper' key={categoryMusic.id}>
                                <Link to={categoryMusic.fields.Link}><img src={categoryMusic.fields.ImgURL} height={64} alt={categoryMusic.fields.Name}/></Link>
                                <span className='long'><Link to={categoryMusic.fields.Link}>{categoryMusic.fields.Name}</Link></span>
                            </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}