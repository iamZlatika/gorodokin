import Sert2014 from "../images/certificates/2014.jpg";
import Sert2016 from "../images/certificates/2016.jpg";
import Sert2019S from "../images/certificates/2019-1.jpg";
import Sert2019N from "../images/certificates/2019-2.jpg";
import Sert2020 from "../images/certificates/2020.jpg";
import Sert2021A from "../images/certificates/2021-2.jpg";
import Sert2021F from "../images/certificates/2021.jpg";
import Sert2022M from "../images/certificates/2022.jpg";
import Sert2022F from "../images/certificates/2022-2.jpg";

interface ICertificates {
  year: number;
  text: string;
  image: any;
  position: string;
}

export const certificates: ICertificates[] = [
  {
    year: 2014,
    text: "interface:certificates14",
    image: Sert2014,
    position: "vertical",
  },
  {
    year: 2016,
    text: "interface:certificates16",
    image: Sert2016,
    position: "vertical",
  },
  {
    year: 2019,
    text: "interface:certificates19",
    image: Sert2019S,
    position: "vertical",
  },
  // {
  //   year: 2019,
  //   text: "interface:certificates20-1",
  //   image: Sert2019N,
  //   position: "horizontal",
  // },
  {
    year: 2020,
    text: "interface:certificates20",
    image: Sert2020,
    position: "horizontal",
  },
  {
    year: 2021,
    text: "interface:certificates21-1",
    image: Sert2021F,
    position: "vertical",
  },
  {
    year: 2021,
    text: "interface:certificates21-2",
    image: Sert2021A,
    position: "horizontal",
  },
  {
    year: 2022,
    text: "interface:certificates22-1",
    image: Sert2022F,
    position: "horizontal",
  },
  {
    year: 2022,
    text: "interface:certificates22-2",
    image: Sert2022M,
    position: "horizontal",
  },
];
