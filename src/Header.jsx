import React from 'react'
import './Header.css';

import { Avatar, IconButton } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="icon"/>
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option-active">
                    <HomeIcon />
                </div>
                <div className="header__option">
                    <FlagIcon />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon />
                </div>
                <div className="header__option">
                    <StorefrontIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Vaibhav</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
