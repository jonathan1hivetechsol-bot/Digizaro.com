import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO in Dubai | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="SEO in Dubai"
            description="Professional SEO services for Dubai businesses."
        />
        {/* Add SEO content here */}
    </>
  );
};

export default page;