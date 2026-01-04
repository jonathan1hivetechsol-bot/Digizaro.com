import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Checkout"
            description="Complete your purchase securely."
        />
        {/* Add checkout components here */}
    </>
  );
};

export default page;