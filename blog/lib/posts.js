import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getSortedPostsData() {
  // _posts 폴더가 존재하지 않으면 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // _posts 폴더에서 파일명 가져오기
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // 파일명에서 ".md" 제거하여 id 생성
      const id = fileName.replace(/\.md$/, '');

      // 마크다운 파일을 문자열로 읽기
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // gray-matter를 사용하여 메타데이터 파싱
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });

  // 날짜순으로 정렬
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // remark를 사용하여 마크다운을 HTML로 변환
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
