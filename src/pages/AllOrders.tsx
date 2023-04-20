import React, { useEffect } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { getAllOrderThunk } from "../features/order/allOrders";
import { Link } from "react-router-dom";

const AllOrders = () => {
  const { orders } = useAppSelector((state) => state.allOrdersAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllOrderThunk());
  }, []);

  return (
    <>
      <section className="my-10 min-h-[100vh]">
        <h3 className="text-center text-4xl font-bold">Your Previous Orders</h3>
        <div className="sm:p-6 lg:p-8 flex justify-center w-[100%]">
          <div className="w-[80%]">
            {orders?.map((el) => {
              return (
                <div className="flex justify-between items-center sm:gap-8 w-[100%] bg-gray-200 p-10">
                  <div>
                    <h3 className="text-lg font-medium sm:text-xl">
                      <a href="" className="">
                        #{el?._id}
                      </a>
                    </h3>
                  </div>
                  <div>
                    <Link to={`/order/${el?._id}`}>
                    <button className="bg-white p-5">Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllOrders;
