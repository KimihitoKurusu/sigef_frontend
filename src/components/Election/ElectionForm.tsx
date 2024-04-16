import React from 'react'
import {Button, Form, Select} from 'antd';
import CustomSelect from "../base/custom-inputs/customSelect/CustomSelect";
import {CustomDatePicker, CustomInputNumber, CustomSwitch} from "@/components";


const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
export const companySizes = [
    {value: 'small', label: 'Institucion'},
    {value: 'medium', label: 'Facultad'},
    {value: 'large', label: 'Sede'},
]

const ElectionForm: React.FC = ({children, ...props}) => {
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <CustomSelect
                label='Tipo de Eleción:'
                name={'companySize'}
                placeholder={'Tipo de Eleción'}
                required
            >
                {companySizes?.map((item, idx) => (
                    <Select.Option value={item.value} key={idx}>{item.label}</Select.Option>
                ))}
            </CustomSelect>

            <CustomSelect
                label='Localización:'
                name={'companySize'}
                placeholder={'Localización'}
                required
            >
                {companySizes?.map((item, idx) => (
                    <Select.Option value={item.value} key={idx}>{item.label}</Select.Option>
                ))}
            </CustomSelect>

            <CustomInputNumber
                label={'Tamaño del Consejo:'}
                name='volume_credits'
                placeholder={'Tamaño del Consejo de la FEU'}
                required
            />

            <CustomDatePicker
                label={'Tamaño del Consejo:'}
                name='volume_credits'
                required
            />

            <CustomSwitch
                label={'Activar elección'}
                name='volume_credits'
            />
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button className='primary-btn' type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default ElectionForm
