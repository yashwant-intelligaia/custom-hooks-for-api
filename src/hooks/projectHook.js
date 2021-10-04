import { useQuery } from "react-query";
import { api } from "../lib/api";
const URL = "https://dev-apiv1-scrumbooster.intelligaia.com";
const token = "$2a$10$5N4uX53krCek9Qm3OxLZJuW3D/l7LN6om/Nh18qqBfk4jLROxZrZW";

const useProjectList = () =>
  useQuery("projectList", async () => {
    const { data } = await api({
      url: URL + "/project/list",
      method: "post",
      headers: { Authorization: "Bearer " + token }
    });
    return data;
  });

export { useProjectList };
