import MobileBar from "@/components/ui/MobileBar";
import Sidebar from "@/components/ui/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggin = await getLoggedInUser();
  if (!loggin) redirect("/sign-in");
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
