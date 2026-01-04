import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import BuildAmazing from '@/components/Home/Build-Amazing'
import WorkGrow from '@/components/Home/work-grow';
import Preferred from '@/components/Home/preferred-plan';
import Counter from '@/components/Home/Counter';
import FaqQuestion from '@/components/Home/faq';

export const metadata: Metadata = {
  title: "Contact Digizaro - Get Affordable Digital Marketing Services UK",
  description: "Contact Digizaro for affordable SEO services, Facebook ads, web design, and digital marketing solutions in the UK. Get your business growing online today.",
};

export default function Contact() {
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
