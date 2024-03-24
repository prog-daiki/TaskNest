import Image from "next/image";

import { LoginModal } from "@/app/(marketing)/_components/login-modal";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <>
      <div className="max-w-md sm:max-w-xl mx-auto bg-slate-0">
        <div className="pt-32 flex justify-center mb-12 px-4">
          <div className="flex flex-col justify-center items-center gap-12">
            <Logo />
            <LoginModal />
            <div className="space-y-8">
              <p className="text-md tracking-wide text-[#030A12CF] leading-9 font-light">
                TaskNestとは、自身のタスクを整理し、管理することができるWebサービスです。
              </p>
              <p className="text-md tracking-wide text-[#030A12CF] leading-9">
                ここでは自分の抱えているタスクを整理して、管理することができます。
                タスクを一箇所に集めて管理する場所（巣）になれるようにこの名前をつけました。
                巣は安全で整理された場所であり、そこにあるものを保護します。
                同様に、TaskNestはユーザーのタスクを整理し、効率的に管理することで、生産性を高める手助けをする。
                そんな思いを込めて作ったWebサービスです。
              </p>
              <p className="text-md tracking-wide text-[#030A12CF] leading-9">
                <span className="border-b-2">
                  TaskNestでできること→
                </span>
              </p>
            </div>
            <div className="border-2 px-8 pt-8 sm:pt-0 w-full rounded-3xl flex flex-col sm:flex-row sm:items-center items-start justify-around">
              <div className="flex flex-col gap-4">
                <p className="text-md">
                  タスクを管理して
                  <br />
                  生産性を高めましょう。
                </p>
                <LoginModal />
              </div>
              <div className="ml-auto">
                <Image
                  alt="task"
                  height={250}
                  src="/task_girl.png"
                  width={250}
                />
              </div>
            </div>
            <div>
              <p className=" text-muted-foreground">
                daiが運営中
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
