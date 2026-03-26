import React from "react";

const NotFound = () => {
  return (
    <main className="px-10 sm:px-50 py-6 flex flex-col items-center justify-center flex-1">
      <h2 className="text-2xl my-8">{"Page not found."}</h2>
      <span>{"The page you are looking for does not exist."}</span>
      <span>{"Please check the URL and try again."}</span>
    </main>
  );
};

export default NotFound;
