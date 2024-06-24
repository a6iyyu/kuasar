import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const WebsiteMeta: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Rodgen, explore the world with one click on a single page application." />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Rodgen | List Of Countries</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Helmet>
    </HelmetProvider>
  );
};

export default WebsiteMeta;