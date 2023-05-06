// eslint-disable-next-line import/prefer-default-export
export const CONFIG_API_PATH = {
  CONFIGS_PATH: "v1/public/website-configs",
  CONFIG_PATH: (code: string) => `v1/public/website-configs/${code}`,
};
