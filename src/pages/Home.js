import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://fakestoreapi.com/products";

  async function FetchData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const dat = await res.json();

      setData(dat);
    } catch (e) {
      //error handle
    }

    setLoading(false);
  }

  useEffect(() => {
    FetchData();
  }, []);

  console.log(data);

  return (
    <div className="w-[100%] h-[100%] bg-gray-300">
      <div className="w-[1200px] mx-auto py-12 px-7 flex justify-center  items-center flex-wrap gap-x-12 gap-y-12">
        {loading ? (
          <div className="h-[100vh] w-[100vw] flex justify-center mt-[20%] overflow-y-hidden">

            <Spinner className="mb-[100%]" />

          </div>
        ) : (
          data.map((dat, index) => <Card data={dat} key={index}></Card>)
        )}
      </div>
    </div>
  );
};

export default Home;
