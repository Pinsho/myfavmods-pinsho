import React, { Component } from 'react';
import logoaccompetizione from '../img/accompetizione.png';
import { ACCompetizioneModsGrid } from '../components/ACCompetizioneModsGrid';

export default class ACCompetizione extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logoaccompetizione} height={64} alt="Assetto Corsa Competizione"/>
                        <span className='long title'>Assetto Corsa Competizione</span>
                    </div>
                    <div id="linksContainer">
                        <div className='links'>
                            <span><a href="#other">Other</a></span>
                        </div>
                    </div>
                </div>
                <ACCompetizioneModsGrid/>
            </div>
            
        );
    }
}