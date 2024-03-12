
import { PortafolioNavbar } from "./Components/PortafolioNavbar"
import { PortafolioInicio } from "./Components/PortafolioInicio"
import "./App.css"
import { CardsProyects } from "./Components/CardsProyects"
import { SegundaCards } from "./Components/SegundaCards"
import { Tecnologias } from "./Components/Tecnologias"
import { FooterApp } from "./Components/FooterApp"




export const App = () => {

  return(
    <div className="container1 dark text-foreground bg-background" >

    <PortafolioNavbar/>

    <br/>

    <PortafolioInicio/>

    <br/>
    <br/>
    <h3 className="container_inicio"> Mis Habilidades</h3>

    {/* <SegundaCards/> */}

    <br/>
    <Tecnologias/>

    <h3 className="container_inicio"> Mis Proyectos...</h3>

    <CardsProyects/>
    
    <FooterApp/>

    
    </div>
  )
}