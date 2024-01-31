"use client"
import {Card, Col, Empty, Row} from 'antd';
import React from "react";
const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
};
export default function BackOfficeHome() {

    return (
        <main className="flex min-h-screen flex-col items-center p-10" style={{color: 'black'}}>
            <Card title="Card Title" style={{width: '100%', height: '100%'}}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    Content
                </Card.Grid>
            </Card>
        </main>
    );
}

