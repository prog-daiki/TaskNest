import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-[#46689e] rounded-2xl text-md px-8 py-4 hover:bg-[#46689e]/90 text-white transition-all w-32">
        はじめる
      </DialogTrigger>
      <DialogContent className="p-16">
        <DialogHeader>
          <DialogTitle className="flex justify-center mb-8">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </DialogTitle>
          <DialogDescription className="text-md px-12">
            自身のタスクを整理して
            <br /> 管理することができるWebサービス
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 mt-4">
          <Button className="rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 w-72 text-md">
            <FcGoogle className="w-6 h-6 mr-2" />
            Googleアカウントでログイン
          </Button>
          <Button className="rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 w-72 text-md">
            <FaGithub className="w-6 h-6 mr-2" />
            Githubアカウントでログイン
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
