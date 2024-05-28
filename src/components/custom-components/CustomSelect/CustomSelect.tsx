import React from 'react'
import { Select } from 'antd'
import { SelectProps } from 'antd/lib'

interface SelectOptionsProps {
	value: string | number
	label: string
}

interface CustomSelectProps extends SelectProps<SelectOptionsProps> {
	placeholder: string
	options: SelectOptionsProps[]
	selected: string
	onSelectionChange: Function
}

const CustomSelect: React.FC<CustomSelectProps> = props => {
	const { placeholder, options, selected, onSelectionChange } = props

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
		option?: { label: string; value: string }
	) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

	return (
  <Select
    showSearch
    placeholder={placeholder}
    optionFilterProp='children'
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={options}
		/>
	)
}

export type { SelectOptionsProps, CustomSelectProps }
export default CustomSelect
