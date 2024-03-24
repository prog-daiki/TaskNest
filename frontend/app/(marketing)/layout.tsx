import { auth } from "@/auth";
import { redirect } from "next/navigation";

const MarketingLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();
  if (session) {
    redirect("/home");
  }
  return <div>{children}</div>;
};

export default MarketingLayout;
