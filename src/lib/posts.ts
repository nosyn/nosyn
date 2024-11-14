import path from 'node:path';
import fs from 'node:fs';

export const POSTS_PATH = path.join(process.cwd(), 'src', 'app', 'posts');

export const getMarkdownFileMetadata = async (filePath: string) => {
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');

  return {
    filename: path.basename(filePath),
    post: {
      title: 'Title',
    },
  };
};

export const getPosts = async () => {
  const posts = [];
  for (const file of await fs.promises.readdir(
    path.join(process.cwd(), 'src/markdown/posts')
  )) {
    console.log('file', file);
    posts.push(file);
  }

  console.log('postsMarkdownPath', posts);

  return posts;
};
