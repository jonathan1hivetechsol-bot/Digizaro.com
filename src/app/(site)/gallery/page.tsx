import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Our Gallery"
            description="Explore our portfolio of successful projects."
        />
        {/* Add gallery components here */}
    </>
  );
};

export default page;