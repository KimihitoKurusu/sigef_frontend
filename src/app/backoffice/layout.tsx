"use client"
import React from 'react';
import {Layout} from 'antd';
import {Inter} from "next/font/google";
import MyHeader from "@/components/base/Header/Header";
import "../globals.css";
import styles from './Layout.module.scss'
import {MySider} from "@/components";

const {Header, Footer, Sider, Content} = Layout;
const inter = Inter({subsets: ["latin"]});

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#CCCCF',
};

const siderStyle: React.CSSProperties = {
    height: '100%',
    top: '.40rem',
    backgroundColor: '#ffff'

};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '10px 4px 40px -7px rgba(0,0,0,0.72)',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Layout siderBg={'#ffffff'} style={layoutStyle}>
            <Sider
                collapsible
                width="20%"
                style={siderStyle}
            >
                <MySider/>
            </Sider>
            <Layout>
                <Header className={`${styles['header']}`}><MyHeader/></Header>
                <Content style={contentStyle}>
                    {children}
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
        </body>
        </html>
    );
}
