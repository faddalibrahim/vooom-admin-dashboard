import driversStyles from "./drivers.module.scss";
import AllDrivers from "../../components/all_drivers/AllDrivers"
const Drivers = () => {
  return (
    <div className={driversStyles.drivers}>
      <AllDrivers />
    </div>
  );
};

export default Drivers;
