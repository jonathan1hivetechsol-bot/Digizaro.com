import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Counter from '@/components/Home/Counter';
import WorkGrow from '@/components/Home/work-grow';
import BuildAmazing from '@/components/Home/Build-Amazing';
import Preferred from '@/components/Home/preferred-plan';
import FaqQuestion from '@/components/Home/faq';

export const metadata: Metadata = {
    title: "About Digizaro | Trusted UK Digital Marketing Agency",
    description: "Learn about Digizaro - your trusted partner in affordable digital marketing services UK. We specialize in SEO, Facebook Ads, web design, and helping businesses grow online.",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="About Digizaro"
            description="Trusted by UK Brands - Experts in Affordable Digital Marketing Services UK"
        />

        {/* Why UK Brands Trust Digizaro Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Why UK Brands Trust Digizaro
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        We've earned the trust of well-known names like Unilever and ASOS, but we're just as committed to helping local businesses grow. Our success comes from understanding what works online — and applying it with honesty, creativity, and care.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Established in 2021</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We aim to provide a comprehensive digital solutions for businesses and individuals alike.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Expertise in diverse areas</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Offering a range of services including SEO, affordable digital marketing services UK, social media ads, and web design, Graphic designing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Dedicated Professionals Committed to Your Success
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-4xl">👨‍💼</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hamza Chuhdary</h3>
                        <p className="text-gray-600 dark:text-gray-300">SEO Specialist</p>
                    </div>
                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Brian Smith</h3>
                        <p className="text-gray-600 dark:text-gray-300">Content Strategist</p>
                    </div>
                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-4xl">👩‍💼</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cynthia Lee</h3>
                        <p className="text-gray-600 dark:text-gray-300">Digital Marketing Manager</p>
                    </div>
                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">David Brown</h3>
                        <p className="text-gray-600 dark:text-gray-300">Web Developer</p>
                    </div>
                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-4xl">👩‍🎨</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Eva White</h3>
                        <p className="text-gray-600 dark:text-gray-300">Graphic Designer</p>
                    </div>
                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-4xl">👨‍💼</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frank Green</h3>
                        <p className="text-gray-600 dark:text-gray-300">PPC Specialist</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        WE HAVE WORKED WITH POPULAR COMPANIES
                    </h2>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            SEO Services for Small Businesses in the UK
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Many small business owners struggle to get noticed online. That's why we focus on SEO services for UK small businesses, helping you show up in local Google searches. We research low-competition keywords with high traffic potential, so you can rank faster and start seeing results without spending a fortune. From optimising your website structure to writing content that ranks, we cover all aspects of search engine optimisation.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Effective Facebook Advertising on a Small Budget
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Running ads doesn't have to be expensive. Our team creates low-cost Facebook ad campaigns tailored to your goals. Whether you're looking for lead generation, local awareness, or online sales, we manage every step — targeting, creatives, split-testing, and reporting. We focus on ROI, so every pound you spend brings results.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Website Design That Converts
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We build fast, modern websites for small businesses in the UK, designed with SEO and conversions in mind. Whether you need a landing page, blog, or full eCommerce store, we make sure your site looks professional and performs well on all devices. All our designs are mobile-optimised and Google-friendly, giving your brand a solid online foundation.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            We Offer Affordable Digital Marketing Services UK to Help Your Business Grow
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            In today's competitive online landscape, having a strong digital presence is essential. At Digizaro, we offer affordable digital marketing services UK that are tailored to meet the unique needs of your business. Whether you're looking to boost website traffic, increase brand awareness, or drive sales, our expert team delivers effective strategies through SEO, social media, content marketing, and paid advertising. We focus on results, transparency, and value so you get the growth you need without breaking the bank.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Trusted Brands Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Trusted UK Digital Marketing Services for Brands Like Unilever, ASOS & Nike
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        We don't just offer digital marketing services we build real partnerships that help businesses grow. Over the years, we've had the privilege to collaborate with some of the UK's most recognised names, including Unilever, ASOS, Primark, and Nike. But whether it's a global brand or a local startup, our goal stays the same: deliver smart, effective digital strategies that get results.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        From SEO and Facebook advertising to custom web design and eCommerce solutions, we cover all the essential areas that matter in today's online world. Our UK-based team focuses on creating tailored strategies that actually work — not just fancy reports. We help brands climb Google rankings through practical on-page SEO, in-depth keyword research, and mobile-friendly websites that convert.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        What sets us apart? We're transparent, affordable, and fully committed to helping your business succeed online. Whether you're searching for a digital marketing partner or simply want to improve your site's visibility, Digizaro is here to help.
                    </p>
                </div>
            </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Get Started with Digizaro
                </h2>
                <p className="text-xl mb-8">
                    Contact Us Today
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                    Get Services
                </a>
            </div>
        </section>

        <BuildAmazing isSpace={true} />
        <WorkGrow/>
        <Preferred/>
        <Counter/>
        <FaqQuestion/>
    </>
  )
}

export default page