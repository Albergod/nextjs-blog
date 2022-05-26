import React from "react";
import Lyaout from "../../components/lyaout";
// import Link from "next/link";
// import Image from "next/image";

{
  /* <Image src={"/img/frag.jpg"} width={500} height={500} alt='mi imagen' />
<Link href='/'>
  <a>volver al inicio</a>
</Link> */
}

const primerBlog = ({ data }) => {
  return (
    <Lyaout>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </Lyaout>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
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

export default primerBlog;
