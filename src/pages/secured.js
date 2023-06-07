import { securePage } from "@/helpers";

const Secured = ({ user }) => {
  return (
    <div>
      <h1>this is a secured page</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  );
};

export default Secured;

export async function getServerSideProps(ctx) {
  const user = securePage(ctx);
  return {
    props: {
      user,
    },
  };
}
