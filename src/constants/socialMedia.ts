import { FaInstagram, FaTiktok, FaDiscord, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import type { SocialMedia } from "@/types";

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaInstagram,
    link: "https://www.instagram.com/kiraamicalromance_",
  },
  {
    SocialMediaIcon: FaGithub,
    link: "https://github.com/HaicelRamadhansyah",
  },
  {
    SocialMediaIcon: FaLinkedin,
    link: "https://linkedin.com/in/username-kamu",
  },
  {
    SocialMediaIcon: FaDiscord,
    link: "https://discord.com/users/865796356241096704",
  },
  {
    SocialMediaIcon: FaTiktok,
    link: "https://www.tiktok.com/@lupadaharustau?_r=1&_t=ZS-98K7ej6C10m",
  },
];

export const sharedSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
];
