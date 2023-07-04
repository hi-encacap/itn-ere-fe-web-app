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

  return (
    <nav ref={navbarContainerRef} className={className}>
      {Children.map(sidebarItems, (child: ReactElement) => {
        const { href } = child.props;
        if (href === "/") {
          return cloneElement(child, { isActive: asPath === href });
        }
        return cloneElement(child, { isActive: asPath.startsWith(href) });
      })}
    </nav>
  );
};

export default LayoutHeaderNavbarContainer;
