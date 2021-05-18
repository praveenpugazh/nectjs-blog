import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import layoutStyles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          <Header />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
