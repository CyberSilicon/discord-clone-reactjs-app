import React from 'react'
import "./sidebar.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoIconOutlinedIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';




function Sidebar() {

    return (

        <div className='sidebar'> 
                <div className="sidebar__top">
                   <h3>Fennec code</h3>
                   <ExpandMoreIcon />
                </div>  
                <div className="sidebar__channels">
                   <div className="sidebar__channelsHeader">
                        <div className="sidebar__header">
                            <ExpandMoreIcon />
                            <h4>Text Channels</h4>
                        </div>
                        <div>
                             <AddIcon className="sidebar__addChannel"/>
                        </div>
                    </div>
                    <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />

                     </div>  
                </div>       

                <div className="sidebar__voice"> 
                    <SignalCellularAltIcon 
                      className="sidebar__voiceIcon"
                      font-size='large'
                    />

                    <div className="sidebar__voiceInfo">
                        <h3>Voice connected</h3>
                        <p>stream</p>
                    </div>

                    <div className="sidebar__voiceIcons">
                      <InfoIconOutlinedIcon />
                      <CallIcon />
                    </div>
                </div> 
                <div className="sidebar__profile">
                    <Avatar src="index.png"/>
                    <div className="sidebar__profileInfo">
                       <h3>@hocine-ie</h3>
                       <p>#ThisIsMyID</p> 
                    </div>
                    <div className="sidebar__profileIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;
