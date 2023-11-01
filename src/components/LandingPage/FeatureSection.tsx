import {FaConnectdevelop} from "react-icons/fa6"


type crowdFundingType ={
  heading: string,
  icon: React.ReactNode,
  backgroundColor: string,
  description:string
}


const features: crowdFundingType[] = [
  {
   heading: "Choose Project",
   icon: <FaConnectdevelop />,
   backgroundColor: "bg-[#F5EBF1]",
   description:"Choose the Project you'd like to crowdfund in, we have a range of  projects to offer." 
  },
  {
   heading: "Enter Amount",
   icon: <FaConnectdevelop />,
   backgroundColor: "bg-[#F5F0EA]",
   description:"Pick an amount you’d like to crowdfund with, the duration you’d like to invest for and your payment method." 
  },
  {
   heading: "Confirm Transaction",
   icon: <FaConnectdevelop />,
   backgroundColor: "bg-[#EAF3F5]",
   description:"Agree to the terms & conditions and confirms transactions. Thats It, you have successfully Crowdfunded." 
  },
]

const FeatureSection =()=>{
  return(
    <section className=" flex flex-col items-center justify-center px-10 md:px-52 py-10 md:py-20 text-primaryBlue">
        <h6 className="bg-accentBlue text-center text-sm  font-medium py-3 w-40 rounded-sm">What we offer</h6>
        <div className="mt-16 w-full flex flex-col md:flex-row flex-wrap items-center md:justify-center lg:justify-between">
          {
            features.map((step)=>{
              const {heading, icon, description,backgroundColor }= step;
              return(
                <article className="h-52 w-64 flex flex-col items-center mb-10 md:mb-0">
                  <div className={`${backgroundColor} h-12 w-12 rounded-full mb-2 flex items-center justify-center`}>
                    {icon}
                  </div>
                  <h2 className=" text-xl font-medium my-3">{heading}</h2>
                  <p className=" text-center text-sm font-light leading-6">{description}</p>
                </article>
              )
            })
          }
        </div>
      </section>
  )
}

export default FeatureSection