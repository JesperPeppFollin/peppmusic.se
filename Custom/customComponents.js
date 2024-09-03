class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <nav class="header-nav">
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>
    <label ><a class="header-logo" href="/"><i class="fa-solid fa-house"></i><a/></label>
    <ul class="header-ul">
        <li class="header-li"><a class="header-a" id="contact" href="../Kontakt/">BOKA</a></li>
        <li class="header-li"><a class="header-a" href="../Erfarenheter/">ERFARENHETER</a></li>
        <li class="header-li"><a class="header-a" href="../Om/">Om mig</a></li>
        <li class="header-li"><a class="header-a" href="../Galleri/">Galleri</a></li>
    </ul>
</nav>`;
  }
}

class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer class="footer-container">
    <div class="footer-contact-container">
      <a href="tel:0722076090"><p>0722076090</p></a>
      <a href="mailto:kontakt@peppmusic.se"><p>kontakt@peppmusic.se</p></a>
    </div>
    <p id="footer-copyright"> Copyright © 2024 Jesper Follin. Alla rättigheter förbehålls. </p>
  </footer>`;
  }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);
