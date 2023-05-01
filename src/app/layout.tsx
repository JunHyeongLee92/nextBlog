import "./globals.css";
import { Open_Sans, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "테이스팅북",
    template: "테이스팅북 | %s",
  },
  description: "와인 & 위스키 다양한 술을 알아가는 곳",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full min-h-screen mx-auto max-w-screen-2xl">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
