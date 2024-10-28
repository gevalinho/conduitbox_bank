import MobileBar from "@/components/ui/MobileBar";
import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggin = { firstName: "Geval", lastName: "Egbe" };
  return (
    <main className="flex h-screen w-full font-inter ">
      <Sidebar user={loggin} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <MobileBar user={loggin} />
        </div>
        {children}
      </div>
    </main>
  );
}
