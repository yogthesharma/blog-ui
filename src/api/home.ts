import { AxiosResponse } from "axios";
import { WithResponse } from "../model/api";
import instance from "./instance";

export interface IHomepageHeading {
  id: string;
  title: string;
  subtitle: string;
}

export const getHeadingData = async () => {
  try {
    const response: AxiosResponse<WithResponse<IHomepageHeading>> =
      await instance.get("/home");
    return response.data;
  } catch (error) {
    console.log("error getting /home");
    return;
  }
};

export interface IBlogOverview {
  title: string;
  subtitle: string;
  id: string;
}

export const getRecentBlogs = async () => {
  try {
    const response: AxiosResponse<WithResponse<IBlogOverview>> =
      await instance.get("/blog?first=3");
    return response.data;
  } catch (error) {
    console.log("error getting /home");
    return;
  }
};
