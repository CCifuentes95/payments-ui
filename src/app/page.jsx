import { Container } from "../components/Container";

const host = "https://ntk3o6xkli.execute-api.us-east-1.amazonaws.com";
async function fetchUser(id) {
  const url = `${host}/users/${id}?`;
  const includeAccount = new URLSearchParams({
    includeAccount: true,
  });
  const response = await fetch(url + includeAccount);
  const data = await response.json();
  return data;
}

async function fetchMovements(accountId){
  const url = `${host}/account/${accountId}/movements`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default async function Home() {
 
  const user = await fetchUser(5);
  const movements = await fetchMovements(user.accountId);

  return (
    <main className="container flex justify-center mx-auto my-8">
      <Container user={user} movements={movements}/>
    </main>
  );
}
