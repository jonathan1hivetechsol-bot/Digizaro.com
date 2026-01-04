import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Shop"
            description="Browse our products and services."
        />
        {/* Add shop components here */}
    </>
  );
};

export default page;