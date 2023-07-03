import { LayoutFooterColorEnum } from "@constants/enums";
import { ACB_CONFIG_CODE_ENUM } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import "@styles/globals.scss";
import Head from "next/head";
import Script from "next/script";
import LayoutFooter from "./components/Footer/Footer";
import LayoutHeader from "./components/Header/Header";

export interface LayoutProps extends BasePageProps {
  children: React.ReactNode;
  websiteConfig: SiteConfigDataType;
  footerColor?: LayoutFooterColorEnum;
}

const Layout = ({ children, websiteConfig, head, footerColor = LayoutFooterColorEnum.DARK }: LayoutProps) => (
  <>
    <Head>
      <title>{`${head.title} - ${websiteConfig.website.name}`}</title>
      <meta
        name="description"
        content={`${
          head.description
            ? `${head.description} - ${websiteConfig.website.name}`
            : `${websiteConfig.website.description}. Địa chỉ liên hệ: ${
                websiteConfig[ACB_CONFIG_CODE_ENUM.ADDRESS]
              }`
        }`}
      />
      <meta property="og:title" content={`${head.title} - ${websiteConfig.website.name}`} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={head.requestURL} />
    </Head>

    <LayoutHeader />
    {children}
    <LayoutFooter config={websiteConfig} color={footerColor} />

    <Script src="https://www.googletagmanager.com/gtag/js?id=G-L3Q4WX1T0N" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-L3Q4WX1T0N');
      `}
    </Script>
  </>
);

export default Layout;
