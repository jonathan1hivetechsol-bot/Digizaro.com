import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Services in Birmingham | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="SEO Services in Birmingham"
            description="Expert SEO services tailored for Birmingham businesses."
        />
        {/* Add SEO content here */}
    </>
  );
};

export default page;