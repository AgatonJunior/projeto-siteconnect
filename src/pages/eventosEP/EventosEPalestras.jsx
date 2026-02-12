import InfoCard from "../../components/infocard/InfoCard"
import jovensReunidos from "../../assets/image/jovensReunidos.png"
import pessoasFelizes from "../../assets/image/pessoasFelizes.png"
import ensinandoTecnologia from "../../assets/image/ensinandoTecnologia.png"
import S from "./eventosEPalestras.module.scss"
const EventosEPalestras = () => {
  return (
    <main>
      <h1>Eventos & Palestras</h1>
      <section className={S.cardEventos}>
        <article><InfoCard 
          img={jovensReunidos}
          alt="Imagem de jovens reunidos em um evento"
          subtitulo="Empoderando Jovens o para o Futuro"
          paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social.
                    Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
          btn="Quero Participar"          
        />    
        </article>
        <article><InfoCard 
          img={ensinandoTecnologia} 
          alt="Imagem de um homem ensinando tecnologia para um grupo de pessoas"
          subtitulo="Tecnologia que Transforma"
          paragrafo="Atividade: Workshop de introdução à programação e inovação digital.
          Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
          btn="Quero Participar"
          />

        </article>
        <article><InfoCard 
          img={pessoasFelizes}
          alt="Imagem de uma mulher sorrindo para pais e filhos"
          subtitulo="Carreira e Primeiro Emprego"
          paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.
          Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
          btn="Quero Participar"
        />
        </article>
      </section>

    </main>
  )
}

export default EventosEPalestras
