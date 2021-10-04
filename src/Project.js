import { useProjectList } from "./hooks/projectHook";
const Project = () => {
  const projects = useProjectList();
  console.log("projects=>", projects);
  return <h1> Project</h1>;
};

export default Project;
