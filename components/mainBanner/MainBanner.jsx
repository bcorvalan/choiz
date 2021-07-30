import React from 'react'
import NavBar from '../navBar/NavBar'

export default function MainBanner() {
    return (
        <div className="main-banner">
            <NavBar/>
            <div className="main-banner__circle-decoration"></div>
            <h1 className="main-banner__title">Cuidarte siempre te cuesta menos con Choiz</h1>
        </div>
    )
}
