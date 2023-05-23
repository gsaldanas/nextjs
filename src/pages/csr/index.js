import Link from "next/link";
import React, { useEffect, useState } from "react";
import {slug} from "../../helpers";

const Index = () => {
  const [cocktails, setCocktails] = useState({ data: null, loading: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        setCocktails({ data, loading: false });
        console.log(data);
      } catch (error) {
        console.error("Error fetching cocktail data:", error);
        setCocktails({ data: null, loading: false });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Retrieving cocktails with Client Side Rendering</h1>
            <h2>contra</h2>
            <ol>
              <li>seo: cocktaillist not index google</li>
              <li>every page refresh data is received(api call)</li>
              <li>if cocktail api down =&gt; no cocktail</li>
              <li>visual loading / it takes time</li>
            </ol>
            <h2>pro</h2>
            <ol>
              <li>vercel hosting not overloaded</li>
              <li>data always accurate / up to date</li>
            </ol>
      {cocktails.loading ? (
        <p>Loading cocktails...</p>
      ) : (
        cocktails.data && (
          <div>
            
            <div className="cocktails">
              {cocktails.data.drinks.map(({ idDrink, strDrinkThumb,strDrink }) => (
                <article key={idDrink}>
                  <Link href={`/csr/detail/${idDrink}-${slug(strDrink)}`}>
                  <img src={strDrinkThumb} alt={strDrink} />
                  <p>{strDrink}</p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Index;
