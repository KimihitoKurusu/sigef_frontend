"use client"
import React from "react"
import styles from './Header.module.scss'
import {CustomBreadcrumb} from "@/components";
import SearchProfileNotificationsHeader from "./SearchProfileNotificationsHeader/SearchProfileNotificationsHeader";

export default function MyHeader() {
    return (
        <>
            <nav className={`${styles['navbar']} backdrop-blur bg-opacity-50`}>
                <div >
                    <CustomBreadcrumb />
                </div>
                <div className='flex flex-row flex-wrap items-center'>
                    <SearchProfileNotificationsHeader/>
                </div>
            </nav>
        </>
    )
}

