import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import courses from "constants/api/courses";

import ServerError from "./500";
import Loading from "parts/Loading";

export default function Joined({ history, match }) {
  const [state, setState] = useState(() => ({
    isLoading: true,
    isError: false,
    data: {},
  }));

  const joining = useCallback(async () => {
    try {
      const details = await courses.details(match.params.class);
      const joined = await courses.join(match.params.class);

      if (joined.data.snap_url) window.location.href = joined.data.snap_url;
      else setState({ isLoading: false, isError: true, data: details });
    } catch (error) {
      console.log("error join >>", error);

      if (error?.response?.data?.message === "user already take this course")
        history.push(`/courses/${match.params.class}`);
    }
  }, [match.params.class]);

  useEffect(() => {
    joining();
  }, [joining]);

  if (state.isLoading) return <Loading />;
  if (state.isError) return <ServerError />;

  return (
    <>
      <section className="h-screen flex flex-col items-center mt-24">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/illustration-joined.jpg`}
          alt="Success join class"
        />
        <h1 className="text-3xl text-gray-900 mt-12">Welcome to Class</h1>
        <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
          You have successfully joined our
          <strong>{state?.data?.name ?? "Class Name"}</strong> class
        </p>
        <Link
          to={`/courses/${match.params.class}`}
          className="cursor-pointer bg-orange-500 hover:bg-orang-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
        >
          Start Learn
        </Link>
      </section>
    </>
  );
}
