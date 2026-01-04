import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Services in Liverpool | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="SEO Services in Liverpool"
            description="Effective SEO strategies for Liverpool businesses."
        />
        {/* Add SEO content here */}
    </>
  );
};

export default page;