"use client"
import React from 'react';
import {Layout} from 'antd';
import {Inter} from "next/font/google";

const {Header, Footer, Sider, Content} = Layout;
const inter = Inter({subsets: ["latin"]});


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#CCCCF',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout style={layoutStyle}>
                    <Sider width="25%" style={siderStyle}>
                        Sider
                    </Sider>
                    <Layout>
                        <Header style={headerStyle}>Header</Header>
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
