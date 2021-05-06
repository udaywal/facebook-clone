import React from 'react'
import "./Sidebar.css"

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SidebarItem from './SidebarItem';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarItem Icon={LocalHospitalIcon} title="COVID-19"/>
            <SidebarItem Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarItem Icon={PeopleIcon} title="Friends"/>
            <SidebarItem Icon={ChatIcon} title="Messenger"/>
            <SidebarItem Icon={StoreIcon} title="Marketplace"/>
            <SidebarItem Icon={VideoLibraryIcon} title="Videos"/>
        </div>
    )
}

export default Sidebar
