import { auth } from "@/auth";
import { redirect } from "next/navigation";

const HomeLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return <div>{children}</div>;
};

export default HomeLayout;
