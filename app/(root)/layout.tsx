import MobileBar from "@/components/ui/MobileBar";
import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggin = { firstName: "John", lastName: "Doe" };
  return (
    <main className="flex h-screen w-full font-inter ">
      <Sidebar user={loggin.firstName} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <MobileBar user={loggin.firstName} />
        </div>
        {children}
      </div>
    </main>
  );
}
