import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import { cardData } from "../Data/Proyects";

export const SegundaCards = () => {

  return (
    <section className="gap-4 container_inicio proyectos ">
      {cardData.map((data, index) => (
        <Card key={index} className="py-4 flex">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{data.name}</p>
            <small className="text-default-500">{data.website}</small>
            <h4 className="font-bold text-large">{data.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={data.logoSrc} // Usa el logoSrc de los datos
              width={270}
            />
          </CardBody>
        </Card>
      ))}
    </section>
  );
};
