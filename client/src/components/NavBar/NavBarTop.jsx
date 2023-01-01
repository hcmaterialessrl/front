import React from "react";
import instagram from "../../assets/instagram.png";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import telefono from "../../assets/telefono.png";

export default function NavBarTop() {
  return (
    <nav className="flex justify-center lg:justify-end flex-col lg:flex-row flex-wrap items-center h-16 lg:h-8 gap-3 lg:pr-24 bg-[#F1F1F0]">
      <div className="flex justify-center items-center gap-1">
        <a href="https://www.instagram.com/hc_materiales/">
          <img src={instagram} alt="instagram" className="w-4 h-4" />
        </a>
        <p className="text-[14px]">@hugocieri</p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <img src={email} alt="email" className="w-4 h-4" />
        <p className="text-[14px]">hugocieri@yahoo.com.ar</p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <img src={facebook} alt="facebook" className="w-4 h-4" />
        <p className="text-[14px]">hugocieri</p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <img src={telefono} alt="telefono" className="w-4 h-4" />
        <p className="text-[14px]">0236 444-5299</p>
      </div>
    </nav>
  );
}
