import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>Ajay Raju</h1>
      <p className={headerStyles.description}>Thoughts, stories and ideas.</p>
    </div>
  );
};

export default Header;
