import useSWR from "swr";
import { AppType } from "../index";
import { hc } from "hono/client";

const client = hc<AppType>("http://localhost:8787");

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

async function fetcher(key: string) {
  // keyはuseSWR()の第１引数で渡されたURL
  // return fetch(key).then((res) => res.json() as Promise<User | null>);
  const res = await client.overview.$get();
  return await res.json();
}

export const App = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher
  );

  if (error) return <div>エラーです</div>;
  if (isLoading) return <div>読み込み中...</div>;

  return (
    <div>
      <h1>名前：{data?.totalRevenue.value}</h1>
      <h1>メール：{data?.subscriptions.value}</h1>
    </div>
  );
};
