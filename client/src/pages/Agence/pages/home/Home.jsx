import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { particulierData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home-agence">
      <FeaturedInfo />
      <Chart data={particulierData} title="Particulier Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
