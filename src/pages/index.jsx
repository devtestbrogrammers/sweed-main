import Image from 'next/image'
import Link from "next/link"
import Marquee from "react-fast-marquee";
import { Iconoir, GraphUp, NetworkLeft, Heart, BrightStar, TwoPointsCircle, HandCard, BoxIso, LightBulbOn, VerifiedBadge, CreditCard, ShareAndroid, ScanQrCode, ViewGrid, Box, SmallShopAlt, PinAlt } from 'iconoir-react';
import circle from "/public/images/circle-tile.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { useHubspotForm } from 'next-hubspot';
// register Swiper custom elements
register();
import BuiltSection from '@/components/built-section';
import AllYouNeedSection from '@/components/all-you-need-section';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import empowerImage1 from "/public/images/empower_1.png"
import empowerImage2 from "/public/images/empower_2.png"
import empowerImage3 from "/public/images/empower_3.png"
import empowerImage4 from "/public/images/empower_4.png"
import empowerImage5 from "/public/images/empower_5.png"
import empowerImage6 from "/public/images/empower_6.png"
import empowerImage7 from "/public/images/empower_7.png"
import empowerImage8 from "/public/images/empower_8.png"
import empowerImage9 from "/public/images/empower_9.png"
import empowerImage10 from "/public/images/empower_10.png"
import qualityImage1 from "/public/images/quality_1.png"
import qualityImage2 from "/public/images/quality_2.png"
import qualityImage3 from "/public/images/quality_3.png"
import qualityImage4 from "/public/images/quality_4.png"
import graphic from "/public/images/graphic.png"


