import React from 'react';
import { Breadcrumb } from 'antd';

const CustomBreadcrumb: React.FC = () => (
    <Breadcrumb
        className='text-[11px] relative top-1'
        items={[
            {
                title: 'Home',
            },
            {
                title: <a href="@/components/base/Header/CustomBreadcrumb/CustomBreadcrumb">Application Center</a>,
            },
            {
                title: <a href="@/components/base/Header/CustomBreadcrumb/CustomBreadcrumb">Application List</a>,
            },
            {
                title: 'An Application',
            },
        ]}
    />
);

export default CustomBreadcrumb;
