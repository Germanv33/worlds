import "./intro.sass";
import intro from "../../../../assets/intro/Map.png";

export function Intro() {
  return (
    <>
      <section className="intro">
        <img src={intro} alt="human" />
        <div className="descr-block">
          <h2>OPEN WORLD INTRO</h2>
        </div>
      </section>
    </>
  );
}
