import { ICategory } from "@encacap-group/common/dist/re";
import HomeSectionContainer from "../components/SectionContainer";
import HomeSectionTitle from "../components/SectionTitle";
import CategoryAvatar from "./CategoryAvatar";
import HomeCategoryItem from "./Item";

interface HomeCategoryProps {
  categories: ICategory[];
}

const HomeCategory = ({ categories }: HomeCategoryProps) => {
  return (
    <HomeSectionContainer className="px-0">
      <HomeSectionTitle title="Dịch vụ của chúng tôi" subtitle="Mọi thứ bạn cần" />
      {categories.length > 0 && (
        <div className="grid grid-cols-2 gap-y-2 px-2 md:gap-6 lg:grid-cols-4 lg:gap-10 lg:px-0">
          {categories.map((category) => (
            <HomeCategoryItem
              key={category.id}
              title={category.name}
              icon={<CategoryAvatar image={category.avatar} title={category.name} />}
              href={`${category.code}`}
            />
          ))}
        </div>
      )}
    </HomeSectionContainer>
  );
};

export default HomeCategory;
