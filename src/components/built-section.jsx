import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useRef, useEffect } from 'react';
import { Iconoir, GraphUp, NetworkLeft, Heart, BrightStar, TwoPointsCircle, HandCard, BoxIso } from 'iconoir-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import featureImage1 from "/public/images/feature_1.png"
import featureImage2 from "/public/images/feature_2.png"
import featureImage3 from "/public/images/feature_3.png"
import featureImage4 from "/public/images/feature_4.png"
import featureImage5 from "/public/images/feature_5.png"
import featureImage6 from "/public/images/feature_6.png"
import featureImage7 from "/public/images/feature_7.png"

export default function BuiltSection() {
    gsap.registerPlugin(ScrollTrigger)

    const features = [
        {
            title: 'Native Data',
            description: 'Actionable business intelligence reporting. Any custom report you need. Data is never shared.',
            icon: GraphUp,
            image: featureImage1,
        },
        {
            title: 'Reduce Major Integrations',
            description: 'No third-party system for marketing, loyalty, or eCommerce.',
            icon: NetworkLeft,
            image: featureImage2,
        },
        {
            title: 'True Partnership',
            description: "No need for massive internal tech support. We're an extension of your team.",
            icon: Heart,
            image: featureImage3,
        },
        {
            title: 'Enterprise Support',
            description: "A solution built for multi-state, multi-location operations.",
            icon: BrightStar,
            image: featureImage4,
        },
        {
            title: 'Holistic Experience',
            description: "An actual all-in-one platform to manage every aspect of your cannabis retail business.",
            icon: TwoPointsCircle,
            image: featureImage5,
        },
        {
            title: 'Flexible payments',
            description: "Seamless payment options for every customer.",
            icon: HandCard,
            image: featureImage6,
        },
        {
            title: 'Custom Development',
            description: "All of your requests will be built or solved. No “one size fits all” mentality.",
            icon: BoxIso,
            image: featureImage7,
        },
    ]

    const ref = useRef(null)
    const container = useRef(null)
    const { scrollY, scrollYProgress } = useScroll({
        target: ref,
        // container: container,
        offset: ["start start", "end end"]
    })
    const boxY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, '100vh']
    );

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })

    const ref2 = useRef(null);
    useEffect(() => {
        const element = ref2.current;

        let ctx = gsap.context(() => {
            // create as many GSAP animations and/or ScrollTriggers here as you want...
            // gsap.to(
            //     ".built-heading",
            //     {
            //         // x: function (index, target, targets) {
            //         //     return -target.offsetWidth + window.innerWidth;
            //         // },
            //         ease: "none",
            //         scrollTrigger: {
            //             trigger: ".built-heading",
            //             pin: true,
            //             // pinSpacing: false,
            //             scrub: true,
            //             start: "top top",
            //             end: "bottom bottom",
            //             markers: true,
            //         }
            //     }
            // );
            document.querySelectorAll('.test').forEach(el => {
                ScrollTrigger.create({
                    trigger: el,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    start: "top 100px",
                    endTrigger: ".test-last",
                    end: "top 100px",
                })
            })
        }); // <- scopes all selector text inside the context to this component (optional, default is document)

        return () => ctx.revert(); // cleanup!
    }, []);

    return (
        <div className="built-section py-20 text-center relative" ref={ref2}>
            <motion.div className="container" zstyle={{ translateY: boxY }} zref={ref}>
                <div className='built-heading'>
                    <div className='t-body-lg lg:t-body-2xl text-neutral-500'>A Completely Tailored, Data-Driven Solution </div>
                    <h2 className='t-heading-2 max-w-[928px] ml-auto mr-auto'><span className="bg-clip-text text-link">Built to Grow</span> and Retain Customers Without Clunky Integrations.</h2>
                </div>
                <div className="relative z-0 grid auto-rows-fr items-center gap-3 mt-20 max-w-[825px] mx-auto">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <div className={(i == 6 ? 'test-last ' : '') + 'test w-full h-full bg-white rounded-[16px] shadow-light-xl text-center lg:text-left p-7 lg:p-20 flex flex-col items-center lg:grid grid-cols-2 gap-7 lg:gap-20 overflow-hidden'} key={feature.title}>
                                <div className={'flex flex-col justify-center items-center lg:items-start gap-2 ' + (i % 2 ? 'lg:order-1' : 'order-0')}>
                                    <Icon color="black" height={36} width={36}></Icon>
                                    <h3 className='t-heading-3 font-bold'>{feature.title}</h3>
                                    <p className='t-body-md text-neutral-500'>{feature.description}</p>
                                </div>
                                {/* <img src="http://unsplash.it/1200/1000?random&gravity=center" alt="" /> */}
                                <Image
                                    src={feature.image}
                                    alt=""
                                    className="mx-auto"
                                    priority
                                />
                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    )
}