import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Designing E-commerce Store | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Web Designing E-commerce Store"
            description="Professional e-commerce website design services."
        />
        {/* Add web design components here */}
    </>
  );
};

export default page;