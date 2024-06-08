'use client'

import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons'
import React, { useState } from 'react'
import { Avatar, Card, Skeleton, Switch, Typography } from 'antd'

import type { ElectionProps, CustomCardProps } from './CustomCard.helper'

const { Meta } = Card
const { Title } = Typography

const CustomCard: React.FC<CustomCardProps> = ({title, description, ...props}) => {
	const [loading, setLoading] = useState(true)

	const onChange = (checked: boolean) => {
		setLoading(!checked)
	}

	return (
    <>
        <Switch
            checked={!loading}
            onChange={onChange}
			/>
        <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />,
				]}
			>
            <Skeleton
                loading={loading}
                avatar
                active
				>
                <Meta
                    avatar={
                        <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' />
						}
                    title={<Title key={title as string} level={4}>{title as string}</Title>}
						/>
                {(description as string[]).map((value, index) => <Title key={index} level={5}>{value}</Title>)}
            </Skeleton>
        </Card>
    </>
	)
}

export default CustomCard