import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;

const PageTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => <>
    <div className='page-title'>
        <div className='page-title__text'>
            <Title level={2} className='title is-size-3 flex'>&nbsp;
                {children}
            </Title>
        </div>
    </div>
</>

export default PageTitle
