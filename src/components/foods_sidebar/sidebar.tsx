'use client'

import { useEffect } from "react"
import Style from './foodSidebar.module.css'


export default function FoodSidebar(){

    return(
        <div id='foodSidebar' className={Style.foodSidebarClass}>
            This is food side bar
        </div>
    )
}