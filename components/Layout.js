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
      <Header />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
