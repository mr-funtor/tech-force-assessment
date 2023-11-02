import {BiPhoneCall, BiLogoLinkedinSquare, BiMessageDetail, BiLogoTwitter, BiLogoInstagram, BiLogoFacebook} from "react-icons/bi";
import logo from "../../assets/images/logo.png"

const FooterSection = ()=>{
  return(
    <footer className=" border-t-[1px] border-[rgba(2, 48, 71, 0.10)] pt-5 p-5 flex flex-col justify-center items-center">
      <div className="flex items-center h-24 w-32">
        <img
          src={logo}
          alt="company logo"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row my-3">
        <p className="flex items-center text-[#333] mr-8 mb-5 md:mb-0"><BiPhoneCall className="text-lg mr-2"/> +234 900 900 9000</p>
        <p className="flex text-[#333] items-center"><BiMessageDetail className="text-lg mr-2"/> example@gmail.com</p>
      </div>

      <ul className="list-disc w-full md:w-1/4  flex justify-center md:justify-between text-xs my-5">
        <li className="mr-8 md:mr-0">Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>

      <ul className="flex w-1/5 justify-between">
        <li><BiLogoTwitter/></li>
        <li><BiLogoLinkedinSquare/></li>
        <li><BiLogoInstagram/></li>
        <li><BiLogoFacebook/></li>
      </ul>
    </footer>
  )
}

export default FooterSection