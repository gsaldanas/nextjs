/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { slug } from '@/helpers'
const index = ({cocktails}) => {
  return (
    <div>
      <h1>Retrieving cocktails with incremental static regeneration</h1>
      <h2>CONTRA</h2>
      <ol>
        <li>stale date only within certain timeframe</li>
      </ol>
      <h2>PRO</h2>
      <ol>
        <li>seo</li>
        <li>1 call</li>
        <li>speed</li>
      </ol>
      <div className="cocktails">
        {
          cocktails.map(({ idDrink, strDrinkThumb, strDrink }) => (
            <article key={idDrink}>
              <Link href={`/isr/detail/${idDrink}-${slug(strDrink)}`}>
                <img src={strDrinkThumb} alt={strDrink} />
                <p>{strDrink}</p>
              </Link>
            </article>
          ))}
      </div>
    </div>
  )
}

export async function getStaticProps(){
   const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
   const {drinks: cocktails} = await response.json()
    return{
        props:{
         cocktails,
        },
        revalidate : 60 * 60 * 24,//data maximum 1 day stale
    }
}

export default index