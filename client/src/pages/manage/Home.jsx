import React, { useEffect, useState } from "react";
import LineChart from "./LineChart ";
import productRest from "../../api/ProductRest";

function Home() {
  const [label, setLaBel] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    const getTopSelleing = async () => {
      try {
        const { data } = await productRest.topSalling();
        data.forEach((c) => {
          setLaBel((prev) => [...prev, c.productName]);
          setDataChart((prev) => [...prev, c.totalQuantitySold]);
        });
      } catch (error) {
        alert(error.message);
      }
    };
    getTopSelleing();
  }, []);
  const data = {
    labels: label,
    datasets: [
      {
        label: "10 sản phẩm bán nhiều nhất. ",
        data: dataChart,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.data?.sellers) {
    return (
      <div
        className="text-center align-middle flex flex-col justify-center"
        style={{ height: "60vh" }}
      >
        <h3 className="font-bold text-yellow-yody text-3xl">
          Bạn không có quyền truy cập trang này.
        </h3>
      </div>
    );
  }
  return (
    <div className="container m-auto">
      <LineChart data={data} />
    </div>
  );
}

export default Home;
