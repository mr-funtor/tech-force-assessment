import CustomButton from "../shared/CustomButton";
import books from "../../assets/images/books.jpg"

const HeroSection = ()=>{
  return(
    <section className="mt-20 relative h-[32rem] md:h-[33rem] px-10 md:px-32 py-10 lg:py-20 flex items-center bg-purple-200">
      <div className="absolute top-0 left-0 h-full w-full  bg-yellow-200">
        <div className="absolute [background:linear-gradient(0deg,rgba(0,0,0,0.40)0%,rgba(0,0,0,0.40)100%)] top-0 h-full w-full"></div>
        <img 
          src={books} 
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className={`w-[90%] md:w-[47%] z-10 h-full`}>
        <h1 className="text-3xl font-medium w-[85%] text-white leading-[45px]">Your All-in-One Accounting Solution</h1>
        <h3 className="text-md text-white w-full mt-4 leading-7">Our comprehensive accounting software simplifies financial management for small businesses, offering everything from bookkeeping and invoicing to payroll and tax preparation, all in one user-friendly platform.</h3>
        <CustomButton
          buttonText="Sign Up"
          type="button"
          containerStyle="mt-16 w-40 !bg-primaryBlue"
          textStyle="text-white"
        />
      </div>
    </section>
  )
}

export default HeroSection;