
import "./App.css";

import { Provider } from "react-redux";
import store from "./store/Store";
import SearchMeal from "./SearchMeal";
function App() {
  return (
    <Provider store={store}>
      <SearchMeal />
    </Provider>
  );
}

export default App;
