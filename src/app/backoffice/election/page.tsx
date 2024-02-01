"use client"
import React from "react";
import {PageTitle} from "@/components";
import {
    Button, Card,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';

const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
};
export default function Election() {

    return (
        <main className="flex min-h-screen flex-col items-center p-5" style={{color: 'black'}}>
            <PageTitle>
                Crear Election
            </PageTitle>
            <Card className="flex flex-col items-center p-5" style={{ width: 1000 }}>
                <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
                    <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="InputNumber"
                        name="InputNumber"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="TextArea"
                        name="TextArea"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label="Mentions"
                        name="Mentions"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Mentions />
                    </Form.Item>

                    <Form.Item label="Select" name="Select" rules={[{ required: true, message: 'Please input!' }]}>
                        <Select />
                    </Form.Item>

                    <Form.Item
                        label="Cascader"
                        name="Cascader"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Cascader />
                    </Form.Item>

                    <Form.Item
                        label="TreeSelect"
                        name="TreeSelect"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <TreeSelect />
                    </Form.Item>

                    <Form.Item
                        label="DatePicker"
                        name="DatePicker"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="RangePicker"
                        name="RangePicker"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <RangePicker />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </main>
    );
}

