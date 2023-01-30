import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer>
      <div className="footer--social">
        <a href="https://github.com/devluanchristian">
          <GitHubIcon fontSize="large" />
        </a>

        <a href="https://www.instagram.com/_luanzin01/">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/luan-christian01/">
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
      <div className="footer--info">
        <p> Projeto Clone-Netflix</p>
        <p> Direitos de imagem para Netflix</p>
        <p> Dados pegos do site Themoviedb.org</p>
        <small>&copy; 2023 - Desenvolvido por Luan Christian</small>
      </div>
    </footer>
  );
};

export default Footer;
