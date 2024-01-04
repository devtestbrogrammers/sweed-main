import '@/styles/globals.css'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Lato, Poppins } from 'next/font/google'
import { HubspotProvider } from 'next-hubspot';
import Script from 'next/script';
import $ from 'jquery';

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-lato',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins'
})

function onReadyCustomFunc() {
  const swiperEl = document.querySelector('swiper-container');
  swiperEl.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.log(delta);
    if(delta == 1) {
      $(".custom-arrow-swiper > div").removeClass("active");
      $(".custom-arrow-swiper > .down").addClass("active");
    }
    else {
      $(".custom-arrow-swiper > div").removeClass("active");
      $(".custom-arrow-swiper > .up").addClass("active");
    }
  });
}
export default function App({ Component, pageProps }) {
  return (
    <HubspotProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script 
        src="/js/custom.js" 
        strategy="lazyOnload"
        onReady={onReadyCustomFunc}
      />

      <main className={`${lato.variable} ${poppins.variable} font-lato antialiased overflow-hidden bg-diamonds flex flex-col min-h-screen`}>
        <Header />
        <div className='flex-grow'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </HubspotProvider>
  )
}
