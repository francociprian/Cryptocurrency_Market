import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const CoinDetailChart = ({ id }) => {
    const [historyData, setHistoryData] = useState();
    const [days, setDays] = useState(365);
    const [label, setLabel] = useState("1 year")
    
    useEffect(() => {
      fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
      .then(resp => resp.json())
      .then(data => setHistoryData(data.prices))
    }, [id, days])

    const handleChangeDays = (daysAmount, text) => {
        setDays(daysAmount)
        setLabel(text)
    }

  return (
    <div className='flex justify-center'>
        {historyData &&
        <Line
            data={{
                labels: historyData.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
                {
                data: historyData.map((coin) => coin[1]),
                label: `Price ( Last ${label} ) in dollars`,
                borderColor: "#2451b7",
                },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}/>}
          <div className='flex flex-col justify-between items-center gap-4'>
            <button className={`text-xs px-3 text-black dark:text-white border  ${label==="1 day" && 'active'}`} onClick={() => handleChangeDays(1, "1 day")}>24 Hours</button>
            <button className={`text-xs px-3 text-black dark:text-white border  ${label==="30 days" && 'active'}`} onClick={() => handleChangeDays(30, "30 days")}>30 Days</button>
            <button className={`text-xs px-3 text-black dark:text-white border  ${label==="6 months" && 'active'}`} onClick={() => handleChangeDays(182, "6 months")}>6 Months</button>
            <button className={`text-xs px-3 text-black dark:text-white border  ${label==="1 year" && 'active'}`} onClick={() => handleChangeDays(365, "1 year")}>1 Year</button>
          </div>
    </div>
  );
}

export default CoinDetailChart;