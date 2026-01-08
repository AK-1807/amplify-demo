"use client";

import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "@/src/aws-exports";
import { generateClient } from "aws-amplify/api";
import "./page.module.css";
import Image from "next/image";

Amplify.configure(awsExports);


const client = generateClient();

const PAGE_ID = "d2ef6fb9-b7c0-4ae1-bd3b-03121a31494c";

const PAGE_QUERY = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      HeroBanner {
        items {
          Title
          SubTitle
          Background_Image
        }
      }
      Introductions {
        items {
          Title
          Subtitle
        }
      }
      Title
      slug
    }
  }
`;

export default function Home() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    async function fetchPage() {
      const res: any = await client.graphql({
        query: PAGE_QUERY,
        variables: { id: PAGE_ID },
      });
      console.log(res )
      setPage(res.data.getPage);
    }

    fetchPage();
  }, []);

  if (!page) return <h2>Loading…</h2>;

  const banner = page?.HeroBanner?.items?.[0]

  return (
    <main>
     <div className="container">
      <h1>{page.Title}</h1>
      </div>

      {banner && (
        <section className="banner">
          <div className="bg-img overlay">
            <Image src={banner.Background_Image} alt="banner" width={1000} height={600} quality={50}/>
          </div>
          <div className="container">
            <h1>{banner.Title}</h1>
            <p>{banner.SubTitle}</p>
          </div>
        </section>
      )}
    </main>
  );
}
