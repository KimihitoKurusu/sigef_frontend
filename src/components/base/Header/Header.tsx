"use client"
import type {GetProp, MenuProps} from 'antd';
import {Menu} from 'antd';
import React, {useEffect} from "react"
import styles from './Header.module.scss'
import {HiUserCircle} from "react-icons/hi2";
import useWindowSize from "@/Hooks/useWindowSize";
import {CustomAutoCompleteInput, CustomBreadcrumb} from "@/components";
import CustomNotificationBadge from "./CustomNotificationBadge/CustomNotificationBadge";

type MenuItem = GetProp<MenuProps, 'items'>[number];

function getItem(
    label?: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('', '3', <HiUserCircle style={{fontSize: '25px'}}/>),
    getItem('', '4', <CustomNotificationBadge/>),
];
export default function MyHeader() {
    const size = useWindowSize();

    useEffect(() => {
        console.log(size)

    });

    return (
        <>
            <nav className={`${styles['navbar']} backdrop-blur bg-opacity-50`}>
                <CustomBreadcrumb/>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={
                        {
                            flex: 1,
                            minWidth: 0,
                            backgroundColor: '#F5F5F5B5',
                            flexDirection: 'row-reverse',
                        }
                    }
                />
            </nav>
        </>
    )
}

