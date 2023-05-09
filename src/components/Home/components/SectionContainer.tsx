import { ReactNode } from "react";

interface HomeSectionContainerProps {
  children: ReactNode;
}

const HomeSectionContainer = ({ children }: HomeSectionContainerProps) => (
  <section className="flex flex-col space-y-5 py-12 md:space-y-16 md:py-20 lg:px-10 xl:px-48">
    {children}
  </section>
);

export default HomeSectionContainer;
