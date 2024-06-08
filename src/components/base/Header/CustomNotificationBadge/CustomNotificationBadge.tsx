import React, { useState } from 'react'
import { Badge, Space } from 'antd'
import { IoNotificationsCircleSharp } from 'react-icons/io5'

const CustomNotificationBadge: React.FC = () => {
    const [count, setCount] = useState(5)

    return (
        <Badge  count={count} size='small'>
            <IoNotificationsCircleSharp size={15}/>
        </Badge>
    )
}

export default CustomNotificationBadge
