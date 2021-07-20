import Logoup from '../../img/logo_upminer3.png';
// import Logoheader from '../../img/logo_header.png';



export const Header = () => (
  <div className="header">
    <div>

      <div><img src={Logoup} alt="img" />| HISTÓRICO EMPRESARIAL</div>

      <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos
        os fatos e acontecimentos relevantes de uma empresa desde o seu ano
        de fundação.</p>
      <p>R$ <span>40,00</span>  <button className="btt-more"> Saiba mais</button></p>
    </div>
    <div className="header-logo">
      <div>
        {/* <img src={Logoheader} alt="img" /> */}
      </div>


    </div>
  </div>
);