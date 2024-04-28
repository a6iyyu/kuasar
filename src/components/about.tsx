import React from "react";

const About: React.FC = () => {
  return (
    <main className="about-section mx-auto mb-4 flex h-fit w-4/5 flex-col lg:mb-32">
      <h3 className="cursor-default text-center text-4xl font-bold text-gray-50">
        What's Rodgen?
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
        <h5 className="cursor-default text-justify font-normal text-gray-50">
          Have you ever felt confused when looking for information about a
          country? This often happens especially to people who like to travel
          abroad or students who are majoring in geography. Now, you don't need
          to worry because Rodgen is the solution!
        </h5>
        <h5 className="cursor-default text-justify font-normal text-gray-50">
          Rodgen provides short, concise and quality information about the
          countries of the world. You can search over 200 countries with just
          one touch. What are you waiting for, Rodgen is with you on every trip!
        </h5>
      </div>
    </main>
  );
};

export default About;