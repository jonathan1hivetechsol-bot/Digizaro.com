import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customer Dashboard | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Customer Dashboard"
            description="Manage your account and orders."
        />
        {/* Add dashboard components here */}
    </>
  );
};

export default page;