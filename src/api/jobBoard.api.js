import axios from "axios";

const baseURL = "http://localhost:5000/api/jobs/";

export const getJobs = () => {
  return axios.get(baseURL).then(res => {
    console.log(res);
    return { 1: { title: "test1" }, 2: { title: "test2" } };
  });
};
