import CustomButton from "../shared/CustomButton";
import logo from "../../assets/images/logo.png"

const Navbar = ()=>{
  return(
    <nav className="fixed top-0 h-20 w-full flex justify-between items-center px-10 md:px-32 bg-white z-20">
      <div className="flex items-center h-10 w-32 ">
        <img
          src={logo}
          alt="company logo"
          className="h-full w-full object-cover"
        />
      </div>
      <CustomButton
        buttonText="Sign Up"
        type="button"
        containerStyle={"bg-white border-[0.9px] border-primaryBlue hidden md:block"}
        textStyle="text-primaryBlue"
      />
    </nav>
  )
}

export default Navbar