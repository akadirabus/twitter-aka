import React from 'react'
import { Options } from './Icon'
import './Trends.css'
import TrendsItem from './TrendsItem'

function Trends() {
    return (
        <div>
            <div className="trends">
                <h3>İlgini çekebilecek gündemler</h3>
                <Options></Options>

            </div>
            <TrendsItem></TrendsItem>
            <TrendsItem></TrendsItem>
            <TrendsItem></TrendsItem>
            <TrendsItem></TrendsItem>
            <TrendsItem></TrendsItem>

            <div className="showMore">
                <p>Daha fazla göster</p>
            </div>
        </div>
    )
}

export default Trends
