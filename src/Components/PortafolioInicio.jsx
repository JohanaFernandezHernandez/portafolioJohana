import { PdfDownloader } from "./PdfDownloader";
import { Redes } from "./Redes";

export const PortafolioInicio = () => {
  return (
    <section id="inicio">
    <div className="container_inicio dark text-foreground bg-background">
      <div className="container_imagen">
        <img className="imagen1" src="/assets/img/fotoprinipal.jpg" alt="mi imagen" />
      </div>

      <div className="container_text">
        <h1>Johana Fernandez</h1>
        <span >Fronthend Developer</span>
        <p>
          Soy una persona proactiva, dinámica con buenas relaciones
          interpersonales y trabajo en equipo, habilidades de asimilación y
          aprendizaje de forma rápida con el fin de contribuir al logro de los
          objetivos organizacionales y personales,
        </p>
        <p>
          Decidi orientarme a la tecnologia y el desarrollo de software
          enfocandome en el Desarrollo Frontend utilizando tecnologias como
          <span>React.js, JavaScrip, CSS, SASS,</span>siempre pensando en calidad del código y
          la experiencia del usuario.
        </p>

        <div className="container_button">
          <PdfDownloader />
          <Redes />
        </div>
      </div>
    </div>
    </section>
  );
};
