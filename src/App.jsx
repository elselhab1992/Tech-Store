import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart } from "./Pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
