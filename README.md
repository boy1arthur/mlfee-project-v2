# ML Fee Blog

Next.js와 Vercel로 구축된 머신러닝 블로그입니다.

## 🚀 주요 기능

- ✅ **마크다운 기반** 글 작성
- ✅ **자동 배포** (Git push → Vercel 자동 빌드)
- ✅ **반응형 디자인**
- ✅ **SEO 최적화**
- ✅ **빠른 로딩 속도**
- ✅ **코드 하이라이팅**

## 🛠 기술 스택

- **프레임워크**: Next.js 15
- **스타일링**: CSS3 (Vanilla CSS)
- **콘텐츠 관리**: Markdown + Gray Matter
- **배포**: Vercel
- **HTML 처리**: Remark

## 📁 프로젝트 구조

```
mlfee-blog/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.js           # 레이아웃 컴포넌트
│   ├── page.js             # 홈페이지
│   └── blog/
│       ├── page.js         # 블로그 목록 페이지
│       └── [slug]/
│           └── page.js     # 블로그 상세 페이지
├── _posts/                 # 마크다운 글 저장소
├── lib/
│   └── posts.js           # 포스트 처리 유틸리티
├── public/                # 정적 파일
└── package.json           # 프로젝트 설정
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 새 글 작성

1. `_posts/` 폴더에 새로운 `.md` 파일 생성
2. 다음 형식으로 frontmatter 작성:

```markdown
---
title: '글 제목'
date: '2025-09-04'
excerpt: '글 요약'
tags: ['태그1', '태그2']
---

# 본문 내용
```

3. 변경사항을 Git에 커밋 및 푸시

```bash
git add .
git commit -m "새 글 추가: 글 제목"
git push origin main
```

## 📝 마크다운 작성 가이드

### 기본 문법

```markdown
# 제목 1
## 제목 2
### 제목 3

**굵은 글씨** 또는 __굵은 글씨__
*이탤릭* 또는 _이탤릭_

- 목록 항목 1
- 목록 항목 2

1. 번호 목록 1
2. 번호 목록 2

[링크 텍스트](URL)
![이미지 설명](이미지URL)
```

### 코드 블록

````markdown
```python
def hello_world():
    print("Hello, ML Fee!")
```
````

### 인용구

```markdown
> 이것은 인용구입니다.
```

## 🔧 커스터마이징

### 스타일 변경

`app/globals.css` 파일에서 색상, 폰트, 레이아웃을 수정할 수 있습니다.

### 기능 추가

- 검색 기능
- 태그 필터링
- RSS 피드
- 댓글 시스템
- 다크 모드

## 📦 빌드 및 배포

### 로컬 빌드

```bash
npm run build
npm run start
```

### Vercel 배포

1. GitHub 저장소와 Vercel 연결
2. 자동 배포 설정 완료
3. `git push`만 하면 자동 배포!

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 문의

질문이나 제안사항이 있으시면 언제든 연락주세요!

---

⭐ 이 프로젝트가 유용했다면 스타를 눌러주세요!
