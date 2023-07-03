import { ACB_CONFIG_CODE_ENUM } from "@encacap-group/common/dist/re";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import LayoutIconFacebook from "../Icon/Facebook";

interface LayoutHeaderSocialProps {
  config: SiteConfigDataType;
  className?: string;
  wrapperClassName?: string;
}

const LayoutHeaderSocial = ({ config, className, wrapperClassName }: LayoutHeaderSocialProps) => {
  if (_.isEmpty(config[ACB_CONFIG_CODE_ENUM.ADDRESS])) {
    return null;
  }

  return (
    <div className={twMerge("space-x-2", className)}>
      {Boolean(config[ACB_CONFIG_CODE_ENUM.ADDRESS]) && (
        <LayoutIconFacebook
          href={config[ACB_CONFIG_CODE_ENUM.ADDRESS] as string}
          className={wrapperClassName}
        />
      )}
    </div>
  );
};

export default LayoutHeaderSocial;
