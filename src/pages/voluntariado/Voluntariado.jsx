import InfoCard from "../../components/infocard/InfoCard"
import caixaReciclagem from "../../assets/image/caixaReciclagem.png"
import ensinandoTecnolgia from "../../assets/image/ensinandoTecnologia.png"
import esporteInclusivo from "../../assets/image/esporteInclusivo.png"
import S from "./voluntario.module.scss"

const Voluntariado = () => {
  return (
    <main>
      <h1>Voluntáriado</h1>
      <section className={S.cardVoluntariado}>
        <article>
          <InfoCard 
          img={caixaReciclagem}
          alt = "Imagem de uma caixa de reciclagem com materiais recicláveis"
          subtitulo="Mutirão de reciclagem"
          paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
          btn="Quero participar"
          />
        </article>
        <article>
          <InfoCard 
          img={ensinandoTecnolgia}
          alt = "Imagem de um homem ensinando tecnologia para um grupo de jovens"
          subtitulo="Aulas de Tecnologia"
          paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
          btn="Quero participar"
          />
        </article>
        <article>
          <InfoCard 
          img={esporteInclusivo}
          alt = "Imagem de jovens em um esporte inclusivo com pessoa idosas"
          subtitulo="Esporte e Inclusão"
          paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
          btn="Quero participar"
          />
        </article>
      </section>
    </main>
  )
}

export default Voluntariado
