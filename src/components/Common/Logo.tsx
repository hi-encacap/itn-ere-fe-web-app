import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  isPriority?: boolean;
}

const Logo = ({ isPriority = true }: LogoProps) => (
  <Link href="/" className="header-logo relative flex items-center">
    <div className="relative mt-1 aspect-square h-16 overflow-hidden">
      <Image fill src="/logo.png" alt="Encacap RE Logo" priority={isPriority} sizes="64px" />
    </div>
  </Link>
);

export default Logo;
