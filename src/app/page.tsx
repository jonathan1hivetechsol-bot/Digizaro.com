import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import BuildAmazing from '@/components/Home/Build-Amazing'
import WorkGrow from '@/components/Home/work-grow';
import Preferred from '@/components/Home/preferred-plan';
import Counter from '@/components/Home/Counter';
import FaqQuestion from '@/components/Home/faq';
export const metadata: Metadata = {
  title: "Digizaro - Professional SEO Services & Web Development",
  description: "Leading digital marketing agency offering SEO services, web development, and digital solutions for businesses in the UK and internationally.",
};

export default function Home() {
  return (
    <main>
      <div>Welcome to Digizaro</div>
      <BuildAmazing isSpace={true} />
      <WorkGrow/>
      <Preferred/>
      <Counter/>
      <FaqQuestion/>
    </main>
  )
}
