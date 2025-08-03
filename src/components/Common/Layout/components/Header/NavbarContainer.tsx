import { useRouter } from "next/router";
import { Children, ReactElement, ReactNode, cloneElement, isValidElement, useEffect, useRef } from "react";

interface LayoutHeaderNavbarContainerProps {
  className?: string;
  children: ReactNode;
}

const LayoutHeaderNavbarContainer = ({
  className,
  children: sidebarItems,
}: LayoutHeaderNavbarContainerProps) => {
  const { asPath } = useRouter();
  const navbarContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbarContainerNode = navbarContainerRef.current;
    const activatedItem = navbarContainerNode?.querySelector<HTMLElement>(`a[href="${asPath}"]`);

    if (!activatedItem) {
      return;
    }

    const containerWidth = navbarContainerNode?.getBoundingClientRect().width;
    const activatedItemWidth = activatedItem?.getBoundingClientRect().width;

    navbarContainerNode?.scrollTo({
      left: activatedItemWidth / 2 - (containerWidth ?? 0) / 2,
    });
  }, [asPath]);

  if (!sidebarItems || !Array.isArray(sidebarItems)) {
    return null;
  }

  return (
    <nav ref={navbarContainerRef} className={className}>
      {Children.map(sidebarItems, (child: ReactElement) => {
        if (!isValidElement(child)) {
          return null;
        }

        const { href } = child.props as Record<string, string>;
        if (href === "/") {
          return cloneElement(child, { isActive: asPath === href } as Record<string, boolean>);
        }
        return cloneElement(child, { isActive: asPath.startsWith(href) } as Record<string, boolean>);
      })}
    </nav>
  );
};

export default LayoutHeaderNavbarContainer;