export default function Home() {
  const ref = useRef(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })




  gsap.registerPlugin(ScrollTrigger)
  const ref2 = useRef(null);
  useEffect(() => {
    const element = ref2.current;

    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap.to(
        ".home-advantage-section-inner",
        {
          x: function (index, target, targets) {
            return -target.offsetWidth + window.innerWidth;
          },
          ease: "none",
          scrollTrigger: {
            trigger: ".home-advantage-section",
            pin: true,
            pinSpacing: false,
            scrub: true,
            start: "top top",
            end: "bottom bottom",
          }
        }
      );
    }, element); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // cleanup!
  }, []);



  const qualities = [
    {
      title: `Cannabis eCommerce`,
      description: 'Puts you in the spotlight. Amplify your brand presence with a custom-branded website and native app. Tap into unlimited merchandising capabilities and integrated loyalty & marketing and banner management.',
      image: qualityImage1,
      icon: GraphUp,
    },
    {
      title: `Manage Your Customers`,
      description: 'Your way. Intuitive customer management provides data-driven customer segmentation, robust insights into consumer shopping habits, and integrated opt-in. Sweed is built to prevent profile duplicates and can combine existing profiles.',
      image: qualityImage2,
      icon: GraphUp,
    },
    {
      title: `Beyond Ordinary Point of Sale`,
      description: `It's feature-packed. Sweed’s intelligent promotion features provide your bud tenders with smart recommendations based on top-selling products and customer data. Payments, loyalty & marketing, product recommendations, and discounts are all integrated.`,
      image: qualityImage3,
      icon: GraphUp,
    },
    {
      title: `Cannabis Loyalty & Marketing Programs`,
      description: `Tailored to you. Advanced customer segmentation for tailored marketing & loyalty success. Craft personalized journeys with email, SMS, and push messaging, and create user workflows, loyalty, and referral programs.`,
      image: qualityImage4,
      icon: GraphUp,
    },
  ]

  const empowers = [
    {
      title: `Seamless, Cross-Location Inventory Management`,
      description: `Supercharge your inventory control and store management with cutting-edge tools including inventory thresholds to automate inventory movement. Seamlessly handle stock transfers, POS transactions, invoices, and barcode management across multiple locations.`,
      icon: BoxIso,
      image: empowerImage1,
    },
    {
      title: `Robust Analytics & Business Intelligence`,
      description: `Unleash the power of data-driven insights with our dynamic reporting suite and receive automated reports straight to your inbox. Access ready-to-use dashboards, create and schedule custom reports with advanced filters and request tailored analytics for in-depth analysis.`,
      icon: LightBulbOn,
      image: empowerImage2,
    },
    {
      title: `Best-in-Class Discount Engine`,
      description: `An intuitive discount engine that gives you autonomy to build discount models and promos by BOGO, percent off, dollar off, and more.`,
      icon: VerifiedBadge,
      image: empowerImage3,
    },
    {
      title: `Flexible Payment Options`,
      description: `Streamlined payment choices catering to all customers' preferences.`,
      icon: CreditCard,
      image: empowerImage4,
    },
    {
      title: `Only the Necessary Integrations`,
      description: `Achieve seamless sync with Metrc and Biotrack and connect with Quickbooks, Weedmaps, Leafly, and more. Sweed integrates exclusively with top-notch software that surpasses our in-house capabilities. If we can build it better, we will and it’ll be directly integrated.`,
      icon: ShareAndroid,
      image: empowerImage5,
    },
    {
      title: `Easy-to-Use Point-of-Sale Hardware`,
      description: `Hardware agnostic and effortless point-of-sale device management. Control Sweed-compatible label and receipt printers, cash drawers, menu screens, and scanners with ease.`,
      icon: ScanQrCode,
      image: empowerImage6,
    },
    {
      title: `Connected In-Store Screens`,
      description: `Easily manage multiple in-store screens including menu boards, video boards, and digital kiosks from one system.`,
      icon: ViewGrid,
      image: empowerImage7,
    },
    {
      title: `Your Goods, Delivered Right to Your Customer`,
      description: `Efficient dispatching made easy, delivering your products directly to your shoppers. Empower your fleet with our custom driver app, real-time availability, optimal routing, live courier tracking, and instant communication with drivers and customers.`,
      icon: Box,
      image: empowerImage8,
    },
    {
      title: `Multi-Location Management All from One System`,
      description: `Streamline multi-location, and multi-state organization management and effectively manage large organizations with user management features and user enrolls. Navigate with ease through an intuitive hierarchy that enables you to manage day-to-day operations and sync inventory, menu, promo updates, and more across locations and state lines all from one platform.`,
      icon: SmallShopAlt,
      image: empowerImage9,
    },
    {
      title: `Distribution & Logistics Managed Across Locations`,
      description: `Skillfully manage your logistics and distribution across multiple locations using built-in tools to run centralized distribution logistics.`,
      icon: PinAlt,
      image: empowerImage10,
    },
  ]

  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '7260254',
    formId: 'e341b340-bdbd-41a1-8056-8b78da68cfff',
    target: '#hs-form'
  });

  return (
    <main className="overflow-hidden" ref={ref2}>
      <div className="py-20 text-center">
        <div className="container" ref={ref}>
          <div className='t-body-2xl'>Point of Sale + eCommerce + Marketing & Loyalty</div>
          <motion.h2
            className='t-heading-1 relative bg-black bg-[url(/images/circle-tile.png)] bg-no-repeat bg-[center_bottom] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, y: scrollY }}
            // transition={{ duration: 0.5 }}
            style={{ scale: useTransform(scrollY, [0, 100], [1, 1.15]), originY: 1, backgroundSize: useTransform(scrollY, [0, 100], ['251px', '500px']) }}
          >
            One Platform to Manage All Cannabis Retail Operations
          </motion.h2>
        </div>
        <div className="relative z-0">
          <div className="absolute h-10 top-1/2 left-0 right-0 -translate-y-1/2 -z-10 bg-color-tile"></div>
          <Marquee autoFill={true} className='[&_img]:mx-8 [&_img]:shadow-light-xl py-10'>
            <Image
              src="/images/dashboard_bars_1.png"
              alt=""
              width={217}
              height={179}
            />
            <Image
              src="/images/image_2.png"
              alt=""
              width={180}
              height={185}
            />
            <Image
              src="/images/new_inventory_count.png"
              alt=""
              width={328}
              height={184}
            />
            <Image
              src="/images/dashboard.png"
              alt=""
              width={222}
              height={185}
            />

            <Image
              src="/images/image_3.png"
              alt=""
              width={143}
              height={185}
            />
            <Image
              src="/images/popup.png"
              alt=""
              width={202}
              height={185}
            />
            <Image
              src="/images/compare-1.png"
              alt=""
              width={410}
              height={140}
            />
            <Image
              src="/images/popup_1.png"
              alt=""
              width={260}
              height={158}
            />
            <Image
              src="/images/compare-1_1.png"
              alt=""
              width={130}
              height={176}
            />
            <Image
              src="/images/popup_2.png"
              alt=""
              width={260}
              height={158}
            />
            <Image
              src="/images/popup_3.png"
              alt=""
              width={130}
              height={159}
            />
          </Marquee>
        </div>
      </div>

      <BuiltSection />

      <AllYouNeedSection />

      <Image
        src={graphic}
        alt=""
      />

      <div className="home-advantage-section h-[500vh] relative overflow-hidden">
        <div className="home-advantage-section-inner flex flex-row gap-4 md:gap-16 lg:gap-40 items-center absolute top-0 left-0 h-screen px-[5vw] xl:px-[11.5vw] py-8 lg:py-0">
          <div className="flex flex-col items-start gap-6 flex-shrink-0 bg-cover w-[300px] md:w-[200px] lg:w-[422px] px-5 lg:px-0">
            <h2 className="t-heading-2">What Sets <span className='bg-clip-text text-link'>Sweed</span> Apart?</h2>
            <Link href="/schedule-a-demo" className="btn btn-primary-solid">Schedule a Demo</Link>
          </div>
          {qualities.map((quality, i) => {
            const Icon = quality.icon
            return (
              <div className={"flex flex-col items-start gap-8 px-5 lg:px-0 mt-8 lg:mt-0 w-[300px] md:w-[40vw] h-screen " + (i % 2 ? 'pb-0 md:pb-20' : 'pt-0 md:pt-20')} key={i}>
                <Icon color="black" height={36} width={36}></Icon>
                <h3 className='t-heading-3 text-link bg-clip-text'>{quality.title}</h3>
                <p className='t-body-lg text-neutral-500'>{quality.description}</p>
                <Link href="/schedule-a-demo" className="btn btn-primary-outline hidden lg:inline-block">Schedule a Demo</Link>
                <Image
                  className={(i % 2 ? 'lg:-order-1' : 'order-0') + ' w-auto min-h-0'}
                  src={quality.image}
                  alt=""
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="text-center max-w-[1086px] ml-auto mr-auto mt-[150px] md:mt-0 mb-[100px] md:mb-0">
            <h2 className='t-heading-2'>Empower Your Business to <span className="bg-clip-text text-link">Accomplish More</span></h2>
            <div className='t-body-lg lg:t-body-2xl text-neutral-500'>With Less Tech</div>
          </div>
          <div className="swiper-outer lg:grid grid-cols-2 gap-20 mt-10 relative">
            <div className="custom-arrow-swiper">
              <div className="up">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
              </div>
              <div className="down active">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                </svg>
              </div>
            </div>
            <swiper-container
              class="empower-text-swiper w-full h-screen lg:h-[448px]"
              direction="vertical"
              zauto-height="true"
              scrollbar="true"
              mousewheel="true"
              mousewheel-release-on-edges="true"
              free-mode-enabled="true"
              free-mode-sticky="false"
              controller-control=".empower-images-swiper"
              slides-per-view="auto"
              space-between="80"
              speed="2000"
            >
              {empowers.map((empower, i) => {
                const Icon = empower.icon
                return (
                  <swiper-slide key={empower.title}>
                    <div className='px-10 lg:px-20 flex flex-col gap-7 overflow-hidden'>
                      <div className={'flex flex-col justify-center gap-2 h-full ' + (i % 2 ? 'lg:order-1' : 'order-0')}>
                        <Icon color="black" height={36} width={36} />
                        <h3 className='t-heading-3 font-bold'>{empower.title}</h3>
                        <p className='t-body-md text-neutral-500'>{empower.description}</p>
                      </div>
                      <Image
                        src={empower.image}
                        alt=""
                        className="lg:hidden"
                        priority
                      />
                    </div>
                  </swiper-slide>
                )
              })}
            </swiper-container>

            <div className='relative hidden lg:block'>
              <swiper-container
                class="empower-images-swiper h-[448px]"
                effect={'fade'}
                fade-effect-cross-fade="true"
              >
                {empowers.map((empower, i) => {
                  return (
                    <swiper-slide
                      key={empower.title + 'a'}
                    >
                      <div className='flex justify-center items-center'>
                        <Image
                          src={empower.image}
                          alt=""
                          className="object-contain"
                          priority
                          fill={true}
                        />
                      </div>
                    </swiper-slide>
                  )
                })}
              </swiper-container>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0">
          <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-color-tile -z-10"></div>
          <div className="lg:container">
              <div className="lg:grid grid-cols-2 gap-40">
                  <div className="container lg:max-w-none lg:px-0">
                      <div className="py-20">
                          <h1 className="t-heading-1 mb-10 text-center">Schedule a <span className="bg-clip-text text-link">Demo</span></h1>
                          <div id="hs-form"></div>
                      </div>
                  </div>
                  <div className="bg-color-tile lg:bg-none flex items-center">
                      <div className="container lg:max-w-none lg:px-0">
                          <div className="py-20 text-white">
                              <h2 className="t-heading-2">Empower Revenue Growth and Boost Cost Efficiency</h2>
                              <div className="t-body-lg lg:t-body-2xl">With Our Expert Assistance.</div>
                              <p className="my-4">Contact the Sweed team today to learn more.</p>
                              <p>If we’re a fit, we’ll tailor Sweed’s all-in-one data-driven solution to your unique goals and needs. Straightforward results, every time.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </main>
  )
}
