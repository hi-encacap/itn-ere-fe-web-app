interface HomeSectionTitleProps {
  title: string;
  subtitle: string;
}

const HomeSectionTitle = ({ title, subtitle }: HomeSectionTitleProps) => (
  <div className="flex flex-col items-center">
    <div className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 ">
      {subtitle}
    </div>
    <h1 className="py-3 text-2xl md:text-4xl">{title}</h1>
    <div className="mx-auto mt-4 flex items-center justify-center space-x-2">
      <div className="h-1 w-10 rounded-lg bg-encacap-main" />
      <div className="h-1 w-10 rounded-lg bg-encacap-main" />
      <div className="h-1 w-10 rounded-lg bg-encacap-main" />
    </div>
  </div>
);

export default HomeSectionTitle;
