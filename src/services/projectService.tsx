import { IBaseListQuery } from "@encacap-group/types/dist/base";
import { ProjectDataType } from "@interfaces/dataTypes";
import { sample } from "lodash";
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

  return fakeData.map((item) => ({
    ...item,
    avatar: sample(images),
  }));
};

export { getProjects };
