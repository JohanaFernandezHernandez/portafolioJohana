import { Button } from "@nextui-org/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Redes = () => {
  const linkedinUrl =
    "https://www.linkedin.com/in/johana-fernandez-hernandez-b0446a1b8/";
  const LinkGitHub = "https://github.com/JohanaFernandezHernandez";

  return (
    <div>

      <a className="redes" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <Button isIconOnly color="primary">
          <LinkedInIcon />
        </Button>
      </a> 


      <a href={LinkGitHub} target="_blank" rel="noopener noreferrer">
        <Button isIconOnly
          color="default"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Button>
      </a>
    </div>
  );
};
