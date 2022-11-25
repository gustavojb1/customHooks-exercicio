import { Item } from "./Item";
import { useQuantity } from "../hooks/useQuantity";

export const Cart = () => {
  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item label="My produto massa" param="1" />
      <Item label="My produto massa" param="2" />
    </div>
  );
};
