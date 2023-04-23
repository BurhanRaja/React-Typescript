import {useEffect, useState} from "react";
import { getSellerProductCount } from "../../api/product";
import { getSellerOrderCount } from "../../api/sellerorder";

const Dashboard = () => {

    const [productCount, setProductCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

    async function totalProducts() {
        let response = await getSellerProductCount();
        setProductCount(response.productcount)
    }

    async function totalOrders() {
        let response = await getSellerOrderCount();
        console.log(response);
        setOrderCount(response.sellerordercount)
    }

    useEffect(() => {
        totalProducts();
        totalOrders();
    }, []);

  return (
    <>
      <div className="mt-10 w-[95%] mx-auto">
        <div className="p-10 mb-5 flex justify-between items-center w-[100%] bg-gray-300 rounded">
            <p>Total Products</p>
            <p className="font-bold text-xl">{productCount}</p>
        </div>
        <div className="p-10 flex justify-between items-center w-[100%] bg-gray-300 rounded">
            <p>Total Orders</p>
            <p className="font-bold text-xl">{orderCount}</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
