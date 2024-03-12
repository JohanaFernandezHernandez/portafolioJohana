import { Button } from "@nextui-org/react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export const PdfDownloader = () => {

  return(
    <Button color="secondary">
      <ArrowDownwardIcon/>
      <a href="/assets/Doc_CV.pdf" download="Doc_CV.pdf">
        Descarga_CV
      </a>
    </Button>
  );

};