import { Route, Router } from "@solidjs/router";
import Layout from "./components/Layout/index.tsx";
import Home from "./pages/Home/index.tsx";

function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
