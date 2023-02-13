import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import "./Description.sass";
import human from "../../../../assets/descriptions/forest.png";
import { MapSlider } from "../../../sliders/MapSlider/slider";
import { CharSlider } from "../../../sliders/CharSlider/slider";
import { MapIconSlider } from "../../../sliders/MapIconSlider/slider";
import { CharIconSlider } from "../../../sliders/CharIconSlider/slider";

// spells imgs
import sp1 from "../../../../assets/descriptions/spells/1.webp";
import sp2 from "../../../../assets/descriptions/spells/2.webp";
import sp3 from "../../../../assets/descriptions/spells/3.webp";
import sp4 from "../../../../assets/descriptions/spells/4.webp";
import sp5 from "../../../../assets/descriptions/spells/5.webp";
import sp6 from "../../../../assets/descriptions/spells/6.webp";
import sp7 from "../../../../assets/descriptions/spells/7.webp";
import sp8 from "../../../../assets/descriptions/spells/8.webp";
import sp9 from "../../../../assets/descriptions/spells/9.webp";
import sp10 from "../../../../assets/descriptions/spells/10.webp";
import sp11 from "../../../../assets/descriptions/spells/11.webp";
import sp12 from "../../../../assets/descriptions/spells/12.webp";
import sp13 from "../../../../assets/descriptions/spells/13.webp";
import sp14 from "../../../../assets/descriptions/spells/1.webp";
import sp15 from "../../../../assets/descriptions/spells/2.webp";
import sp16 from "../../../../assets/descriptions/spells/3.webp";

