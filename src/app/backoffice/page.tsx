'use client'
import { CustomCard } from '@/components'
import { Card, Col, Empty, Row } from 'antd'
import { title } from 'process'
import React from 'react'
const gridStyle: React.CSSProperties = {
	width: '25%',
	textAlign: 'center',
}
export default function BackOfficeHome() {
	const data = [
		{
			name: 'Elección de Facultad de Ingeniería Informática y Ciencias Exactas.',
			initials: 'FICE',
			councilSize: 7,
			candidateQuantity: 15,
		},
		{
			name: 'Elección de Facultad de Ciencias Aplicadas.',
			initials: 'FCA',
			councilSize: 10,
			candidateQuantity: 20,
		},
	]

	return (
		<main
			className='flex min-h-screen flex-col items-center p-10'
			style={{ color: 'black' }}
		>
			{data.map(dat => {
				const { name, ...otherThings } = dat
				return (
					<CustomCard
                        key={title as string}
						title={name as string}
						description={Object.values(otherThings)}
					/>
				)
			})}
		</main>
	)
}
