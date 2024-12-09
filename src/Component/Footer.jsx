import logos from "../assets/Logos.webp"
import niger from "../assets/Niger.svg"
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <div className="pl-[2rem]">
      <img className="w-[5rem]" src={logos} alt="" />
      <img className="w-[1.5rem] mt-5" src={niger} alt="" />
      <p className="font-bold text-1xl">EN</p>
      <div className="">
        <div className="flex justify-center items-center gap-[19rem]">
          <div className="">
            <p className="font-bold text-xl">Bolt</p>
            <p>Rides</p>
            <p>Food delivery</p>
            <p>Grocery delivery</p>
            <p>Scooters</p>
            <p>Car-sharing</p>
            <p>Business</p>
            <p>Airports</p>
            <p>Cities</p>
          </div>
          <div className="">
            <p className="font-bold text-xl">Bolt</p>
            <p>Rides</p>
            <p>Food delivery</p>
            <p>Grocery delivery</p>
            <p>Scooters</p>
            <p>Car-sharing</p>
            <p>Business</p>
            <p>Airports</p>
            <p>Cities</p>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <p className="font-bold text-xl">Company</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Sustainability at Bolt</p>
            <p>Press</p>
            <p>Blog</p>
            <p>Brand guidelines</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-5 gap-[1rem] ">
        <FaFacebook className="w-[2rem]" />
        <BsTwitterX className="w-[1rem]" />
        <FaInstagram className="w-[1rem]" />
        <SiLinkedin className="w-[1rem]" />
        <SiTiktok className="w-[1rem]" />
        <div className="flex flex-col gap-[0.5rem] ">
          <button className="px-8 py-2 bg-slate-200 text-white rounded-full">
            Get the Bolt app{" "}
          </button>
          <button className=" px-8 py-2 bg-slate-200 text-white rounded-full">
            {" "}
            Get the Bolt app{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-[1rem]">
        <p>Suppliers</p>
        <p>Terms & Conditions</p>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Security</p>
      </div>
      <p className="">© 2024 Bolt Technology OÜ</p>
    </div>
  );
}

export default Footer
