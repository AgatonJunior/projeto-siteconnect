import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
import avatar from "../../assets/image/avatar.png";
import S from "./header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 892);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 892);

      if (window.innerWidth > 892) {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);

  return (
    <>
      <header className={S.header}>
        <Link to={"/"}>
          <img
            className={S.imgLogo}
            src={logo}
            alt="Imagem da logo do site connect sem representado por uma mão segurando um coração, simbolizando apoio"
          />
        </Link>
        {!isMobile && (
          <nav className={S.nav}>
            <Link className={S.Link} to="/doacao">
              Doação
            </Link>
            <Link className={S.Link} to="/voluntariado">
              Voluntariado
            </Link>
            <Link className={S.Link} to="/mentoria">
              Mentoria
            </Link>
            <Link className={S.Link} to="/eventosEP">
              Eventos
            </Link>
          </nav>
        )}

        <img
          className={S.imgUser}
          src={avatar}
          alt="imagem do volutário"
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>

      <nav className={menuAberto ? S.navUser : S.closedNavUser}>
        <Link to="/usuario" onClick={() => setMenuAberto(false)}>Agaton Junior</Link>
        <Link to="/voluntariado" onClick={() => setMenuAberto(false)}>Meu Vonlutariado</Link>
        <Link onClick={() => setMenuAberto(false)} >Configuraões de conta</Link>
        {isMobile && (
          <div>
            <Link to={"./doacao"} onClick={() => setMenuAberto(false)}>Doação</Link>
            <Link to={"./voluntariado"} onClick={() => setMenuAberto(false)}>Voluntariado</Link>
            <Link to={"./mentoria"} onClick={() => setMenuAberto(false)}>Mentoria</Link>
            <Link to={"./eventosEP"} onClick={() => setMenuAberto(false)}>Eventos</Link>
          </div>
        )}
        <Link  onClick={() => setMenuAberto(false)} >Sair</Link>
      </nav>
    </>
  );
};

export default Header;
