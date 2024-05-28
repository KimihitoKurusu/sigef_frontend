/* eslint-disable no-unused-vars */
import ValidationMessage from '@/assets/ValidationMessge.json'
import React from 'react'
import { Select, Form, SelectProps } from 'antd'
import type { DefaultOptionType } from 'antd/lib/select'

interface CustomSelectProps extends SelectProps {
    label: string
    onChange?: (value: number | string | number[]) => void
    name?: string
    required?: boolean
    manageFiltering?: (input: string, option: DefaultOptionType) => boolean
    showSearch?: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
    const {
        label= '',
        name = '',
        onChange = null,
        required = false,
        manageFiltering = null,
        showSearch = true,
        children,
        ...restProps
    } = props

    const rules = [{ required, message: ValidationMessage.Form.Required}]

    const onChangeValue = (value: number | string) => {
        if (onChange !== null) {
            onChange(value)
        }
    }

    const handleFilterOption = (input: string, option: DefaultOptionType): boolean => {
        if (!manageFiltering) {
            return (option.children as unknown as string)?.toLowerCase()?.includes(input?.toLowerCase())
        }
        return manageFiltering(input, option)
    }

    return (
      <Form.Item label={label} name={name} rules={rules}>
        <Select
          {...restProps}
          showSearch={showSearch}
          optionFilterProp='children'
          size='large'
          className='select-input'
          onChange={onChangeValue}
          filterOption={(input, option) => handleFilterOption(input, option)}
            >
          {children}
        </Select>
      </Form.Item>

    )
}

export default CustomSelect
