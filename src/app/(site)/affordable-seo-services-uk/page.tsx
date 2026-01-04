import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import BuildAmazing from '@/components/Home/Build-Amazing'
import WorkGrow from '@/components/Home/work-grow';
import Preferred from '@/components/Home/preferred-plan';
import Counter from '@/components/Home/Counter';
import FaqQuestion from '@/components/Home/faq';

export const metadata: Metadata = {
  title: "Affordable SEO Services UK - Digizaro Expert SEO Agency",
  description: "Get affordable SEO services in the UK from Digizaro. Boost your Google rankings with technical SEO, on-page optimization, and white-hat strategies. Contact us today!",
};

export default function AffordableSEO() {
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