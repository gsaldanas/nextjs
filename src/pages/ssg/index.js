/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { slug } from '@/helpers'
const index = ({cocktails}) => {
  return (
    <div>
      <h1>Retrieving cocktails with STATIC SITE GENERATION</h1>
      <h2>CONTRA</h2>
      <ol>
        <li>existing data could be staled(not up to date)</li>
        <li>after build time new cocktails not included in build</li>
      </ol>
      <h2>PRO</h2>
      <ol>
        <li>data is retrevied only once</li>
        <li>100% cache except for images</li>
        <li>speed!</li>
        <li>if api down still cocktail</li>
        <li>seo</li>
      </ol>
      <div className="cocktails">
        {
          cocktails.map(({ idDrink, strDrinkThumb, strDrink }) => (
            <article key={idDrink}>
              <Link href={`/ssg/detail/${idDrink}-${slug(strDrink)}`}>
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
        }
    }
}

export default index