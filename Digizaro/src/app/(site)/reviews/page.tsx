import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reviews | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Customer Reviews"
            description="See what our clients say about our services."
        />
        {/* Add review components here */}
    </>
  );
};

export default page;