import Layout from "../hoc/Layout";
import Holiday from "../components/holidays/Holiday";
import TabPanel from "../components/mice/TabPanel";

import { wrapper } from "../redux/store";
import { getTours } from "../redux/tourReducer/action";

function Home() {
  return (
    <>
      <Layout title='ASIAMICE'>
        <Holiday />
        <TabPanel />
      </Layout>
    </>
  );
}
export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getTours(req));
    }
);
