import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Graphic Designing | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Graphic Designing"
            description="Creative graphic design services for your brand."
        />
        {/* Add graphic design content here */}
    </>
  );
};

export default page;