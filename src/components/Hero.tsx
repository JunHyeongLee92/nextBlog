import Image from "next/image";
import profileImage from "../../public/images/profile.png"
import Link from "next/link";

export default function Hero() {
    return (
        <section className="text-center">
            <Image
                className="mx-auto rounded-full"
                src={profileImage}
                alt="picture of the author"
                width={250}
                height={250}
                priority />
            <h2 className="mt-2 text-3xl font-bold">안녕하세요. 이준형입니다.</h2>
            <h3 className="text-2xl font-semibold">풀스택 개발자를 목표합니다.</h3>
            <p>Next.js 스터디 블로그</p>
            <Link href={'./contact'}>
                <button className="px-4 py-1 mt-2 font-bold bg-yellow-500 rounded-xl">Contact Me</button>
            </Link>
        </section>
    )
}