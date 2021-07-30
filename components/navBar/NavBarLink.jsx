import React from 'react'

export default function NavBarLink({itemName, itemClassName}) {
    return (
     <li className={itemClassName}>{itemName}</li>
    )
}
