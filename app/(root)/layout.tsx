import MobileBar from "@/components/ui/MobileBar";
import Sidebar from "@/components/ui/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedInUser = await getLoggedInUser();
  if (!loggedInUser) redirect("/sign-in");
  return (
    <main className="flex h-screen w-full font-inter ">
      <Sidebar user={loggedInUser} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <MobileBar user={loggedInUser} />
        </div>
        {children}
      </div>
    </main>
  );
}
