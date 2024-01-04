import Link from "next/link"
import { useHubspotForm } from 'next-hubspot';

export default function ScheduleADemo() {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '7260254',
        formId: 'e341b340-bdbd-41a1-8056-8b78da68cfff',
        target: '#hs-form'
    });

    return (
        <main>
            <div className="relative z-0">
                <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-color-tile -z-10"></div>
                <div className="lg:container">
                    <div className="lg:grid grid-cols-2 gap-40">
                        <div className="container lg:max-w-none lg:px-0">
                            <div className="py-20">
                                <h1 className="t-heading-1 mb-10 text-center">Schedule a <span className="bg-color-tile bg-clip-text text-transparent">Demo</span></h1>
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

            <div className="bg-color-tile py-20 min-h-screen flex items-center text-white text-center">
                <div className="container">
                    <div className="flex flex-col gap-8 items-center">
                        <div className="t-heading-2">Sweed's Commitment</div>
                        <p className='t-body-2xl'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                        <Link href="/schedule-a-demo" className="btn btn-secondary-solid">Schedule a Demo</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}