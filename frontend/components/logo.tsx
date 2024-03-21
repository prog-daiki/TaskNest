import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      alt="Logo"
      height={200}
      src="/logo.png"
      width={200}
    />
  );
};
