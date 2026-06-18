import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard() {

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          "http://localhost:8080/api/analytics",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

      setStats(response.data);

    } catch (error) {

      console.error(
        "Dashboard Error:",
        error
      );

    } finally {

      setLoading(false);
    }
  };

  if (loading) {

    return (

      <div className="
      min-h-screen
      bg-slate-950
      text-white
      flex
      items-center
      justify-center
      ">
        Loading Dashboard...
      </div>
    );
  }
const chartData = [
  {
    name: "Users",
    value: stats?.totalUsers || 0
  },
  {
    name: "Products",
    value: stats?.totalProducts || 0
  },
  {
    name: "Wishlist",
    value: stats?.totalWishlistItems || 0
  },
  {
    name: "Searches",
    value: stats?.totalSearches || 0
  }
];
  return (

    <div className="
    min-h-screen
    bg-slate-950
    text-white
    p-8
    ">

      <h1 className="
      text-5xl
      font-bold
      mb-10
      ">
        Dashboard 📊
      </h1>

      <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
      ">

        {/* Users */}

        <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
        hover:border-cyan-500
        transition
        ">

          <h2 className="
          text-slate-400
          text-lg
          ">
            Total Users
          </h2>

          <p className="
          text-5xl
          font-bold
          text-cyan-400
          mt-4
          ">
            {stats?.totalUsers}
          </p>

        </div>

        {/* Products */}

        <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
        hover:border-purple-500
        transition
        ">

          <h2 className="
          text-slate-400
          text-lg
          ">
            Products
          </h2>

          <p className="
          text-5xl
          font-bold
          text-purple-400
          mt-4
          ">
            {stats?.totalProducts}
          </p>

        </div>

        {/* Wishlist */}

        <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
        hover:border-pink-500
        transition
        ">

          <h2 className="
          text-slate-400
          text-lg
          ">
            Wishlist Items
          </h2>

          <p className="
          text-5xl
          font-bold
          text-pink-400
          mt-4
          ">
            {stats?.totalWishlistItems}
          </p>

        </div>

        {/* Searches */}

        <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
        hover:border-green-500
        transition
        ">

          <h2 className="
          text-slate-400
          text-lg
          ">
            Total Searches
          </h2>

          <p className="
          text-5xl
          font-bold
          text-green-400
          mt-4
          ">
            {stats?.totalSearches}
          </p>

        </div>
{/* Analytics Chart */}

<div
  className="
  mt-12
  bg-slate-900
  border
  border-slate-800
  rounded-3xl
  p-8
  "
>

  <h2
    className="
    text-3xl
    font-bold
    mb-8
    "
  >
    Platform Analytics 📈
  </h2>

  <div className="h-[400px]">

    <ResponsiveContainer
      width="100%"
      height="100%"
    >

      <BarChart data={chartData}>

        <XAxis
  dataKey="name"
  stroke="#94a3b8"
/>

<YAxis
  stroke="#94a3b8"
/>
       <Tooltip
  contentStyle={{
    backgroundColor: "#0f172a",
    border: "1px solid #334155"
  }}
/>
        <Bar
  dataKey="value"
  fill="#8b5cf6"
  radius={[8, 8, 0, 0]}
/>

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>
      </div>

    </div>
  );
}

export default Dashboard;