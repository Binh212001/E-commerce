import React from "react";
import LineChart from "./LineChart ";
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function Home() {
  
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.data?.sellers) {
    return (
      <div className="text-center align-middle flex flex-col justify-center" style={{ height: "60vh" }}>
        <h3 className="font-bold text-yellow-yody text-3xl">Bạn không có quyền truy cập trang này.</h3>
      </div>
    );
  }
  return <div className="container m-auto"><LineChart data={data} options={options} /></div>;
}

export default Home;
