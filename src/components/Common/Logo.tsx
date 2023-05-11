import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  isPriority?: boolean;
  iShowName?: boolean;
}

const Logo = ({ isPriority = true, iShowName = false }: LogoProps) => (
  <Link href="/" className="header-logo relative flex items-center">
    <div className="relative mt-1 aspect-square h-16 overflow-hidden">
      <Image fill src="/logo.png" alt="Encacap RE Logo" priority={isPriority} sizes="64px" />
    </div>
    {iShowName && (
      <div className="ml-2 uppercase text-encacap-main">
        <div className="ml-px mt-1 text-xs font-semibold">Công ty TNHH xây dựng</div>
        <div className="text-2xl font-bold">An Cường</div>
      </div>
    )}
  </Link>
);

export default Logo;
