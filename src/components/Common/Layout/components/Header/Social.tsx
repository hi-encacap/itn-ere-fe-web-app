import { SiteConfigDataType } from "@interfaces/dataTypes";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import LayoutIconFacebook from "../Icon/Facebook";
import LayoutIconYoutube from "../Icon/Youtube";

interface LayoutHeaderSocialProps {
  config: SiteConfigDataType;
  className?: string;
  wrapperClassName?: string;
}

const LayoutHeaderSocial = ({ config, className, wrapperClassName }: LayoutHeaderSocialProps) => {
  if (_.isEmpty(config?.site_facebook) && _.isEmpty(config?.site_youtube)) {
    return null;
  }

  return (
    <div className={twMerge("space-x-2", className)}>
      {config?.site_facebook && (
        <LayoutIconFacebook href={config.site_facebook} className={wrapperClassName} />
      )}
      {config?.site_youtube && <LayoutIconYoutube href={config.site_youtube} className={wrapperClassName} />}
    </div>
  );
};

export default LayoutHeaderSocial;
