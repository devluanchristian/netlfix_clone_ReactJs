import "./styles.css";

const Header = ({ black }: any) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          ></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
            alt="user"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
