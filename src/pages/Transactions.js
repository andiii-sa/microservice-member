import Sidebar from "parts/Sidebar";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import formatThousand from "helpers/formatThousand";
import formatDate from "helpers/formatDate";

import orders from "constants/api/orders";

import Loading from "parts/Loading";
import Congratulation from "parts/Congratulation";
import EmptyState from "parts/EmptyState";

import { fetchOrders, messageOrders, statusOrders } from "store/actions/orders";

export default function Transactions() {
  const dispatch = useDispatch();
  const ORDERS = useSelector((state) => state.orders);

  const location = useLocation();

  const params =
    location?.search.length &&
    location?.search
      ?.substring(1, location.length)
      ?.split?.("&")
      ?.reduce?.((acc, item) => {
        const [key, value] = item.split("=");
        acc[key] = value;
        return acc;
      }, {});

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusOrders("loading"));
    orders
      .all()
      .then((res) => {
        console.log("res", res);
        dispatch(fetchOrders(res.data));
      })
      .catch((error) => {
        console.log("error tr =>> ", error);
        dispatch(messageOrders(error?.response?.data?.message ?? "error"));
      });
  }, [dispatch]);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <div className="px-4 md:px-16">
            {ORDERS.status === "loading" && <Loading />}
            {ORDERS.status === "error" && ORDERS.message}
            {ORDERS.status === "ok" &&
              (params.order_id ? (
                <Congratulation data={ORDERS.data[params.order_id]} />
              ) : ORDERS.total > 0 ? (
                <>
                  <section className="flex flex-col mt-8 pl-12 md:pl-0">
                    <h1 className="text-xl md:text-4xl text-gray-900 font-medium">
                      My Transactions
                    </h1>
                    <p className="text-sm md:text-lg text-gray-600">
                      Keep on tract what you have invested
                    </p>
                  </section>

                  <section className="flex flex-wrap flex-col mt-8">
                    {Object.values(ORDERS.data)?.map?.((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex flex-wrap justify-start items-center -mx-4 mt-5 mb-4 md:mb-6"
                        >
                          <div className="w-full md:w-2/12 px-4">
                            <img
                              src={item?.metadata?.course_thumbnail ?? ""}
                              alt={item?.metadata?.course_name ?? "Class name"}
                            />
                          </div>
                          <div className="w-auto md:w-3/12 px-4">
                            <h6 className="text-gray-900 text-lg">
                              {item?.metadata?.course_name ?? ""}
                            </h6>
                            <p className="text-gray-600">
                              {item?.metadata?.course_level ?? "level"}
                            </p>
                          </div>
                          <div className="w-full md:w-2/12 px-4">
                            <h6 className="text-gray-900 text-lg">
                              Rp.
                              {formatThousand(
                                item?.metadata?.course_price ?? 0
                              )}
                            </h6>
                          </div>
                          <div className="w-auto md:w-2/12 px-4">
                            <h6 className="text-gray-900 text-lg">
                              {item?.created_at
                                ? formatDate(item?.created_at)
                                : "-"}
                            </h6>
                          </div>
                          <div className="w-3/12 flex justify-center px-4">
                            {item?.status === "pending" && (
                              <Link
                                to={`/joined/${item?.course_id}`}
                                className="bg-orange-500 hover:bg-orange-400 text-white transition-all duration-200 focus:outline-none  px-6 py-3 mt-0 md:mt-4 whitespace-nowrap ml-4 md:ml-0"
                              >
                                Bayar
                              </Link>
                            )}
                            {item?.status === "success" && (
                              <Link
                                to={`/courses/${item?.course_id}`}
                                className="bg-gray-250 hover:bg-gray-300 transition-all duration-200 focus:outline-none  px-6 py-3 mt-0 md:mt-4 whitespace-nowrap ml-4 md:ml-0"
                              >
                                Lihat Kelas
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </section>
                </>
              ) : (
                <EmptyState />
              ))}
          </div>
        </main>
      </div>
    </>
  );
}
