import { GetStaticPaths } from "next";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

import { API } from "../api";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { data } = useQuery("homepageHeading", API.Homepage.getHeadingData);
  console.log(JSON.stringify(data));

  return <div>{JSON.stringify(data)}</div>;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    "homepageHeading",
    API.Homepage.getHeadingData
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

// react query is added now you can try to add more requests for now
