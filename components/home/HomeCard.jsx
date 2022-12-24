import {
  ProductCards,
  ProductCard,
  ProductTitle,
  ImageWrapper,
  ProductButton,
} from "./HomeCardsStyles";

const HomeCard = ({ header, image, text, footer, pager }) => {
  return (
    <ProductCard>
      <div>
        <ProductTitle>{header}</ProductTitle>
      </div>
      <ImageWrapper>
        <img src={image} alt="" />
      </ImageWrapper>
      <div style={{ marginBottom: "16px" }}>
        <p>{text}</p>
      </div>
      <div style={{ marginBottom: "72px" }}>
        <ProductButton type="button">Contact Us</ProductButton>
        <ProductButton href={pager} type="button">
          Read more ...
        </ProductButton>
      </div>
    </ProductCard>
  );
};

export default HomeCard;
