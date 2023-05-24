/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

const Images = ({ results }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>search for images on unsplash</h1>
      <form action="">
        <input
          type="text"
          value={search}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="search unsplash" />
      </form>
      <section className="images">
        {results.map(({ id, urls, description, width, height }) => (
          <article key={id}>
            <Image
              width={650}
              height={(height / width) * 650}
              quality={80}
              key={id}
              priority={false}
              src={urls.regular}
              alt={description || "unknown"}
            />
          </article>
        ))}
      </section>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  let results = [];
  if (query.search) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query.search}&client_id=${process.env.UNSPLASH_ACCESS}`
    );
    const data = await response.json();
    results = data.results;
  }
  return {
    props: {
      results,
    },
  };
}

export default Images;
