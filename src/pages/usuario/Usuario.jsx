// import S from "./usuario.module.scss"
// import avatar from "../../assets/image/avatar.png"
// import iconeEmail from "../../assets/icones/iconeEmail.png"
// import iconeCalendario from "../../assets/icones/iconeCalendario.png"
// import iconeLocalizacao from "../../assets/icones/iconeLocalizacao.png"

// const Usuario = () => {
//   return (
//     <main>
//       <img className={S.imgUsuario} src={avatar} alt="Foto do usuário" />
//       <div className={S.descricaoUser}>
//       <h2>Agaton Junior</h2>
//       <h4>Voluntário Ativo</h4>
//       <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
//       </div>
//       <section className={S.infoUser}>
//         <img src={iconeLocalizacao} alt="Ícone de localização" />
//         <h5>Duque de Caxias, RJ</h5>
//         <img src={iconeEmail} alt="Ícone de e-mail" />
//         <h5>agatonpereira@gmail.com</h5>
//         <img src={iconeCalendario} alt="Ícone de calendário" />
//         <h5>Membro desde Janeiro 2026</h5>
//         <div className={S.areasInteresse}>
//         <p>Educação</p>
//         <p>Esportes</p>
//         <p>Assistência Social</p>
//         <p>Design</p>
//         </div>
//       </section>
//     </main>
//   )
// }

// export default Usuario


import S from "./usuario.module.scss"
import avatar from "../../assets/image/avatar.png"
import iconeEmail from "../../assets/icones/iconeEmail.png"
import iconeCalendario from "../../assets/icones/iconeCalendario.png"
import iconeLocalizacao from "../../assets/icones/iconeLocalizacao.png"

const Usuario = () => {
  return (
    <main className={S.main}>
      
      <section className={S.card}>

        <img className={S.imgUsuario} src={avatar} alt="Foto do usuário" />

        <div className={S.conteudo}>

          <div className={S.descricaoUser}>
            <h2>Agaton Junior</h2>
            <h4>Voluntário Ativo</h4>
            <p>
              Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.
            </p>
          </div>

          <div className={S.infoUser}>
            <div>
              <img src={iconeLocalizacao} alt="" />
              <span>Duque de Caxias, RJ</span>
            </div>

            <div>
              <img src={iconeEmail} alt="" />
              <span>agatonpereira@gmail.com</span>
            </div>

            <div>
              <img src={iconeCalendario} alt="" />
              <span>Membro desde Janeiro 2026</span>
            </div>
          </div>

          <div className={S.areasInteresse}>
            <p>Educação</p>
            <p>Esportes</p>
            <p>Assistência Social</p>
            <p>Design</p>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Usuario
