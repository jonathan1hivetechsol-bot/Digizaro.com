import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import BuildAmazing from '@/components/Home/Build-Amazing'
import WorkGrow from '@/components/Home/work-grow';
import Preferred from '@/components/Home/preferred-plan';
import Counter from '@/components/Home/Counter';
import FaqQuestion from '@/components/Home/faq';

export const metadata: Metadata = {
  title: "Services - Digizaro Digital Marketing Services UK",
  description: "Explore Digizaro's comprehensive digital marketing services including SEO, web design, Facebook ads, e-commerce, and graphic design. Affordable solutions for UK businesses.",
};

export default function Services() {
  return (
    <main>
      <Hero/>
      <BuildAmazing isSpace={true} />
      <WorkGrow/>
      <Preferred/>
      <Counter/>
      <FaqQuestion/>
    </main>
  )
}