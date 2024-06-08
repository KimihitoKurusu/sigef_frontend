import React from 'react'
import Link from 'next/link'
import {FaVoteYea} from 'react-icons/fa'

interface SidebarSection {
    key: string,
    icon?: React.ReactNode,
    children?: React.ReactNode,
    subItems?: SidebarSection[]
    isVisible?: boolean,
    isSubMenu?: boolean,
    title?: React.ReactNode,
    className?: string
    hasPermision?: boolean
}
// TODO modificar según necesidades
const getDefaultOpenKeys = (currentActiveKey: string|null): string[] => {
    if(!currentActiveKey){
        return []
    }
    if (['deposits', 'my-orders', 'my-sales'].includes(currentActiveKey)) {
        return ['Transactions']
    } else if (['stock-alerts', 'notifications'].includes(currentActiveKey)) {
        return ['Notifications']
    }
    return []
}
const getLink = (
    label: string,
    url: string,
) => {
    return (
        <Link href={url}>
            <h3>
                {label}
            </h3>
        </Link>
    )
}


const menuSections = (isAdmin: boolean = false): SidebarSection[] => [
    // { // Election
    //     key: 'election', icon: <FaVoteYea/>,
    //     children: getLink('Crear Election', `/backoffice/election`),
    //     isVisible: true
    // },
    { // Election
        key: 'fice', icon: <FaVoteYea/>,
        children: getLink('FICE', '/backoffice/election'),
        isVisible: true
    },
    { // Election
        key: 'facom', icon: <FaVoteYea/>,
        children: getLink('FACOM', '/backoffice/election'),
        isVisible: true
    },

]
export const helpers = {
    getLink,
    menuSections,
    getDefaultOpenKeys
}
