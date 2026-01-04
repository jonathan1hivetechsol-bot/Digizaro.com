import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Services Dubai | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="SEO Services Dubai"
            description="Comprehensive SEO solutions for Dubai."
        />
        {/* Add SEO content here */}
    </>
  );
};

export default page;