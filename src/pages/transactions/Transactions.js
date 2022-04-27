import TicketsDataCard from "components/tickets-data-card/TicketsDataCard";
import transactionsStyles from "./transactions.module.scss";
import TextField from "@mui/material/TextField";

const Transactions = () => {
  return (
    <div className={transactionsStyles.transactions}>
      <div className={transactionsStyles.duration}>
        <TextField
          id="date"
          label="from"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="to"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={transactionsStyles.summary}>
        <TicketsDataCard
          label="No. of tickets sold"
          value="45"
          backgroundColor="rgba(245, 246, 151, 0.55)"
        />
        <TicketsDataCard
          label="Expected Amount"
          value="$3000"
          backgroundColor="#ECC5FA"
        />
        <TicketsDataCard
          label="Total Credit"
          value="$700"
          backgroundColor="#C5DDFA"
        />
      </div>
      <div className={transactionsStyles.more}></div>
    </div>
  );
};

export default Transactions;
