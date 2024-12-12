import "./App.css";
import "./styles/globals.css";
import "./styles/responsive.css";
import "./styles/shimmer-loadingState.css";
import Layout from "./page/layout";
import useCheckScreenSize from "./hooks/checkScreenSize";

function App() {
  useCheckScreenSize();
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
