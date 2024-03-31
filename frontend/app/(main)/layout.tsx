import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import { Navigation } from "@/app/(main)/_components/navigation";

const HomeLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full flex">
        <Navigation />
        {children}
      </div>
    </Suspense>
  );
};

export default HomeLayout;
