import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full  bg-slate-50">
      <div className="max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto py-16 px-8 flex justify-between flex-col gap-8 sm:flex-row">
        <div className="flex flex-col gap-8">
          <Image
            alt="Logo"
            height={125}
            src="/logo.png"
            width={125}
          />
          <p className="text-muted-foreground">
            自身のタスクを整理して
            <br /> 管理することができるWebサービス
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-muted-foreground">
          <Button
            className="text-md"
            size="sm"
            variant="ghost"
          >
            ホーム
          </Button>
          <Button
            className="text-md"
            size="sm"
            variant="ghost"
          >
            規約とポリシー
          </Button>
          <Button
            className="text-md"
            size="sm"
            variant="ghost"
          >
            使い方
          </Button>
          <Button
            className="text-md"
            size="sm"
            variant="ghost"
          >
            サポート
          </Button>
        </div>
      </div>
    </footer>
  );
};
