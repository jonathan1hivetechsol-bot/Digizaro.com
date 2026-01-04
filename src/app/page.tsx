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
      <section className="bg-primary py-20">
        <div className="container">
          <h1 className="text-white text-4xl">Professional SEO Services & Web Development by Digizaro</h1>
          <p className="text-white mt-4">Boost your online presence with our expert services.</p>
          <button className="bg-white text-primary py-3 px-12 rounded-lg mt-8">Get Started</button>
        </div>
      </section>
      <BuildAmazing isSpace={true} />
      <WorkGrow/>
      <Preferred/>
      <Counter/>
      <FaqQuestion/>
    </main>
  )
}
