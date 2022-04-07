import React, { Component } from 'react';
import logoac from '../img/ac.png';
import { ACModsGrid } from '../components/ACModsGrid';

export default class AssettoCorsa extends Component{
    render() {
        return (
            <div>
                <div className='sectionHeader'>
                    <div className='wrapper'>
                        <img src={logoac} height={64} alt="Assetto Corsa"/>
                        <span className='long title'>Assetto Corsa</span>
                    </div>
                    <div id="linksContainer">
                        <div className='links'>
                            <span><a href="#cars">Cars</a></span>
                            <span><a href="#tracks">Tracks</a></span>
                            <span><a href="#other">Other</a></span>
                        </div>
                    </div>
                </div>
                <ACModsGrid/>
            </div>
            
        );
    }
}