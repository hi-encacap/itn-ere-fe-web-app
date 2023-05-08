import { useRouter } from "next/router";
import { Children, ReactElement, cloneElement, useEffect, useRef } from "react";

interface LayoutHeaderNavbarContainerProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

const LayoutHeaderNavbarContainer = ({
  className,
  children: sidebarItems,
}: LayoutHeaderNavbarContainerProps) => {
  const { pathname } = useRouter();
  const navbarContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbarContainerNode = navbarContainerRef.current;
    const activatedItem = navbarContainerNode?.querySelector<HTMLElement>(`a[href="${pathname}"]`);

    if (!activatedItem) {
      return;
    }

    const containerWidth = navbarContainerNode?.getBoundingClientRect().width;
    const activatedItemWidth = activatedItem?.getBoundingClientRect().width;

    navbarContainerNode?.scrollTo({
      left: activatedItemWidth / 2 - (containerWidth ?? 0) / 2,
    });
  }, [pathname]);

  return (
    <nav ref={navbarContainerRef} className={className}>
      {Children.map(sidebarItems, (child: ReactElement) => {
        const { href } = child.props;
        if (href === "/") {
          return cloneElement(child, { isActive: pathname === href });
        }
        return cloneElement(child, { isActive: pathname.includes(href) });
      })}
    </nav>
  );
};

export default LayoutHeaderNavbarContainer;
