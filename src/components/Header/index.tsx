import { Container, Image, LogoText } from "./styles";
import logoImg from "../../assets/Pokeball.png";

export const Header = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <LogoText>Pokédex</LogoText>
    </Container>
  );
};
