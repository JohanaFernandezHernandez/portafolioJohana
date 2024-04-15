import React from "react";
import {Card,CardBody,CardFooter,Divider,Link,Image, CardHeader} from "@nextui-org/react";
import { cardData } from "../Data/Proyects";

export const CardsProyects = () => {

  return (
    <div className="gap-4 container_inicio proyectos">
      {cardData.map((data, index) => (
        <Card key={index} className="container_card align-center">
          <CardHeader className="container_imagen p-0 m-0">
            <Image
            className="image_card2 w-full rounded-tl-8 rounded-tr-8 rounded-bl-none rounded-br-none bg-cover bg-center"
            removeWrapper="true"
            alt={`${data.name} logo`}
            src={data.logoSrc}
            radius="none"
            
            />
          </CardHeader>

          <CardBody className="container_descripcion p-4">
            <h2 className="mb-4 text-basetext-orange-800 font-semibold">{data.name}</h2>
            <p className="descripcion_card">{data.description}</p>
          </CardBody>

          <CardFooter>
            <Link isExternal showAnchorIcon href={data.githubLink}>
              visita el sitio
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
