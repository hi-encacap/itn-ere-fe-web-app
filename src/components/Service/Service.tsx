import HomeServiceListItem from "@components/Home/Service/ListItem";
import { IPost } from "@encacap-group/common/dist/re";
import ServiceSidebar from "./ServiceSidebar";

interface ServiceProps {
  services: IPost[];
  suggestedProducts: IPost[];
}

const Service = ({ services, suggestedProducts }: ServiceProps) => (
  <>
    <div className="md:col-span-2 lg:col-span-3">
      <div className="grid gap-4 md:grid-cols-3 md:gap-6 lg:gap-10">
        {services.map((item) => (
          <HomeServiceListItem data={item} key={item.id} isHighlighFirst={false} />
        ))}
      </div>
    </div>
    <ServiceSidebar suggestedProducts={suggestedProducts} />
  </>
);

export default Service;
