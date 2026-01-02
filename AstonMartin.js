import "./AstonMartin.css";

const drivers = [
  {
    name: "Fernando Alonso",
    img: "Fernando_Alonso.png",
    desc: "Two-time World Champion, vast experience in Formula 1",
  },
  {
    name: "Lance Stroll",
    img: "Lance_Stroll.png",
    desc: "Canadian driver, consistent and competitive",
  },
];

const milestones = [
  { year: "2021", text: "Aston Martin returns to Formula 1 as a works team." },
  { year: "2023", text: "Multiple podium finishes and strong performance." },
  { year: "2024", text: "Regular front-running contender." },
  { year: "2025", text: "Continued development and championship ambition." },
];

function AstonMartin() {
  return (
    <>
      <header className="hero">
        <div>
          <h1>
            <span className="green">ASTON MARTIN</span> F1 TEAM
          </h1>
          <p>British Elegance in Formula 1</p>
        </div>
      </header>

      <section className="about">
        <h2 className="section-title">Team Origins</h2>
        <p>
          Aston Martin returned to Formula 1 in 2021, combining British racing
          heritage with modern technology. Based at Silverstone, the team aims
          to fight at the front of the grid with innovation and ambition.
        </p>
      </section>

      <section className="timeline">
        <h2 className="section-title">Key Milestones</h2>
        <div className="grid">
          {milestones.map((item, index) => (
            <div className="milestone" key={index}>
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="drivers">
        <h2 className="section-title">Drivers</h2>
        <div className="grid">
          {drivers.map((driver, index) => (
            <div className="driver-card" key={index}>
              <img src={driver.img} alt={driver.name} />
              <h3>{driver.name}</h3>
              <p>{driver.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Car</h2>
        <div className="fotot">
          <h1 className="bg-text">AMR25</h1>
          <img src="2025-astonmartin.png" alt="Aston Martin F1 car" className="car-img" />
        </div>
      </section>

      <footer>
        © 2025 Aston Martin F1 Team – Student Project
      </footer>
    </>
  );
}

export default AstonMartin;
