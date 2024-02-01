"use client"
import "@/app/globals.css"
import { Inter } from "next/font/google";
import {Layout} from "antd";
import styles from './layout.module.scss'
import {MySider} from "@/components";
const { Header, Footer, Sider, Content } = Layout;
const inter = Inter({ subsets: ["latin"] });

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#070707',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#eff0f1',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#070707',
    backgroundColor: '#eff0f1',
    borderRadius: '1rem',
    margin: '1rem 0 1rem 1rem'
};

const siderStyle: React.CSSProperties = {
    position:'relative',
    textAlign: 'center',
    lineHeight: '120px',
    color: '#070707',
    backgroundColor: '#eff0f1',
    borderRadius: '1rem',
    margin: '1rem 0 1rem 0'
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#070707',
    backgroundColor: '#eff0f1',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    // padding: '0 10rem 0 10rem',
    backgroundColor: '#e3e3e3'
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Sistema Informático de Gestión de las Elecciones de la FEU</title>
        </head>
        <body>
        <Layout style={layoutStyle}>
            <Header className={styles['header-border-shadow']} style={headerStyle}>Header</Header>
            <Layout style={{ backgroundColor: '#e3e3e3', padding: '0 7rem'}}>
                <Sider className={styles['main-border-shadow']} width="25%" style={siderStyle}>
                    <MySider/>
                </Sider>
                <Content className={styles['main-border-shadow']} style={contentStyle}> {children}</Content>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
        </body>
        </html>
    );
}
