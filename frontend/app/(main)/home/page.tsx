import Image from "next/image";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

const HomePage = async () => {
  const session = await auth();

  return (
    <div className="w-full">
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image
          src="/task_empty.png"
          height="300"
          width="300"
          alt="Empty"
        />
        <h2 className="text-lg font-medium">
          TaskNestへようこそ
        </h2>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>

        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          ボードを作成する
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
