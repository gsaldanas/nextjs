import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
const About = () => {
  const [color, setColor] = useState("#000");
  const getRandomColor = () => {
    setColor(randomColor());
  };
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.6.1/randomColor.js"
      onLoad={getRandomColor} />
      <h1>About</h1>
      <button onClick={getRandomColor}>Get new color</button>
      <p style={{backgroundColor: color}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        consequuntur ab atque veniam at mollitia suscipit quas fugit vel totam
        corrupti, aspernatur, fugiat provident natus saepe. Tempora rerum
        aspernatur ipsa!
      </p>
    </>
  );
};

export default About;
