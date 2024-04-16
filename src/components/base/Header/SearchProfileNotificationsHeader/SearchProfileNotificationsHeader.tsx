import React from "react"
import {CustomAutoCompleteInput} from "@/components";
import { HiUserCircle } from "react-icons/hi2";
import CustomNotificationBadge from "../CustomNotificationBadge/CustomNotificationBadge";

const SearchProfileNotificationsHeader = () =>{
    return (
        <>
           <CustomAutoCompleteInput/>
            <HiUserCircle  className='mx-1'/>
            <CustomNotificationBadge className='mx-1'/>
        </>
    )
}

export default SearchProfileNotificationsHeader
