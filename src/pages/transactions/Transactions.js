import TicketsDataCard from "components/tickets-data-card/TicketsDataCard";
import transactionsStyles from "./transactions.module.scss";
import TextField from "@mui/material/TextField";

import { useState } from "react";

import { ticketsData } from "./mockData";
import BarChart from "components/charts/BarChart";
import LineChart from "components/charts/LineChart";
import PieChart from "components/charts/PieChart";

const Transactions = () => {
  const initialRandom = Math.floor(Math.random() * ticketsData.length);

  const [sold, setSold] = useState(
    ticketsData[initialRandom][0].quantity +
      ticketsData[initialRandom][1].quantity
  );
  const [amount, setAmount] = useState(
    ticketsData[initialRandom][0].amount + ticketsData[initialRandom][1].amount
  );

  const [ticketsDataa, setTicketsDataa] = useState({
    labels: ticketsData[0].map((data) => data.ticketType),
    datasets: [
      {
        label: "tickets",
        data: ticketsData[initialRandom].map((data) => data.quantity),
        backgroundColor: ["#456990", "#ef767a"],
        borderColor: "#111",
        borderWidth: 2.5,
      },
    ],
  });
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
          onChange={() => {
            const curr = Math.floor(Math.random() * ticketsData.length);
            setTicketsDataa({
              labels: ticketsData[0].map((data) => data.ticketType),
              datasets: [
                {
                  label: "tickets",
                  data: ticketsData[curr].map((data) => data.quantity),
                  backgroundColor: ["#456990", "#ef767a"],
                  borderColor: "#111",
                  borderWidth: 2.5,
                },
              ],
            });

            setAmount(
              ticketsData[curr][0].amount + ticketsData[curr][1].amount
            );
            setSold(
              ticketsData[curr][0].quantity + ticketsData[curr][1].quantity
            );
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
          onChange={() => {
            const curr = Math.floor(Math.random() * ticketsData.length);
            setTicketsDataa({
              labels: ticketsData[0].map((data) => data.ticketType),
              datasets: [
                {
                  label: "tickets",
                  data: ticketsData[curr].map((data) => data.quantity),
                  backgroundColor: ["#456990", "#ef767a"],
                  borderColor: "#111",
                  borderWidth: 2.5,
                },
              ],
            });
            setAmount(
              ticketsData[curr][0].amount + ticketsData[curr][1].amount
            );
            setSold(
              ticketsData[curr][0].quantity + ticketsData[curr][1].quantity
            );
          }}
        />
      </div>
      <div className={transactionsStyles.summary}>
        <TicketsDataCard label="No. of tickets sold" value={sold} />
        <TicketsDataCard value={amount} label="Expected Amount (cedis)" />
        <TicketsDataCard label="Total Credit (cedis)" value="700" />
      </div>
      <div className={transactionsStyles.more}>
        <BarChart chartData={ticketsDataa} />
        {/* <LineChart chartData={ticketsDataa} /> */}
        {/* <div style={{ width: "50%" }}>
          <PieChart chartData={ticketsDataa} />
        </div> */}
      </div>
    </div>
  );
};

export default Transactions;
