'use client'
import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { Inter } from 'next/font/google'
import MyHeader from '@/components/base/Header/Header'
import '../globals.css'
import styles from './Layout.module.scss'
import { MySider } from '@/components'
import useWindowSize from '@/Hooks/useWindowSize'

const { Header, Footer, Sider, Content } = Layout
const inter = Inter({ subsets: ['latin'] })

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	backgroundColor: 'transparent',
}

const siderStyle: React.CSSProperties = {
	height: '100%',
	top: '.40rem',
	backgroundColor: 'transparent',
}

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
}

const layoutStyle = {
	borderRadius: '8px 0 0 0',
	overflow: 'hidden',
	boxShadow: '10px 4px 40px -7px rgba(0,0,0,0.72)',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<title>
					Sistema Informático de Gestión de las Elecciones de la FEU
				</title>
			</head>
			<body className={inter.className}>
				<Layout
					className={styles['layout-background']}
					style={layoutStyle}
				>
					<Sider
						collapsible
						breakpoint={'sm'}
						style={siderStyle}
					>
						<MySider />
					</Sider>
					<Layout
						style={{
							position: 'relative',
							top: '0.3rem',
							borderRadius: '2rem 0 0 0',
                            backgroundColor: 'rgba(255,255,255,0.5)',
						}}
					>
						<Header
							className={styles['header']}
							style={{
								position: 'sticky',
							}}
						>
							<div className='demo-logo' />
							<MyHeader />
						</Header>
						<Content style={contentStyle}>{children}</Content>
						<Footer style={footerStyle}>Footer</Footer>
					</Layout>
				</Layout>
			</body>
		</html>
	)
}
