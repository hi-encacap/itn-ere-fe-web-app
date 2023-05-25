import { IBaseListQuery } from "@encacap-group/common/dist/base";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/common/dist/re";
import { ProjectDataType } from "@interfaces/dataTypes";
import { sample } from "lodash";
import { getCategoryByCode } from "./categoryService";
import { getHeroImages } from "./configService";

const fakeData: Partial<ProjectDataType>[] = [
  {
    id: 1,
    name: "Công ty TNHH Encacap Group",
  },
  {
    id: 2,
    name: "Dự án thứ hai",
  },
  {
    id: 3,
    name: "Dự án thứ ba",
  },
  {
    id: 4,
    name: "Dự án thứ tư",
  },
  {
    id: 5,
    name: "Dự án thứ năm",
  },
  {
    id: 6,
    name: "Dự án thứ sáu",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getProjects = async (query?: IBaseListQuery) => {
  const images = await getHeroImages();
  const fakeRootCategory = await getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.PROJECT);

  return fakeData.map((item) => ({
    ...item,
    avatar: sample(images),
    category: fakeRootCategory,
  }));
};

const getProjectById = async (id: number) => {
  const images = await getHeroImages();
  const fakeRootCategory = await getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.PROJECT);

  return {
    ...fakeData.find((item) => item.id === id),
    avatar: sample(images),
    category: fakeRootCategory,
  };
};

export { getProjectById, getProjects };
