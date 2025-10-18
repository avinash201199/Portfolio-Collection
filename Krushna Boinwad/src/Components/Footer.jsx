import React from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/krushna-boinwad-8a5a72275/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Krushna-a",
      label: "GitHub",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/krushnaa_a/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-wrap justify-between gap-y-8 md:gap-y-0">
          {/* Brand */}
          <div className="flex-1 min-w-[200px] md:flex-none">
            <div className="mb-4">
              <div className="w-24 mb-2 ">
                <img src="/modernK.png" alt="" className="w-[300px] " />
              </div>
              <h3 className="text-xl font-bold text-white">Krushna Boinwad</h3>
              <p className="text-gray-400 text-sm">
                Full Stack Developer & Designer
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[120px] md:flex-none">
            <h4 className="text-cyan-400 font-semibold mb-3 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex-1 min-w-[180px] md:flex-none">
            <h4 className="text-cyan-400 font-semibold mb-3 text-sm tracking-wider uppercase">
              Get In Touch
            </h4>
            <a
              href="mailto:nikam.vedant05@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200 text-sm"
            >
              <Mail className="w-4 h-4 text-red-500" />
              krushnaboinwad70@gmail.com
            </a>
          </div>

          {/* Follow Me */}
          <div className="flex-1 min-w-[180px] md:flex-none">
            <h4 className="text-cyan-400 font-semibold mb-3 text-sm tracking-wider uppercase">
              Follow Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          © 2025 Krushna Boinwad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
