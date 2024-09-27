import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <img
        className="imagen"
        src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg"
        alt=""
      />
      <div className="texto">
        <h1>Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
}
