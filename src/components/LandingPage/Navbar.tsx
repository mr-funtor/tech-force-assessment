import CustomButton from "../shared/CustomButton"

const Navbar = ()=>{
  return(
    <nav className="fixed top-0 h-20 w-full flex justify-between items-center px-10 md:px-32 bg-white z-20">
      <div className="flex items-center">
        <p className="ml-2 text-primaryBlue font-medium leading-4">
          A <span className="block">Logo</span>
        </p>
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