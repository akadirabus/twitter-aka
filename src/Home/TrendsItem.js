import React from 'react'
import './TrendsItem.css'
import { ArrowBottom } from '../Icon'

function TrendsItem() {
    return (
        <div className="trends__item">
            <ArrowBottom></ArrowBottom>

            <p>Türkiye tarihinde gündemde</p>

            <p className="head">Gürgen Öz</p>
            <p>6.245</p>

        </div>
    )
}

export default TrendsItem
