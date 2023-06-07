import Button from "@/components/Button/Button";
import Userfront from "@userfront/react";
import { useUser } from "@/helpers";

const Index = () => {
 
  return (
    <>
      <h1>Home</h1>
   
      <Button>Click me</Button>
      <Button active secondary name="test">Click me</Button>
      <Button  disabled={true}>Click me</Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        consequuntur ab atque veniam at mollitia suscipit quas fugit vel totam
        corrupti, aspernatur, fugiat provident natus saepe. Tempora rerum
        aspernatur ipsa!
      </p>
    </>
  );
};

export default Index;
