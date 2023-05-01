import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

//기존 타입에 데이터를 추가한 intersection type
export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

//fetch는 여러번 호출해도 next에서 자체적으로 중복제거를 해주기 때문에 문제없지만,
//DB에 접근하거나 파일을 읽는 함수는 한번 렌더링할때 여러번 호출하면 중복 제거가 안되기 때문에 주의해야한다.

//cache에 동일한 인자를 준다면 한번 호출된 값을 그대로 반환한다.
//단, 서버가 동작하는 모든시간을 캐시하는것이 아니다.
//페이지 렌더링 사이클 내에서만 캐시가 유효하기 때문에 다른 페이지를 렌더링하러 넘어가면 캐시는 초기화된다.
export const getAllPosts = cache(async () => {
  //리액트에서 node api를 사용할 수 있는 이유는? 기본적으로 서버 컴포넌트이기 때문에 서버에서 동작하는 소스코드를 사용할 수 있다
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
