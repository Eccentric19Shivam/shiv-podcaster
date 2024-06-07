import LeftSidebar from "@/components/LeftSidebar";
import Mobilenav from "@/components/Mobilenav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex bg-black-3">
            <LeftSidebar/>

            <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flecx w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden">
                  <Image 
                    src="/icons/logo.svg"
                    width={30}
                    height={30}
                    alt="menu icon"
                    />
                  <Mobilenav/>
                </div>
                <div className="flex flex-col md:pb-14">
                  Toaster (notificatiion popups)
                  {children}
                </div>
              </div>
            </section>
            
            <RightSidebar/>
        </main>
    </div>
  );
}