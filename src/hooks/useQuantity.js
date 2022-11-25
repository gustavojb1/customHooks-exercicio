import { useState } from "react";

export function useQuantity({ min, max, initial, param }) {
  const [quantity, setQuantity] = useState(initial);

  function somar() {
    if (quantity < max) setQuantity(quantity + param);
  }

  function subtrair() {
    if (quantity > min) setQuantity(quantity - param);
  }

  function reset() {
    setQuantity(initial);
  }

  return [quantity, somar, subtrair, reset];
}
