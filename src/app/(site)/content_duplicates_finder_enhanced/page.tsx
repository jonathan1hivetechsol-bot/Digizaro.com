import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Content Duplicates Finder Enhanced | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Content Duplicates Finder Enhanced"
            description="Advanced tool to find and eliminate duplicate content."
        />
        {/* Add tool content here */}
    </>
  );
};

export default page;