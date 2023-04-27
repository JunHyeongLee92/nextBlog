import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  //1. 모든 포스트 데이터를 읽어와야 함
  //복잡한 처리가 필요한 로직은 컴포넌트에서 직접하지 않고 다른 코드에게 전가시킨다
  const posts = await getFeaturedPosts();

  //2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2 className="my-2 text-2xl font-bold">Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
