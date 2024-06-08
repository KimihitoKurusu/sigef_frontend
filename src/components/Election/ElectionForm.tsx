import React, { useEffect, useState } from 'react'
import { Button, Form, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
	CustomDatePicker,
	CustomInputNumber,
	CustomSwitch,
	CustomSelect,
	SelectOptionsProps,
} from '@/components'
import {
	fetchCampuses,
	fetchFaculties,
	fetchInstitutions,
	selectAllCampuses,
	selectAllFaculties,
	selectAllInstitutions,
} from '@/redux'

const onFinish = (values: any) => {
	console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo)
}

interface LocationType extends SelectOptionsProps {
	value: string
	label: string
}

const locationType: LocationType[] | undefined = [
	{ value: 'institution', label: 'Institución' },
	{ value: 'faculty', label: 'Facultad' },
	{ value: 'campus', label: 'Sede' },
]

const ElectionForm: React.FC = () => {
	const dispatch = useDispatch()
	const [institutions, setInstitutions] = useState(
		useSelector(selectAllInstitutions)
	)
	const [campuses, setCampuses] = useState(useSelector(selectAllCampuses))
	const [selectedLocationType, setSelectedLocationType] = useState<
		LocationType | undefined
	>(undefined)

	useEffect(() => {
		dispatch(fetchFaculties())
	}, [selectedLocationType, dispatch])

	useEffect(() => {
		dispatch(fetchInstitutions())
	}, [selectedLocationType, dispatch])

	useEffect(() => {
		dispatch(fetchCampuses())
	}, [selectedLocationType, dispatch])

	const manageLocation = (selectedLocationType: string | undefined) => {
		if (selectedLocationType === undefined) {
			return null
		} else if (selectedLocationType === 'institution') {
			return institutions
		} else if (selectedLocationType === 'campus') {
			return campuses
		} else {
			return faculties
		}
	}

	return (
		<Form
			name='basic'
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<CustomSelect
				label={'Tipo de Eleción:'}
				name={'locationType'}
				placeholder={'Tipo de Eleción'}
				onSelectionChange={(value: string) => {
					if (typeof value === 'string')
						setSelectedLocationType(
							locationType.find(item => item.value === value)
						)
				}}
				required={true}
				options={locationType}
			/>

			<CustomSelect
				label='Localización:'
				name={'location'}
				placeholder={'Localización'}
				required={true}
				options={manageLocation(selectedLocationType?.value)?.map(location => ({
					label: location.name,
					value: location.id
				})) || []}
				onSelectionChange={(value: string) => {
					if (typeof value === 'string')
						setSelectedLocationType(
							locationType.find(item => item.value === value)
						)
				}}
			>
				{manageLocation(selectedLocationType?.value) &&
					manageLocation(selectedLocationType?.value)?.map(
						(item, idx) => (
							<Select.Option
								value={item.id}
								key={idx}
							>
								{item.name}
							</Select.Option>
						)
					)}
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
				<Button
					className='primary-btn'
					type='primary'
					htmlType='submit'
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default ElectionForm
