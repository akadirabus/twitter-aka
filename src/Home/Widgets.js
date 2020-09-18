import React from 'react'
import './Widgets.css'
import Trends from './Trends'
import { Search } from '../Icon'

function Widgets() {
    return (
        <div className="widgets">
            {/* Search Input */}
            <div className="search">
                <Search></Search>
                <input placeholder="Twitter'da Ara"></input>
            </div>

            {/* Güncemler */}
            <Trends></Trends>


            {/* Takip Öneri */}

            {/* Footer */}
        </div>
    )
}

export default Widgets
