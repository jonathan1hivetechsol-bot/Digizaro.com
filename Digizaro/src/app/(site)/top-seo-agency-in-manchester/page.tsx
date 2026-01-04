import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top SEO Agency in Manchester | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Top SEO Agency in Manchester"
            description="Leading SEO agency providing exceptional results in Manchester."
        />
        {/* Add agency content here */}
    </>
  );
};

export default page;