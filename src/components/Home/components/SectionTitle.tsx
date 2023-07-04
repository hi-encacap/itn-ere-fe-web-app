import SectionTitleLine from "./SectionTitleLine";

interface HomeSectionTitleProps {
  title: string;
  subtitle: string;
  lineClassName?: string;
}

const HomeSectionTitle = ({ title, subtitle, lineClassName }: HomeSectionTitleProps) => (
  <div className="flex flex-col items-center">
    <div className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 ">
      {subtitle}
    </div>
    <h1 className="py-2 text-center text-2xl md:py-3 md:text-4xl">{title}</h1>
    <SectionTitleLine className={lineClassName} />
  </div>
);

export default HomeSectionTitle;
