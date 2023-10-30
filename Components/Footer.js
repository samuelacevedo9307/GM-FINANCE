


export default function Footer() {
    return(
    <footer>
      <div>
        <img src="/images/gm1b.png" alt="logotipo" />
        <div className="redesSociales">
          <span className="redes">
            <a href="#"><i className="fa-brands fa-square-facebook" /></a>
            <a href="#"><i className="fa-brands fa-youtube" /></a>
            <a href="#"><i className="fa-brands fa-twitter" /></a>
            <a href="#"><i className="fa-brands fa-pinterest" /></a>
            <a href="#"><i className="fa-brands fa-instagram" /></a>
          </span>
        </div>
      </div>
        
        {/*-enlaces del footer*/}
        <div className="footer">
          <nav className="navegacion1">
            <h2>Menu</h2>
            <a href="#">tokenizacion</a>
            <a href="#">Ranking</a>
            <a href="#">Preguntas Frecuentes</a>
            <a href="#">Conectar Wallet</a>
          </nav>
        </div>
        <div className="footer">
          <nav className="navegacion2">
            <h2>Social</h2>
            <a href="https://www.facebook.com/TokenGMHolding?mibextid=LQQJ4d">Facebook</a>
            <a href="https://www.linkedin.com/in/gm-holding-gm-73824b1a8/">LinkedIn</a>
            <a href="https://instagram.com/gm_holding?igshid=YTQwZjQ0NmI0OA==">Instagram</a>
            <a href="https://twitter.com/GMHOLDING09">Twitter</a>
          </nav>
        </div>
        <div className="redes">
          
        </div>
      </footer>
      )

}