export function Description() {
  const [curMap, setCurMap] = useState(1);
  const [curChar, setCurChar] = useState(1);

  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 1450, 1500, 2500],
    ["0", "0.8", "0.1", "1"]
  );

  const incr_map = (number: number) => {
    if (number == 3) {
      return setCurMap(1);
    } else {
      return setCurMap((ch) => ch + 1);
    }
  };

  const decr_map = (number: number) => {
    if (number == 1) return setCurMap(3);
    else return setCurMap((ch) => ch - 1);
  };

  const incr_char = (number: number) => {
    if (number == 3) {
      return setCurChar(1);
    } else {
      return setCurChar((ch) => ch + 1);
    }
  };

  const decr_char = (number: number) => {
    if (number == 1) return setCurChar(3);
    else return setCurChar((ch) => ch - 1);
  };

  // spell conditions
  let first_spell;
  if (curMap == 1 && curChar == 1) {
    first_spell = (
      <>
        <img src={sp5} alt="spell img" />
        <div className="green">
          <p>+10% movement speed</p>
        </div>
      </>
    );
  }

  if (curMap == 1 && curChar == 2) {
    first_spell = (
      <>
        <img src={sp2} alt="spell img" />
        <div className="red">
          <p>+20% power</p>
        </div>
      </>
    );
  }

  if (curMap == 1 && curChar == 3) {
    first_spell = (
      <>
        <img src={sp3} alt="spell img" />
        <div className="yellow">
          <p>+5% loot bonus</p>
        </div>
      </>
    );
  }

  if (curMap == 2 && curChar == 1) {
    first_spell = (
      <>
        <img src={sp4} alt="spell img" />
        <div className="green">
          <p>+10% movement speed</p>
        </div>
      </>
    );
  }

  if (curMap == 2 && curChar == 2) {
    first_spell = (
      <>
        <img src={sp1} alt="spell img" />
        <div className="red">
          <p>+20% power</p>
        </div>
      </>
    );
  }

  if (curMap == 2 && curChar == 3) {
    first_spell = (
      <>
        <img src={sp6} alt="spell img" />
        <div className="yellow">
          <p>+5% loot bonus</p>
        </div>
      </>
    );
  }

  if (curMap == 3 && curChar == 1) {
    first_spell = (
      <>
        <img src={sp7} alt="spell img" />
        <div className="green">
          <p>+10% movement speed</p>
        </div>
      </>
    );
  }

  if (curMap == 3 && curChar == 2) {
    first_spell = (
      <>
        <img src={sp8} alt="spell img" />
        <div className="red">
          <p>+20% power</p>
        </div>
      </>
    );
  }

  if (curMap == 3 && curChar == 3) {
    first_spell = (
      <>
        <img src={sp8} alt="spell img" />
        <div className="yellow">
          <p>+5% loot bonus</p>
        </div>
      </>
    );
  }

  let sec_spell;
  if (curMap == 1 && curChar == 1) {
    sec_spell = (
      <>
        <img src={sp13} alt="spell img" />
        <div className="green">
          <p>+10% movement speed</p>
        </div>
      </>
    );
  }

  if (curMap == 1 && curChar == 2) {
    sec_spell = (
      <>
        <img src={sp10} alt="spell img" />
        <div className="red">
          <p>+20% power</p>
        </div>
      </>
    );
  }

  if (curMap == 1 && curChar == 3) {
    sec_spell = (
      <>
        <img src={sp11} alt="spell img" />
        <div className="yellow">
          <p>+5% loot bonus</p>
        </div>
      </>
    );
  }

  if (curMap == 2 && curChar == 1) {
    sec_spell = (
      <>
        <img src={sp12} alt="spell img" />
        <div className="green">
          <p>+10% movement speed</p>
        </div>
      </>
    );
  }

  if (curMap == 2 && curChar == 2) {
    sec_spell = (
      <>
        <img src={sp9} alt="spell img" />
        <div className="red">
          <p>+20% power</p>
        </div>
      </>
    );
  }

  if (curMap == 2 && curChar == 3) {
    sec_spell = (
      <>
        <img src={sp14} alt="spell img" />
        <div className="yellow">
          <p>+5% loot bonus</p>
        </div>
      </>
    );
  }

  if (curMap == 3 && curChar == 1) {
    sec_spell = (
      <>
        <img src={sp15} alt="spell img" />
        <div className="green">
          <p>+10% movement speed</p>
        </div>
      </>
    );
  }

  if (curMap == 3 && curChar == 2) {
    sec_spell = (
      <>
        <img src={sp16} alt="spell img" />
        <div className="red">
          <p>+20% power</p>
        </div>
      </>
    );
  }

  if (curMap == 3 && curChar == 3) {
    sec_spell = (
      <>
        <img src={sp1} alt="spell img" />
        <div className="yellow">
          <p>+5% loot bonus</p>
        </div>
      </>
    );
  }

  // spell conditions

  return (
    <>
      <motion.section style={{ opacity }} className="description">
        <MapSlider />
        <CharSlider />

        {/* Spells */}
        <div className="spells">
          <div className="first-spell">
            <div className=" square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">{first_spell}</div>
            </div>
          </div>

          <div className="second-spell">
            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">{sec_spell}</div>
            </div>
          </div>

          <div className="third-spell">
            <div className=" square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">{first_spell}</div>
            </div>
          </div>

          <div className="fourth-spell">
            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">{sec_spell}</div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="descr-block">
          <h2>GAME DESCRIPTION</h2>
          <h3>
            A new era of play2earn.
            <br /> Explore the world and find the treasure!
          </h3>
          <div className="maps-icon">
            <button
              onClick={() => {
                decr_map(curMap);
              }}
              className="swiper-button-map-prevv"
            >
              <code>&lt; </code>
            </button>

            <MapIconSlider />

            <button
              onClick={() => {
                incr_map(curMap);
              }}
              className="swiper-button-map-nextt"
            >
              <code>&gt; </code>
            </button>
          </div>
          <div className="chars-icon">
            <button
              onClick={() => {
                decr_char(curChar);
              }}
              className="swiper-button-char-prevv"
            >
              <code> &lt; </code>
            </button>

            <CharIconSlider />

            <button
              onClick={() => {
                incr_char(curChar);
              }}
              className="swiper-button-char-nextt"
            >
              <code> &gt; </code>
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
