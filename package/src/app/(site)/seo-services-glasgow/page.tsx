import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Services Glasgow | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="SEO Services Glasgow"
            description="Boost your online visibility in Glasgow with our SEO expertise."
        />
        {/* Add SEO content here */}
    </>
  );
};

export default page;