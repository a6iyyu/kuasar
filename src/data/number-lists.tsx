interface typeNumberLists {
  img: string;
  alt: string;
  start: number;
  end: number;
  title: string;
  width: number;
  description: string,
}

const numberLists: typeNumberLists[] = [
  {
    img: "/continent.svg",
    alt: "Countries",
    start: 0,
    end: 195,
    title: "Countries",
    width: 125,
    description: "There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine.",
  },
  {
    img: "/languages.png",
    alt: "Languages",
    start: 0,
    end: 7e3,
    title: "Languages",
    width: 100,
    description: "With more than 7,000 languages spoken around the world, each country makes its unique contribution to global linguistic diversity. Papua New Guinea has the largest number of languages in the world, with 840 languages spoken.",
  },
  {
    img: "/humans.png",
    alt: "Humans",
    start: 0,
    end: 8e6,
    title: "Humans",
    width: 67.5,
    description: "Based on data from the World Population Review, the world population reached 8.09 billion on 2024. This number increased by 0.62% compared to the population in 2023 and jumped by 1 billion in just 11 years.",
  },
];

export default numberLists;