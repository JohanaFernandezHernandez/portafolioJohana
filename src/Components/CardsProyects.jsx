import React from "react";
import {Card,CardHeader,CardBody,CardFooter,Divider,Link,Image,} from "@nextui-org/react";
import { cardData } from "../Data/Proyects";

export const CardsProyects = () => {

  return (
    <div className="gap-4 container_inicio proyectos">
      {cardData.map((data, index) => (
        <Card key={index} className="container_card align-center">
          {/* <CardHeader className="flex justify-center h-60"> */}
          <Image
            className="image_card2 p-2"
            alt={`${data.name} logo`}
            // height={276}
            //   radius="sm"
            src={data.logoSrc}
            // width={276}
          />
          {/* </CardHeader> */}

          <Divider />
          <CardBody>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </CardBody>
          <Divider />
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
