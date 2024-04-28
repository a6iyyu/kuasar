import React from "react";

const Summary: React.FC = () => {
  return (
    <main className="summary-section mx-auto mb-20 h-fit w-4/5 cursor-default">
      <h3 className="cursor-default text-center text-4xl font-bold text-gray-50">
        Summary
      </h3>
      <hr className="my-2 h-0.5 w-full text-gray-50" />
      <section className="grid grid-cols-1 place-items-start gap-y-8 xl:grid-cols-3 xl:gap-x-8">
        <h5 className="text-justify font-normal leading-loose text-gray-50">
          Earth, home to billions of living beings, holds a myriad of
          interesting facts waiting to be learned. Beneath its blue and green
          surface, there are some unexpected quirks. First, did you know that
          Earth is the only planet in our solar system that has liquid water on
          its surface? This water, which covers about 71% of Earth's surface,
          makes it an oasis of life in the dry expanse of the cosmos.
        </h5>
        <h5 className="text-justify font-normal leading-loose text-gray-50">
          Secondly, the Earth has an incredibly strong magnetic field, like an
          invisible shield that protects us from harmful radiation from the Sun.
          This magnetic field helps maintain Earth's atmosphere, allowing life
          to thrive and adapt. Third, Earth has one natural satellite, the Moon.
          This moon, which is about 3,474 kilometers in diameter, plays an
          important role in regulating ocean tides and influencing Earth's
          rotation.
        </h5>
        <h5 className="text-justify font-normal leading-loose text-gray-50">
          Fourth, Earth has the highest mountain in the solar system, Mount
          Everest, which rises 8,848.86 meters above sea level. On the other
          hand, Earth also has the deepest place, the Mariana Trench, which
          reaches a depth of 10,994 meters. Fifth, Earth has a wide variety of
          climates, from the heat of the Sahara desert to the cold of the North
          Pole. This diversity of climates supports incredible biodiversity,
          with millions of species of plants and animals living all over the
          planet.
        </h5>
      </section>
    </main>
  );
};

export default Summary;