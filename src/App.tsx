import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonListPage from "./pages/PokemonListPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
