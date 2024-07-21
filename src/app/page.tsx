import { db } from "@/server/db";

export const dynamic = "force-dynamic";

const mockImges = [
  "https://utfs.io/f/7e2068cb-158b-4330-ad1d-e99324029703-x1i98b.jpg",
  "https://utfs.io/f/00043b2f-89ea-4106-8c0d-d567ff5a8610-swn5ms.jpg",
  "https://utfs.io/f/d0cf4205-c978-49d3-bfe7-0021f3498541-11u9ok.jpg",
  "https://utfs.io/f/2b4c47e1-c49e-4276-b867-2064bb0f58d3-1feot.jpg",
  "https://utfs.io/f/f6235908-953b-4e55-8f55-6a182fe7c25f-sxa8q0.jpg",
  // "https://utfs.io/f/0f769063-0946-49b3-b185-86ff50b433d9-125c6u.jpg",
  // "https://utfs.io/f/e2e78df0-f373-48aa-ae2b-5b227eeb305f-1axqq.jpg",
  // "https://utfs.io/f/701e8d0d-79a1-4759-8daf-4290868c35a7-129qsj.jpg",
  // "https://utfs.io/f/28df6f9b-2ce1-4fc6-bff3-3ddf9ac5ae6a-15mekq.jpg",
  // "https://utfs.io/f/2b8f8fc1-716b-4416-a8b8-12bd05dc59d2-1s75.jpg",
].map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        {mockImges.map((img) => (
          <div key={img.id} className="h-max w-48">
            <img src={img.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
