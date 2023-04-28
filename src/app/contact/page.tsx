import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/JunHyeongLee92/" },
  { icon: <AiFillInstagram />, url: "https://www.instagram.com/2junehyung/" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="my-2 text-3xl font-bold">Contact Me</h2>
      <p>lhyoup0360@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            className="text-5xl hover:text-yellow-400"
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="my-8 text-3xl font-bold">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
