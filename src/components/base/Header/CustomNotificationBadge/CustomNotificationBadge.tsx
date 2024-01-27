import React, { useState } from 'react';
import { Badge, Space } from 'antd';
import {BellOutlined} from "@ant-design/icons";

const CustomNotificationBadge: React.FC = () => {
    const [count, setCount] = useState(2);

    return (
        <Badge   count={count} size='small'>
            <BellOutlined style={{ fontSize: '20px'}}/>
        </Badge>
    );
};

export default CustomNotificationBadge;
