import Layout from "@components/Common/Layout/Layout";
import Home from "@components/Home/Home";
import { BasePageProps } from "@interfaces/baseTypes";
import { configService, websiteService } from "@services/index";

const MyIndex = (props: BasePageProps) => (
  <Layout {...props}>
    <Home {...props} />
  </Layout>
);

export const getServerSideProps = async () => {
  const [website, contact] = await Promise.all([websiteService.getMyWebsite(), configService.getContact()]);

  const head = { title: "Trang chủ" };

  return {
    props: {
      head,
      website,
      contact,
      heroImages: [
        {
          id: 1,
          public:
            "https://imagedelivery.net/SlXC0YoPeZD_sqIwhqZhgg/230426F1A29A9A217C48249971B8BEA8E5D0F8/public",
        },
        {
          id: 2,
          public:
            "https://imagedelivery.net/SlXC0YoPeZD_sqIwhqZhgg/230426A03D0977B64948968CD39E1C4FBA0699/public",
        },
        {
          id: 3,
          public:
            "https://imagedelivery.net/SlXC0YoPeZD_sqIwhqZhgg/2304255F60FA79C7164B89B09B3177533430D2/public",
        },
        {
          id: 4,
          public:
            "https://imagedelivery.net/SlXC0YoPeZD_sqIwhqZhgg/2304255F60FA79C7164B89B09B3177533430D2/public",
        },
      ],
    },
  };
};

export default MyIndex;
