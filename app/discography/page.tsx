import styles from "./page.module.scss";
import introduction from "@/apollo/query/introduction.gql"
import { request } from "@/apollo/client";

const body = {
  operationName: "Query",
  query: introduction.loc.source.body,
  variables: {}
};

export default async function Page() {
  return (
    <>
      <div>discography</div>
    </>
  );
}
