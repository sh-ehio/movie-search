import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #111729;
  padding: 24px;
  margin-top: 40px;
`;

const MovieInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 2.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
`;

const Title = styled.p`
  font-size: 1.5rem;
`;

interface MovieCardProps {
  movieImg: string;
  movieTitle: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movieImg, movieTitle }) => {
  return (
    <CardContainer>
      <img src={movieImg} alt="Picture of the Movie"></img>
      <MovieInfoContainer>
        <Title>{movieTitle}</Title>
        <p>Placeholder Tags</p>
      </MovieInfoContainer>
    </CardContainer>
  );
};

export default MovieCard;
