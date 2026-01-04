import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Keyword Density Placement Checker | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Keyword Density Placement Checker"
            description="Analyze and optimize your keyword density."
        />
        {/* Add tool content here */}
    </>
  );
};

export default page;