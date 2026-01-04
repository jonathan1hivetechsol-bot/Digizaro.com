import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Terms & Conditions"
            description="Read our terms and conditions."
        />
        {/* Add terms content here */}
    </>
  );
};

export default page;