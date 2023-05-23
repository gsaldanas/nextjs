import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const [data, setData] = useState({ data: null, loading: true });

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.slug) {
        try {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
              router.query.slug.split("-")[0]
            }`
          );
          const { drinks } = await response.json();
          setData({ data: drinks[0], loading: false });
          console.log(drinks[0]);
        } catch (error) {
          console.error("Error fetching cocktail data:", error);
        }
      }
    };

    fetchData();
  }, [router]);

  if (data.loading) {
    return <p>Loading...</p>;
  }

  const { strDrink, strInstructions, strDrinkThumb } = data.data;

  return (
    <>
      <h1>Detail</h1>
      <h2>id:{router.query.slug.split("-")[0]}</h2>
      <div>
        <h3>{strDrink}</h3>
        <p>{strInstructions}</p>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
    </>
  );
};

export default Detail;
