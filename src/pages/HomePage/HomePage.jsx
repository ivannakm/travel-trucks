import BgImage from "../../components/BgImage/BgImage";
import Container from "../../components/Container/Container";
import HomePageText from "../../components/HomePageText/HomePageText";

const HomePage = () => {
  return (
    <div>
      <BgImage>
        <Container>
          <HomePageText />
        </Container>
      </BgImage>
    </div>
  );
};

export default HomePage;
