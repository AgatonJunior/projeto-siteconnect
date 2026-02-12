import S from "./paginaInicial.module.scss";
import banner from "../../assets/image/banner.png";

const PaginaInicial = () => {
  return (
    <main className={S.main}>
      <section className={S.info}>
        <h1>Projetos Sociais que transformam </h1>
        <p>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
        <button>Cadastrar Empresa ➔</button>
        <section className={S.infoDados}>
          <article>
            <h2>500+</h2>
            <p>Empresas Voluntárias</p>
          </article>
          <article>
            <h2>1.2K+</h2>
            <p>Projetos Realizados</p>
          </article>
          <article>
            <h2>50K+</h2>
            <p>Vidas Impactadas</p>
          </article>
        </section>
      </section>
      <img
        src={banner}
        alt="Imagem do banner de mãos segurando o globo terreste representando a responsabilidade social e ambiental. "
      />
    </main>
  );
};

export default PaginaInicial;
