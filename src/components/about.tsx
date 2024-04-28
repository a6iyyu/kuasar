import React from "react";

const About: React.FC = () => {
  return (
    <main className="about-section mx-auto mb-4 flex h-fit w-4/5 flex-col lg:mb-32">
      <h3 className="cursor-default text-center text-4xl font-bold text-gray-50">
        What's Rodgen?
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
        <h5 className="cursor-default text-justify text-lg font-normal text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ratione nisi accusamus quos rerum perferendis totam animi in fugiat
          veniam repellat, modi aliquam, cupiditate consequatur fugit
          aspernatur, ab deleniti recusandae!
        </h5>
        <h5 className="cursor-default text-justify text-lg font-normal text-gray-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          excepturi fuga voluptate provident non nisi id iste quos porro sed
          tempore blanditiis facilis corrupti quidem neque nobis modi explicabo
          vel?
        </h5>
      </div>
    </main>
  );
};

export default About;