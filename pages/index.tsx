import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Cloudem App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Welcome to Cloudem Saas App !!</div>
      <div>
        <input
          className="appearance-none ml-5 mt-5 p-1 w-64 border-2 rounded-sm focus:outline-none focus:border-primary-500"
          placeholder="Type Here"
        ></input>
      </div>
      <div>
        <button className="appearance-none ml-5 mt-5 px-5 py-1 border rounded-sm focus:outline-none active:bg-gray-500 focus:border-warning-500">
          Create subnet
        </button>
      </div>
    </div>
  );
};

export default Index;
