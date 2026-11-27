import React from "react";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244d3f] text-primary-content mt-15 pt-10 pb-5">
      <aside>
        <div className="text-4xl text-white">
          <span className="font-bold text-white">Keen</span>Keeper
        </div>
        <p className="mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </aside>
      <nav>
        <p className="font-semibold text-lg">Social Links</p>
        <div className="grid grid-flow-col gap-4">
          <FiTwitter></FiTwitter>
          <FiFacebook></FiFacebook>
          <FiYoutube></FiYoutube>
        </div>
      </nav>

      
      <div className="w-full max-w-5xl mx-auto flex justify-between">
        <p>Copyright © 2026 - All right reserved</p>

        <div className="flex gap-3">
          <p>Provacy Poilicy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
