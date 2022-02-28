import Sidebar from "parts/Sidebar";
import React, { useEffect } from "react";

import formatThousand from "helpers/formatThousand";
import formatDate from "helpers/formatDate";

export default function Transactions() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const items = [
    {
      id: "1",
      slug: "2",
      image: "new-class-2.jpg",
      name: "Start vlogging",
      level: "Beginner",
      price: 280000,
      date: "2020-01-22",
    },
    {
      id: "2",
      slug: "3",
      image: "new-class-3.jpg",
      name: "Start vlogging AA",
      level: "Beginner",
      price: 580000,
      date: "2020-05-22",
    },
  ];

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <div className="px-16">
            <section className="flex flex-col mt-8">
              <h1 className="text-4xl text-gray-900 font-medium">
                My Transactions
              </h1>
              <p className="text-lg text-gray-600">
                Keep on tract what you have invested
              </p>
            </section>

            <section className="flex flex-col mt-8">
              {items?.length > 0
                ? items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex justify-start items-center -mx-4 mt-5"
                      >
                        <div className="w-auto px-4" style={{ width: 150 }}>
                          <img
                            src={item?.image ?? ""}
                            alt={item?.name ?? "Class name"}
                          />
                        </div>
                        <div className="w-3/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            {item?.name ?? ""}
                          </h6>
                          <p className="text-gray-600">
                            {item?.level ?? "level"}
                          </p>
                        </div>
                        <div className="w-2/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            Rp.{formatThousand(item?.price ?? 0)}
                          </h6>
                        </div>
                        <div className="w-2/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            {item?.date ? formatDate(item?.date) : "-"}
                          </h6>
                        </div>
                        <div className="w-auto px-4">
                          <button className="bg-gray-250 hover:bg-gray-300 transition-all duration-200 focus:outline-none text-white px-6 py-3 mt-4">
                            Lihat Kelas
                          </button>
                        </div>
                      </div>
                    );
                  })
                : "No Transaction"}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
