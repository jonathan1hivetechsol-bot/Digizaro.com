import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Facebook Services | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Facebook Services"
            description="Boost your Facebook presence with our expert services."
        />
        {/* Add Facebook services components here */}
    </>
  );
};

export default page;