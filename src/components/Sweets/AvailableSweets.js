import Card from "../UI/Card";
import SweetItem from "./SweetItem/SweetItem";
import styles from "./AvailableSweets.module.css";

import Img1 from "../../assets/images/image1.jpg";
import Img2 from "../../assets/images/image2.jpg";
import Img3 from "../../assets/images/image3.jpg";
import Img4 from "../../assets/images/image4.jpg";
import Img5 from "../../assets/images/image5.jpg";
import Img6 from "../../assets/images/image6.jpg";

const SWEETS_DATA = [
  {
    id: "s1",
    name: "Orzech z karmelem",
    description:
      "biszkopt kawowy z cytryna, mus karmelowy, krem karmelowo-orzechowy",
    price: 20,
    image: Img1,
  },
  {
    id: "s2",
    name: "Financier",
    description:
      "biszkopt kawowy z cytryna, mus karmelowy, krem karmelowo-orzechowy",
    price: 17,
    image: Img2,
  },
  {
    id: "s3",
    name: "Cherry",
    description:
      "marcepan, jagody, biszkopt kawowy, wiśnie, mus rumowy, marcepan, jagody",
    price: 20,
    image: Img3,
  },
  {
    id: "s4",
    name: "Madagaskar",
    description:
      "biszkopt kawowy, krem baileys, jadody, mus na czekoladzie madagaskar",
    price: 22,
    image: Img4,
  },
  {
    id: "s5",
    name: "Passion",
    description:
      "ciasto daktylowo-kokosowe, żelka mango-marakuja, mus kokosowy",
    price: 25,
    image: Img5,
  },
  {
    id: "s6",
    name: "Orange",
    description:
      "biszkopt z orzechów włoskich, żelka z pamarańczy, mus cynamowy",
    price: 24,
    image: Img6,
  },
];

const AvailableSweets = () => {
  const sweetsList = SWEETS_DATA.map((sweet) => (
    <SweetItem
      key={sweet.id}
      id={sweet.id}
      name={sweet.name}
      description={sweet.description}
      price={sweet.price}
      image={sweet.image}
    />
  ));
  return (
    <section className={styles.sweets}>
      <Card>
        <div className={styles.sweets}>
          <h2>Mono-Desery</h2>
        </div>

        <ul>{sweetsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableSweets;
