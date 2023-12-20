import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart, Product } from "./Pages/index";
import { Header, Newsletter, Footer } from "./components";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route> */}
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Newsletter />
          <Footer />
        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
