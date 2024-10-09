import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #111729;
  padding: 24px;
  margin-top: 80px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: stretch;
  border: solid 1px #97a3b6;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  column-gap: 24px;
  width: 60%;
  margin-bottom: 10%;
  box-sizing: border-box;
`;

const MovieInfoContainer = styled.div`
  display: grid;
`;

const MovieImage = styled.img`
  width: 250px;
  height: auto;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: #f9f9f9;
  padding: 0;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #97a3b6;
`;

const Information = styled.p`
  font-size: 0.75rem;
  color: #97a3b6;
  margin: 0;
  padding: 0;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface MovieCardProps {
  movieImg: string;
  movieTitle: string;
  movieDesc: string;
  movieDirector: string;
  movieWriters: string;
  movieStars: string;
  rating: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movieImg,
  movieTitle,
  movieDesc,
  movieDirector,
  movieWriters,
  movieStars,
  rating,
}) => {
  return (
    <CardContainer>
      <MovieImage src={movieImg} alt="Picture of the Movie"></MovieImage>
      <MovieInfoContainer>
        <Title>{movieTitle}</Title>
        <Description>{movieDesc}</Description>
        <InformationContainer>
          <Information>
            Director: <strong>{movieDirector}</strong>
          </Information>
          <Information>
            Writers: <strong>{movieWriters}</strong>
          </Information>
          <Information>
            Stars:<strong>{movieStars}</strong>
          </Information>
          <Information>
            IMDb Rating: <strong>{rating}</strong>
          </Information>
        </InformationContainer>
      </MovieInfoContainer>
    </CardContainer>
  );
};

export default MovieCard;
