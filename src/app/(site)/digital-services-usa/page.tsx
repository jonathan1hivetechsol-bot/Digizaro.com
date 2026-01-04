import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Services USA | Digizaro",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="Digital Services USA"
            description="Comprehensive digital marketing services for US businesses."
        />
        {/* Add services content here */}
    </>
  );
};

export default page;