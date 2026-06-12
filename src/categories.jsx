import { Link, Outlet } from "react-router-dom";

export function SportsBikes() {
  return (
    <div>
      <h3>Sports Bikes</h3>
      <ul>
        <li>Yamaha R15 V4 - ₹1,85,000</li>
        <li>KTM RC 200 - ₹2,20,000</li>
        <li>TVS Apache RTR 310 - ₹2,50,000</li>
      </ul>
    </div>
  );
}

export function CruiserBikes() {
  return (
    <div>
      <h3>Cruiser Bikes</h3>
      <ul>
        <li>Royal Enfield Classic 350 - ₹2,10,000</li>
        <li>Honda Hness CB350 - ₹2,15,000</li>
        <li>Royal Enfield Hunter 350 - ₹1,75,000</li>
      </ul>
    </div>
  );
}

export function AdventureBikes() {
  return (
    <div>
      <h3>Adventure Bikes</h3>
      <ul>
        <li>Himalayan 450 - ₹2,85,000</li>
        <li>KTM Adventure 390 - ₹3,40,000</li>
        <li>Hero Xpulse 200 - ₹1,65,000</li>
      </ul>
    </div>
  );
}

export function ElectricBikes() {
  return (
    <div>
      <h3>Electric Bikes</h3>
      <ul>
        <li>Ultraviolette F77 - ₹3,80,000</li>
        <li>Revolt RV400 - ₹1,40,000</li>
      </ul>
    </div>
  );
}

export function Scooters() {
  return (
    <div>
      <h3>Scooters</h3>
      <ul>
        <li>Honda Activa 6G - ₹80,000</li>
        <li>TVS Jupiter - ₹85,000</li>
      </ul>
    </div>
  );
}

export function TouringBikes() {
  return (
    <div>
      <h3>Touring Bikes</h3>
      <ul>
        <li>Kawasaki Versys 650 - ₹7,80,000</li>
        <li>BMW G 310 GS - ₹3,30,000</li>
      </ul>
    </div>
  );
}

export function Accessories() {
  return (
    <div>
      <h3>Bike Accessories</h3>
      <ul>
        <li>Helmet - ₹3,000</li>
        <li>Riding Jacket - ₹5,000</li>
        <li>Riding Gloves - ₹1,500</li>
      </ul>
    </div>
  );
}

function Categories() {
  return (
    <div>
      <h2>Bike Categories</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <Link to="sports">Sports Bikes</Link>

        <Link to="cruiser">Cruiser Bikes</Link>

        <Link to="adventure">Adventure Bikes</Link>

        <Link to="electric">Electric Bikes</Link>

        <Link to="scooters">Scooters</Link>

        <Link to="touring">Touring Bikes</Link>

        <Link to="accessories">Accessories</Link>
      </div>

      <hr />

      <Outlet />
    </div>
  );
}

export default Categories;