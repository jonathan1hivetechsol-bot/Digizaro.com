import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Google My Business Optimization US Guide | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Google My Business Optimization US Guide"
            description="Complete guide to optimizing your GMB for US businesses."
        />
        {/* Add guide content here */}
    </>
  );
};

export default page;