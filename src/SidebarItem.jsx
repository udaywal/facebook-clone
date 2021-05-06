import React from 'react'
import "./SidebarItem.css"

function SidebarItem({ Icon, title }) {
    return (
        <div className="sidebarItem">
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarItem
