import { Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="c-space mt-32 pt-7 pb-3 border-t border-nka--black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-nka--white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <Github color="#ffffff" />
        </div>
        <div className="social-icon">
          <Linkedin color="#ffffff" />
        </div>
        <div className="social-icon">
          <Instagram color="#ffffff" />
        </div>
      </div>

      <p className="text-nka--white-500">
        © {new Date().getFullYear()} Narek Aleksanyan. All rights reserved.
      </p>
    </footer>
  );
};
