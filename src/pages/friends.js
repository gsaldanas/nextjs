import { useState } from "react";
import db from "../db";
import { nest } from "@/helpers";
const Friends = ({ friends }) => {
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
   await fetch('/api/mail',{
    method: "POST",
    body: JSON.stringify({
      input: input,
      message: area
    })
   })
  };
  return (
    <>
      <div>
        <h1>Data from MySQL</h1>
        <ul>
          {friends.map(({ id, name, age, hobbies }) => (
            <details key={id}>
              <summary>
                {name} - {age}
              </summary>
              <ul>
                {hobbies &&
                  Object.values(hobbies).map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
              </ul>
            </details>
          ))}
        </ul>
      </div>
      <div>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            name="subject"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <textarea
            name="message"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          ></textarea>
          <input type="submit" value="sendmail" />
        </form>
      </div>
    </>
  );
};

export default Friends;

export async function getStaticProps() {
  const friendsData = await db("friends_has_hobbies")
    .join("friends", "friends.id", "friends_has_hobbies.friends_id")
    .join("hobbies", "hobbies.id", "friends_has_hobbies.hobbies_id")
    .select(
      "friends.id",
      "friends.name",
      "friends.age",
      "friends.image",
      "hobbies.hobby",
      "hobbies.id AS hobbyId"
    );

  const friendsDefinition = [
    {
      id: { column: "id", type: "NUMBER" },
      name: "name",
      age: { column: "age", type: "NUMBER" },
      image: "image",
      hobbies: [
        {
          id: { column: "hobbyId", type: "NUMBER" },
          name: "hobby",
        },
      ],
    },
  ];

  const friends = nest(friendsData, friendsDefinition);
  //   // Fetch friends' data from the "Friends" table
  //   const friends = await db.select("id", "name", "age").from("friends");

  //   // Initialize an empty object to store friend-hobby relationships
  //   const friendHobbies = {};

  //   // Fetch friend-hobby relationship data from the "Friends_has_Hobbies" table
  //   const friendsHasHobbies = await db
  //     .select("friends_id", "hobbies_id")
  //     .from("friends_has_hobbies");

  //   // Fetch hobbies' data from the "Hobbies" table
  //   const hobbies = await db.select("id", "hobby").from("hobbies");

  //   // Process friend-hobby relationships
  //   friendsHasHobbies.forEach(({ friends_id, hobbies_id }) => {
  //     // Check if the friend's ID exists as a key in the "friendHobbies" object
  //     if (!friendHobbies[friends_id]) {
  //       // If the key doesn't exist, initialize an empty array for the friend's hobbies
  //       friendHobbies[friends_id] = [];
  //     }

  //     // Find the corresponding hobby object using the hobby's ID
  //     const hobby = hobbies.find((h) => h.id === hobbies_id);

  //     // If a hobby object is found, push it into the array associated with the friend's ID
  //     if (hobby) {
  //       friendHobbies[friends_id].push(hobby);
  //     }
  //   });

  return {
    props: { friends },
    revalidate: 60,
  };
}
