import Sidebar from "parts/Sidebar";
import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import SettingForm from "parts/SettingForm";

export default function Settings() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const DETAILS = useSelector((state) => state.users);

  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>

        <main className="flex-1">
          <div className="px-4 md:px-16 ">
            <section className="flex flex-col mt-8 pl-12 md:pl-0">
              <h1 className="text-xl md:text-4xl text-gray-900 font-medium">
                Settings
              </h1>
              <p className="text-sm md:text-lg text-gray-600">
                Secure your data information
              </p>
            </section>

            <SettingForm details={DETAILS}></SettingForm>
          </div>
        </main>
      </div>
    </>
  );
}
