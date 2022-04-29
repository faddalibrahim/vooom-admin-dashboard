import busesStyles from "./buses.module.scss";
import AllBuses from "../../components/all_buses/AllBuses"

const Buses = () => {
  return (<div className={busesStyles.buses}>
    <AllBuses /> 
  </div>);
};

export default Buses;
   