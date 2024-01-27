import React from 'react';
import useWindowSize from "@/Hooks/useWindowSize";
import {Breadcrumb} from "antd";

const CustomBreadcrumb: React.FC = () => {

    const size = useWindowSize();
    return (
        <Breadcrumb
            className={`text-[12px]`}
            items={[
                {
                    title: 'Home',
                },
                {
                    title: 'An Application',
                },
            ]}
        />
    )
};

export default CustomBreadcrumb;
