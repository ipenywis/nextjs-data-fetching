import { use } from "react";
import axios from "axios";
import { Product } from "../../components/product";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

//Export this to put a default fetching config (does not override the fetch)
export const dynamic = "force-dynamic";

//🌨️ Next.js 12 implementation
async function getServerSideProps(context: any) {
  const id = context.params?.id;
  const productsResponse = await fetch("http://localhost:9000/products");
  const products = await productsResponse.json();

  return {
    props: {
      products,
    },
  };
}

async function fetchProducts() {
  const productsResponse = await fetch("http://localhost:9000/products", {
    // cache: "force-cache", ///< SSG getStaticSideProps
    cache: "no-store", ///< SSR getServerSideProps
    // next: {
    //   revalidate: 20, ///< ISR revalidate
    // },
  });

  // await wait(4000);

  console.log("fetching Products");

  return productsResponse.json();
}

export default async function Page() {
  const products = await fetchProducts();

  console.log("Rerendering Products Component");
  console.log("Number of Products: ", products.length);

  return (
    <div className="flex flex-wrap w-full mt-8 justify-center">
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
