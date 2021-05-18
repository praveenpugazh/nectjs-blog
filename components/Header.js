import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>Ajay Raju</h1>
      <p className={headerStyles.description}>
        Keep upto date with latest trading news
      </p>
    </div>
  );
};

export default Header;
