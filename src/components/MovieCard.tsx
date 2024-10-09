import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #111729;
  padding: 24px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  border: solid 1px #97a3b6;
  border-radius: 10px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  column-gap: 24px;
`;

const MovieInfoContainer = styled.div`
  display: grid;
`;

const MovieImage = styled.img``;

const Title = styled.p`
  font-size: 1.5rem;
  color: white;
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
        <Title>Title{movieTitle}</Title>
        <p>Placeholder Tags</p>
        <Description>{movieDesc}</Description>
        <Information>Director: {movieDirector}</Information>
        <Information>Writers: {movieWriters}</Information>
        <Information>Stars: {movieStars}</Information>
        <Information>IMDb Rating: {rating}</Information>
      </MovieInfoContainer>
    </CardContainer>
  );
};

export default MovieCard;
