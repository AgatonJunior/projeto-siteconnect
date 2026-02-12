import InforCard from "../../components/infocard/InfoCard"
import documentosMesa from "../../assets/image/documentosMesa.png"
import trabalhoGrupo from "../../assets/image/trabalhoGrupo.png"
import acompanhamento from "../../assets/image/acompanhamento.png"
import S from "./mentoria.module.scss"

const Mentoria = () => {
  return (
    <main>
      <h1>Mentoria</h1>
      <section className={S.cardMentoria}>
        <article>
          <InforCard 
          img={documentosMesa}
          alt="Imagem de uma mesa com documentos e pessoas discutindo"
          subtitulo="Mentoria de Carreira e Emprego"
          paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
          btn="Quero participar"
          />
        </article>
        <article>
          <InforCard 
          img={trabalhoGrupo}
          alt="Imagem de um grupo de pessoas trabalhando em equipe"
          subtitulo="Compartilhe Experiência"
          paragrafo="Oriente jovens e profissionais iniciantes em sua área."
          btn="Quero participar"
          />
        </article>
        <article>
          <InforCard 
          img={acompanhamento}
          alt="Imagem de uma pessoa auxilando a outra em um computador"
          subtitulo="Acompanhamento"
          paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
          btn="Quero participar"
          />
        </article>
      </section>
    </main>
  )
}

export default Mentoria
