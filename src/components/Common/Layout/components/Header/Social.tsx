import { SiteConfigDataType } from "@interfaces/dataTypes";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import LayoutIconFacebook from "../Icon/Facebook";
import LayoutIconYoutube from "../Icon/Youtube";

interface LayoutHeaderSocialProps {
  config: SiteConfigDataType;
  className?: string;
}

const LayoutHeaderSocial = ({ config, className }: LayoutHeaderSocialProps) => {
  if (_.isEmpty(config?.site_facebook) && _.isEmpty(config?.site_youtube)) {
    return null;
  }

  return (
    <div className={twMerge("hidden space-x-2 lg:flex", className)}>
      {config?.site_facebook && <LayoutIconFacebook href={config.site_facebook} />}
      {config?.site_youtube && <LayoutIconYoutube href={config.site_youtube} />}
    </div>
  );
};

export default LayoutHeaderSocial;
