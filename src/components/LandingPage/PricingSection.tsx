import CustomButton from "../shared/CustomButton"

const PricingSection = ()=>{
  return(
    <section className="py-14 flex flex-col items-center px-10 md:px-36">
        <h1 className="text-3xl text-primaryBlue font-medium">Pricing</h1>

        <div className="w-full mt-16 flex flex-col justify-center  md:flex-row flex-wrap items-center md:justify-center lg:justify-between">
            <article
                className="w-80 lg:w-60 mx-2 rounded-xl overflow-hidden mb-10 shadow-2xl"
            >
                <header className=" bg-cecyPrimaryColor py-7 px-6 h-32 bg-primaryBlue text-white text-center">
                    <p className="text-lg font-bold ml-2">Single Package</p>
                    <p className="font-medium mt-2"> NGN <span className="text-3xl">5000</span></p>
                </header>
                <footer className="h-[355px] text-white px-6 py-7 flex flex-col items-center justify-between">
                    <div>
                        <p className="mb-2 font-bold text-black text-center">This package allows provides you with the following</p>
                    </div>

                    <CustomButton
                        type="button"
                        buttonText="Choose"
                    />
                </footer>
            </article>

            <article
                className="w-80 lg:w-60 mx-2 rounded-xl overflow-hidden mb-10 shadow-2xl"
            >
                <header className=" bg-cecyPrimaryColor py-7 px-6 h-32 bg-primaryBlue text-white text-center">
                    <p className="text-lg font-bold ml-2">Single Package</p>
                    <p className="font-medium mt-2"> NGN <span className="text-3xl">5000</span></p>
                </header>
                <footer className="h-[355px] text-white px-6 py-7 flex flex-col items-center justify-between">
                    <div>
                        <p className="mb-2 font-bold text-black text-center">This package allows provides you with the following</p>
                    </div>

                    <CustomButton
                        type="button"
                        buttonText="Choose"
                    />
                </footer>
            </article>

            <article
                className=" w-80 lg:w-60 mx-2 rounded-xl overflow-hidden mb-10 shadow-2xl"
            >
                <header className=" bg-cecyPrimaryColor py-7 px-6 h-32 bg-primaryBlue text-white text-center">
                    <p className="text-lg font-bold ml-2">Single Package</p>
                    <p className="font-medium mt-2"> NGN <span className="text-3xl">5000</span></p>
                </header>
                <footer className="h-[355px] text-white px-6 py-7 flex flex-col items-center justify-between">
                    <div>
                        <p className="mb-2 font-bold text-black text-center">This package allows provides you with the following</p>
                    </div>

                    <CustomButton
                        type="button"
                        buttonText="Choose"
                    />
                </footer>
            </article>
        </div>
    </section>  
  )
}

export default PricingSection