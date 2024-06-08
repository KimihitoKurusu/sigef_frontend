import React from 'react'
import type {GetProps, SelectProps} from 'antd'
import {DatePicker, Form, Switch} from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import ValidationMessage from '@/assets/ValidationMessge.json'
import {CheckOutlined, CloseOutlined} from '@ant-design/icons'

dayjs.extend(customParseFormat)
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;


const range = (start: number, end: number) => {
    const result = []
    for (let i = start; i < end; i++) {
        result.push(i)
    }
    return result
}
// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day')
}


interface CustomDatePickerProps extends SelectProps {
    label: string
    onChange?: (value: number | string | number[]) => void
    name?: string
    required?: boolean
    disabled?: boolean
}

const CustomSwitch: React.FC<CustomDatePickerProps> = (props) => {
    const {
        label= '',
        name = '',
        onChange = null,
        required = false,
        disabled = true,
        ...restProps
    } = props

    const rules = [{ required, message: ValidationMessage.Form.Required}]

    const onChangeValue = (value: number | string) => {
        if (onChange !== null) {
            onChange(value)
        }
    }

    return (
        <Form.Item label={label} name={name} rules={rules}>
            <Switch
                disabled={disabled}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
            />
        </Form.Item>

    )
}

export default CustomSwitch
