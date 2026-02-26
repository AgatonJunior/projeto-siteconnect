import S from "./forms.module.scss";

const Forms = () => {
  return (
    <main className={S.main}>
      <h1 className={S.titulo}>Cadastro de Voluntários</h1>

      <form className={S.form}>
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required />

        <label htmlFor="area">Área de interesse:</label>
        <select id="area" name="area">
          <option value="">Selecione</option>
          <option value="educacao">Doação</option>
          <option value="meio-ambiente">Voluntariado</option>
          <option value="saude">Mentoria</option>
          <option value="tecnologia">Eventos</option>
          <option value="outros">Outros</option>
        </select>
        <label htmlFor="disponibilidade">
          Disponibilidade semanal (horas):
        </label>
        <input
          type="number"
          id="disponibilidade"
          name="disponibilidade"
          min="1"
          max="40"
        />

        <input type="checkbox" id="aceite" name="aceite" required />
        <label htmlFor="aceite">Li e aceito os termos de voluntariado.</label>
        <button type="submit">Enviar Cadastro</button>
      </form>
    </main>
  );
};

export default Forms;
