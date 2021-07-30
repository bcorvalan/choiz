import React from 'react'

export default function DrugList() {
    return (
        <div className="drugList">
            <p className="drugList__title"></p>
            <ul className="drugList__list">
                <li className="drugList__title">Marcas que ofrecemos</li>
                <li  className="drugList__title">Laboratorio</li>
                <li  className="drugList__title">Precio <span  className="drugList__observation">(sin cobertura médica)</span></li>
            </ul>
            
        </div>
    )
}
