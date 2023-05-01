import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export const metadata = {
  title: "All Posts",
  description: "모든 게시글",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <FilterablePosts posts={posts} categories={categories}></FilterablePosts>
  );
}
