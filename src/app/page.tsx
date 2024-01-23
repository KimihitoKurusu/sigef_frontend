"use client"
import { Empty } from 'antd';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    </main>
  );
}
