import Sidebar from "@/components/ui/Sidebar";
// import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggin = { firstName: "John", lastName: "Doe" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggin.firstName} />
      {children}
    </main>
  );
}
