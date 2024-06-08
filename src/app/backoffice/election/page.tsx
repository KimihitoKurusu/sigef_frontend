'use client'
import React, { useState } from 'react'
import { ElectionForm, PageTitle } from '@/components'
import type { CustomSelectProps } from '@/components'
import {
	Card,
	DatePicker,
} from 'antd'

export default function Election() {

	return (
    <main
        className='flex min-h-screen flex-col items-center p-5'
        style={{ color: 'black' }}
		>
        <PageTitle>Crear Elección</PageTitle>
        <Card
            className='flex flex-col items-center p-5'
            style={{ width: 1000 }}
			>
            <ElectionForm />
        </Card>
    </main>
	)
}
