import AnalyticsSvg1 from "components/analytics-svg/AnalyticsSvg1";
import AnalyticsSvg2 from "components/analytics-svg/AnalyticsSvg2";
import AnalyticsSvg3 from "components/analytics-svg/AnalyticsSvg3";
import homeStyles from "./home.module.scss";

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div className={homeStyles.appBar}>
        <h1>Voom Dashboard</h1>
      </div>
      <div className={homeStyles.uses}>
        <div>
          <strong>Manage Data</strong>
          <AnalyticsSvg1 />
        </div>
        <div>
          <AnalyticsSvg2 />
          <strong>Draw Insights</strong>
        </div>
        <div>
          <strong>Manage Personnel</strong>
          <AnalyticsSvg3 />
        </div>
      </div>
    </div>
  );
};

export default Home;
