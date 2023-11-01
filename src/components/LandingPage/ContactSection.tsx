import CustomButton from "../shared/CustomButton";
import CustomInput from "../shared/CustomInput";
import CustomTextArea from "../shared/CustomTextArea";

const ContactSection = ()=>{
  return(
    <section 
      className="bg-accentBlue py-20 px-10"
    >
      <form 
        className="w-full md:w-[30rem] flex flex-col  items-center mx-auto"
      >
        <div className="my-7 flex flex-col items-center">
          <h1 className="[font-weight: 100] text-xl text-PrimaryBlue">Contact Us</h1>
        </div>

        <CustomInput
          labeltext="Name"
          labelstyle="text-xs"
          placeholder="Type name"
          containerstyle="w-full mb-5"
        />
        <CustomInput
          labeltext="Email Address"
          labelstyle="text-xs"
          placeholder="Type Email"
          containerstyle="w-full mb-5"
        />
        <CustomTextArea
          labeltext="Message"
          name="workAchievement"
        />
        
        <CustomButton
          buttonText="Send Message"
          type="button"
          containerStyle="mt-10 w-40"
        />
      </form>
    </section>
  )
}

export default ContactSection;