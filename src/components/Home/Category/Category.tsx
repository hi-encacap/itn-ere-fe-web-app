import { ACBUILDING_CATEGORY_CODE_ENUM, ICategory, IPost } from "@encacap-group/common/dist/re";
import { useMemo } from "react";
import HomeListItemSkeleton from "../Service/ListItemSkeleton";
import HomeSectionContainer from "../components/SectionContainer";
import HomeSectionTitle from "../components/SectionTitle";
import CategoryAvatar from "./CategoryAvatar";
import HomeCategoryItem from "./Item";

interface HomeCategoryProps {
  services: IPost[];
  productCategory: ICategory;
}

const HomeCategory = ({ services, productCategory }: HomeCategoryProps) => {
  const housePost = useMemo(
    () => services.find((item) => item.code === ACBUILDING_CATEGORY_CODE_ENUM.HOUSE),
    [services]
  );

  const houseScratchPost = useMemo(
    () => services.find((item) => item.code === ACBUILDING_CATEGORY_CODE_ENUM.HOUSE_SCRATCH),
    [services]
  );

  const foamConstructionPost = useMemo(
    () => services.find((item) => item.code === ACBUILDING_CATEGORY_CODE_ENUM.CONSTRUCTION_FOAM),
    [services]
  );

  return (
    <HomeSectionContainer className="px-0">
      <HomeSectionTitle title="Dịch vụ của chúng tôi" subtitle="Mọi thứ bạn cần" />
      <div className="grid grid-cols-2 gap-y-2 px-2 md:gap-6 lg:grid-cols-4 lg:gap-10 lg:px-0">
        {housePost ? (
          <HomeCategoryItem
            title="Xây dựng nhà dân dụng"
            icon={<CategoryAvatar image={housePost.avatar} title={housePost.title} />}
            href={`${housePost.category.code}/${housePost.code}/${housePost.id}`}
          />
        ) : (
          <HomeListItemSkeleton />
        )}
        {houseScratchPost && (
          <HomeCategoryItem
            title="Thi công nhà thép tiền chế"
            icon={<CategoryAvatar image={houseScratchPost.avatar} title={houseScratchPost.title} />}
            href={`${houseScratchPost.category.code}/${houseScratchPost.code}/${houseScratchPost.id}`}
          />
        )}
        {foamConstructionPost && (
          <HomeCategoryItem
            title="Thi công xốp cách âm cách nhiệt"
            icon={<CategoryAvatar image={foamConstructionPost.avatar} title={foamConstructionPost.title} />}
            href={`${foamConstructionPost.category.code}/${foamConstructionPost.code}/${foamConstructionPost.id}`}
          />
        )}
        {productCategory && (
          <HomeCategoryItem
            title="Phân phối sản phẩm gỗ, nhựa"
            icon={<CategoryAvatar image={productCategory.thumbnail} title={productCategory.name} />}
            href={`${productCategory.code}`}
          />
        )}
      </div>
    </HomeSectionContainer>
  );
};

export default HomeCategory;
