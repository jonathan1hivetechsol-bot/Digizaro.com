import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Service London | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="SEO Service London"
            description="Top-rated SEO services for London businesses."
        />
        {/* Add SEO content here */}
    </>
  );
};

export default page;