import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, InputNumber, InputNumberProps, Tooltip } from 'antd'
import styles from './CustomInputNumber.module.scss'
import ValidationMessage from '@/assets/ValidationMessge.json'

interface CustomInputNumberProps extends InputNumberProps {
    label: string
    required?: boolean
    placeholder: string
    name: string,
    handleToggleClick?: () => void,
    toogleText?: string,
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: number) => void,
    min?: number,
    max?: number,
    children?: React.ReactNode
}

const CustomInputNumber: React.FC<CustomInputNumberProps> = (props) => {
    const {
        label = '',
        required = false,
        placeholder, name,
        handleToggleClick = null,
        toogleText = '',
        onChange = null,
        min = 2,
        max = 30,
        ...restProps
    } = props

    const tooltipButton = (
        <Tooltip title={toogleText} color={'blue'}>
            <Button
                type='primary'
                htmlType='submit'
                shape='circle'
                onClick={handleToggleClick}
                className='radius-100'
                icon={<PlusOutlined />}
            />
        </Tooltip>
    )

    const hasTooltip = () => handleToggleClick !== null

    const handleOnChange = (value: number) => {
        if (onChange !== null) {
            onChange(value)
        }
    }

    return (
        <>
            <Form.Item
                label={label}
                name={name}
                rules={[
                    { required, message: ValidationMessage.Form.Required },
                    {
                        pattern: /^[0-9]*$/,
                        message: ValidationMessage.Form.OnlyIntegers,
                    },
                ]}
            >
                <InputNumber
                    type={'number'}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                    min={min ? min : Number.MIN_SAFE_INTEGER}
                    max={max? max: Number.MAX_SAFE_INTEGER}
                    className={styles['custom-input-number']}
                    size='large'
                    addonAfter={hasTooltip() ? tooltipButton : null}
                    {...restProps}
                />
            </Form.Item>
        </>
    )
}

export default CustomInputNumber
