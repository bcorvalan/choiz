import React from 'react'
import ChoizLogo from '../svgs/ChoizLogo'
import NavBarLink from './NavBarLink'

export default function NavBar() {
    return (
        <div className="navBar">
            <ChoizLogo/>
            <ul className="navBar__list">
                <NavBarLink itemName="Tratamientos"  itemClassName="navBar__link"/>
                <NavBarLink itemName="Consulta online"  itemClassName="navBar__link"/>
                <NavBarLink itemName="Quiénes somos"  itemClassName="navBar__link"/>
                <NavBarLink itemName="Preguntas frecuentes"  itemClassName="navBar__link"/>
                <NavBarLink itemName="Contacto"  itemClassName="navBar__link"/>
                <NavBarLink itemName="¿Tenés dudas?"  itemClassName="navBar__link navBar__link--contact"/>
            </ul>
        </div>
    )
}
