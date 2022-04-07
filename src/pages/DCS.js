import React, { Component } from 'react';
import { DCSModsGrid } from "../components/DCSModsGrid";
import logodcs from '../img/dcs.png';

export default class DCS extends Component{
    render() {
        return (
            <div>
                
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logodcs} height={64} alt="DCS World"/>
                        <span className='long title'>Digital Combat Simulator World</span>
                    </div>
                    <div id="linksContainer">
                        <div className='links'>
                            <span><a href="#mods">Mods</a></span>
                            <span><a href="#missions">Missions</a></span>
                            <span><a href="#other">Other</a></span>
                        </div>
                    </div>
                </div>
                <DCSModsGrid />
            </div>
            
        );
    }
}