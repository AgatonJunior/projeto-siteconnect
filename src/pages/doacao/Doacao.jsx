import S from "./doacao.module.scss"
import InfoCard from "../../components/infocard/InfoCard"
import alimentos from "../../assets/image/alimentos.png"
import livros from "../../assets/image/livros.jpg"
import computadores from "../../assets/image/computadores.jpg"

const Doacao = () => {
  return (
    <main>
      <h1>Doação</h1>
      <section className={S.cardDoacao}>
        <article>
          <InfoCard
          img={alimentos}
          alt= "Imagem de uma pessoa segurando uma caixa de alimentos"
          subtitulo="Instituto grande familia"
          paragrafo="  Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
          btn="Quero Doar"
          />
        </article>
        <article>
          <InfoCard 
            img={livros}
            alt= "Imagem de uns livros na mesa"
            subtitulo="Projeto Futuro na Escola"
            paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            btn="Quero Doar"
          />
        </article>
        <article><InfoCard 
          img={computadores}
          alt= "Imagem de computadores sendo montado"
          subtitulo= "Instituto Conecta Jovem"
          paragrafo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
          btn="Quero Doar"
        />
        </article>
      </section>
    </main>
  )
}

export default Doacao
