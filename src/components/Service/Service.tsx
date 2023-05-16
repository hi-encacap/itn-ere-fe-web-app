import HomeServiceListItem from "@components/Home/Service/ListItem";
import { ProductDataType, ServiceDataType } from "@interfaces/dataTypes";
import ServiceSidebar from "./ServiceSidebar";

interface ServiceProps {
  services: ServiceDataType[];
  suggestedProducts: ProductDataType[];
}

const Service = ({ services, suggestedProducts }: ServiceProps) => (
  <>
    <div className="grid gap-4 md:col-span-2 md:grid-cols-3 md:gap-6 lg:col-span-3 lg:gap-10">
      {services.map((item) => (
        <HomeServiceListItem data={item} key={item.id} isHighlighFirst={false} />
      ))}
    </div>
    <ServiceSidebar suggestedProducts={suggestedProducts} />
  </>
);

export default Service;
