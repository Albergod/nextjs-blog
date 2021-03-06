import Link from "next/link";
import React from "react";
import Lyaout from "../../components/lyaout";

const Index = ({ data }) => {
  return (
    <Lyaout>
      <h1>Lista de blogs</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              <a>
                {id} - {title}
              </a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Lyaout>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Index;
