import React, { useState } from 'react'
import './Sidebar.css'
import { Home, Notification, Explore, Lists, Messages, Profile, Twitter, Bookmark, More } from './Icon/index'
import SidebarOption from './SidebarOption'
import { Button } from "@material-ui/core"


function Sidebar() {

    const [active, setActive] = useState('Home');


    return (
        <div className="sidebar">

            <Twitter className="sidebar__twitterIcon"></Twitter>

            <SidebarOption text="Anasayfa" Icon={Home}></SidebarOption>
            <SidebarOption text="Keşfet" Icon={Explore}></SidebarOption>
            <SidebarOption text="Bildirimler" Icon={Notification}></SidebarOption>
            <SidebarOption text="Mesajlar" Icon={Messages}></SidebarOption>
            <SidebarOption text="Yer İşaretleri" Icon={Bookmark}></SidebarOption>
            <SidebarOption text="Listeler" Icon={Lists}></SidebarOption>
            <SidebarOption text="Profil" Icon={Profile}></SidebarOption>
            <SidebarOption text="Daha Fazla" Icon={More}></SidebarOption>

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweetle</Button>
        </div>
    )
}

export default Sidebar