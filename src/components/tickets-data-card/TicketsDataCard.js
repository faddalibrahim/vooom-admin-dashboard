import ticketsDataStyles from "./tickets-data-card.module.scss";

const TicketsDataCard = ({ label, value, backgroundColor }) => {
  return (
    <div className={ticketsDataStyles.ticketsData}>
      <h1>{value}</h1>
      <small>{label}</small>
    </div>
  );
};

export default TicketsDataCard;
