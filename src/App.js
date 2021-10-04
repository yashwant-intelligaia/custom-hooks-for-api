import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Project from "./Project";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Project />
      </div>
    </QueryClientProvider>
  );
}
