import React from 'react';
import {Input} from 'antd';
import {SearchOutlined} from "@ant-design/icons";

const inputStyle: React.CSSProperties = {
    borderRadius: '0.4rem',
    width: '10rem'
};



const CustomAutoCompleteInput: React.FC = () => {

    return (
        <Input
            className='mx-1'
            size='small'
            placeholder="Search..."
            prefix={<SearchOutlined/>}
            style={inputStyle}
        />
    );
};

export default CustomAutoCompleteInput;
