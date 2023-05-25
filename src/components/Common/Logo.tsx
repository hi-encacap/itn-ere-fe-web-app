import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  isPriority?: boolean;
  isShowName?: boolean;
}

const Logo = ({ isPriority = true, isShowName = false }: LogoProps) => (
  <Link href="/" className="flex items-center space-x-4">
    <div
      className={twMerge(
        "p-[1.5px]",
        isShowName && "h-14 w-16 bg-gradient-to-b from-orange-500 via-yellow-300 to-orange-500"
      )}
    >
      <div
        className={twMerge(
          "relative flex h-full w-full items-center justify-center overflow-hidden",
          isShowName && "bg-white"
        )}
      >
        <div className={twMerge("relative h-14 w-14", isShowName && "h-12 w-12")}>
          <Image fill src="/logo-center.png" alt="Encacap RE Logo" priority={isPriority} sizes="64px" />
        </div>
      </div>
    </div>
    {isShowName && (
      <div className="ml-2 pt-0.5 uppercase text-encacap-main">
        <div className="ml-px mt-0.5 bg-gradient-to-b from-orange-500 via-yellow-300 to-orange-500 bg-clip-text text-xs font-semibold text-transparent">
          Công ty TNHH xây dựng
        </div>
        <div className="relative">
          <div className="mt-0.5 bg-gradient-to-b from-orange-600 via-yellow-300 to-orange-600 bg-clip-text text-center text-2xl font-bold text-transparent">
            An Cường
          </div>
        </div>
      </div>
    )}
  </Link>
);

export default Logo;
