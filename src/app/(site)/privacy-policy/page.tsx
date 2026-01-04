import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Privacy Policy"
            description="Learn how we protect your privacy."
        />
        {/* Add privacy policy content here */}
    </>
  );
};

export default page;