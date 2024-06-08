import React from 'react'
import { Form, Select } from 'antd'
import { SelectProps } from 'antd/lib'

interface SelectOptionsProps {
	value: string | number
	label: string
}

interface CustomSelectProps extends SelectProps<SelectOptionsProps> {
	placeholder: string
	options: SelectOptionsProps[]
	onSelectionChange: Function
	label: string
	name: string
	required: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = props => {
	const { placeholder, options, onSelectionChange, label, name, required=false } =
		props

	const onChange = (value: string) => {
		console.log(`selected ${value}`)
		onSelectionChange(value)
	}

	const onSearch = (value: string) => {
		console.log('search:', value)
	}

	// Filter `option.label` match the user type `input`
	const filterOption = (
		input: string,
		option?: { label: string; value: string | number }
	) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

	return (
    <Form.Item
        label={label}
        name={name}
        required={required}
		>
        <Select
            showSearch
            placeholder={placeholder}
            optionFilterProp='children'
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={options}
			/>
    </Form.Item>
	)
}

export type { SelectOptionsProps, CustomSelectProps }
export default CustomSelect
