import { auth } from "@/auth";
import { Footer } from "@/components/footer";
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
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
