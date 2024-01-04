import Image from 'next/image'
import { motion } from "framer-motion"

export default function AllYouNeed() {
    return (
      <div className="bg-color-tile lg:py-20 bg-[url('/images/bg_fluid_lines_white.png')] bg-contain bg-no-repeat bg-top">
        <div className="container py-20">
          <div className="max-w-[653px] mx-auto text-center pb-[20px]">
            <h2 className="t-heading-1-lg text-white text-center px-[30px] drop-shadow-1">All You Need In One Place</h2>
            <p className="t-body-lg text-white !leading-[1.4]"><strong>Yorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
          <div className="max-w-[1060px] mx-auto text-center hidden lg:block">
            <div class="relative">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "200px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[180px] lg:left-[180px] xl:left-[200px] lg:w-[160px] xl:w-[200px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 rounded-se-[50px]"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "130px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[180px] lg:left-[630px] xl:left-[730px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[55px] z-[9]'>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Point of Sale</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.svg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'></div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>E-Commerce</span>
                    <Image
                      src="/images/all_you_need/e_commerce.svg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Marketing & Loyalty</span>
                    <Image
                      src="/images/all_you_need/marketing_loyalty.svg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "130px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[180px] lg:right-[630px] xl:right-[730px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "195px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[180px] lg:right-[340px] xl:right-[400px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "195px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[180px] lg:left-[560px] xl:left-[665px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "0", height: "200px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-20px] lg:right-[333px] xl:right-[394px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0"
              />
              <div className='relative w-full flex pt-[25px] z-[9]'>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Data & Business <br/>Intelligence</span>
                    <Image
                      src="/images/all_you_need/data_business.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Inventory <br/>Management</span>
                    <Image
                      src="/images/all_you_need/inventory_management.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}
                  >
                    <Image
                      src="/images/all_you_need/connector.svg"
                      alt=""
                      width={40}
                      height={40}
                      style={{ marginTop: "83px" }}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Customer <br/>Management</span>
                    <Image
                      src="/images/all_you_need/customer_management.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "200px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-20px] lg:right-[110px] xl:right-[130px] h-[210px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-t-0 rounded-br-[50px]"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "130px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[180px] lg:right-[400px] xl:right-[465px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "0", height: "135px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-20px] lg:right-[555px] xl:right-[660px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "130px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[180px] lg:right-[625px] xl:right-[730px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[55px] z-[9]'>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Delivery</span>
                    <Image
                      src="/images/all_you_need/delivery.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Integrations</span>
                    <Image
                      src="/images/all_you_need/integrations.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Discount Engine</span>
                    <Image
                      src="/images/all_you_need/discount_engine.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'></div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "0", height: "135px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-20px] lg:left-[108px] xl:left-[132px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "200px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[185px] lg:left-[135px] xl:left-[200px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "195px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[185px] lg:left-[340px] xl:left-[400px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "130px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[185px] lg:left-[620px] xl:left-[730px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "0", height: "205px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-20px] lg:left-[333px] xl:left-[394px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0"
              />
              <div className='relative w-full flex pt-[30px] z-[9]'>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Integrated <br/>Payments</span>
                    <Image
                      src="/images/all_you_need/integrated_payments.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}
                  >
                    <Image
                      src="/images/all_you_need/connector.svg"
                      alt=""
                      width={40}
                      height={40}
                      style={{ marginTop: "83px" }}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>In-Store Screens</span>
                    <Image
                      src="/images/all_you_need/in_store_screens.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
                <div className='w-[25%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "20px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Distribution & <br/>Logistics</span>
                    <Image
                      src="/images/all_you_need/distribution_logistics.svg"
                      alt=""
                      width={165}
                      height={165}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[310px] mx-auto text-center lg:hidden">
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "70px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[110px] left-[120px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[30px] z-[9]'>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Point of Sale</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>E-Commerce</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: 0, height: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-10px] right-[75px] border-[7px] border-[#74a4a3] border-solid border-t-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "70px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[130px] right-[120px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[30px] z-[9]'>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Marketing & Loyalty</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Data & Business <br/>Intelligence</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: 0, height: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-10px] left-[75px] border-[7px] border-[#74a4a3] border-solid border-t-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "70px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[130px] left-[120px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[30px] z-[9]'>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Inventory <br/>Management</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Customer <br/>Management</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: 0, height: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-10px] right-[75px] border-[7px] border-[#74a4a3] border-solid border-t-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "70px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[110px] right-[120px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[30px] z-[9]'>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Delivery</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Integrations</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: 0, height: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-10px] left-[75px] border-[7px] border-[#74a4a3] border-solid border-t-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "70px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[130px] left-[120px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[30px] z-[9]'>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Discount Engine</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Integrated <br/>Payments</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="relative">
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: 0, height: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[-10px] right-[75px] border-[7px] border-[#74a4a3] border-solid border-t-0 border-b-0 border-r-0"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: "70px", height: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0 }}
                className="absolute top-[130px] right-[120px] border-[7px] border-[#74a4a3] border-solid border-l-0 border-b-0 border-r-0"
              />
              <div className='relative w-full flex pt-[30px] z-[9]'>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>In-Store Screens</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
                <div className='w-[50%]'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", gap: "15px" }}
                  >
                    <span className='t-heading-6 lg:!leading-[26px] text-white opacity-90'>Distribution & <br/>Logistics</span>
                    <Image
                      src="/images/all_you_need/point_of_sale.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[105px] h-[105px] lg:w-[165px] lg:h-[165px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }