import { useQuantity } from "../hooks/useQuantity";
import "./styles.css";
export function Item(props) {
  const [quantity, somar, subtrair, reset] = useQuantity({
    min: 0,
    max: 10,
    initial: 5,
    param: Number(props.param),
  });

  return (
    <div className="Item">
      <p className="label">{props.label}</p>
      <p className="qty">Quantidade: {quantity}</p>
      <button onClick={subtrair}>-</button>
      <button onClick={reset}>Restaurar</button>
      <button onClick={somar}>+</button>
    </div>
  );
}
