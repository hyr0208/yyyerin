interface Project {
  name: string;
  description: string;
  url: string;
  emoji: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "portfolio",
    description: "예린의 개발 포트폴리오",
    url: "https://portfolio.yyyerin.co.kr",
    emoji: "✨",
    tags: ["포트폴리오"],
  },
  {
    name: "LunchPing",
    description: "내 주변 맛집을 빠르고 간편하게 찾아보세요.",
    url: "https://lunchping.yyyerin.co.kr",
    emoji: "🍱",
    tags: ["React", "TypeScript", "Kakao Maps"],
  },
  {
    name: "bomPick",
    description: "OTT 콘텐츠 메타 추천 서비스",
    url: "https://bompick.yyyerin.co.kr",
    emoji: "🎬",
    tags: ["OTT", "추천"],
  },
  {
    name: "AllCert",
    description: "자격증 정보를 한 곳에서 찾아보세요.",
    url: "https://allcert.yyyerin.co.kr",
    emoji: "📜",
    tags: ["자격증", "포털"],
  },
  {
    name: "jiwonnow",
    description: "나에게 맞는 정부지원사업을 자동으로 추천받으세요.",
    url: "https://jiwonnow.yyyerin.co.kr",
    emoji: "🏛️",
    tags: ["정부지원", "추천"],
  },
  {
    name: "lotto",
    description: "커피 찾기 게임",
    url: "https://lotto.yyyerin.co.kr",
    emoji: "☕",
    tags: ["카페", "멀티플레이"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{project.emoji}</span>
        <h2 className="text-lg font-semibold text-stone-800 group-hover:text-amber-600 transition-colors">
          {project.name}
        </h2>
      </div>
      <p className="text-sm text-stone-500 leading-relaxed">
        {project.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Hero */}
      <header className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <p className="mb-3 text-sm font-medium tracking-widest text-amber-500 uppercase">
          yyyerin.co.kr
        </p>
        <h1 className="text-4xl font-bold text-stone-800 sm:text-5xl">
          안녕하세요, <br className="sm:hidden" />
          <span className="text-amber-500">yyyerin</span>입니다
        </h1>
        <p className="mt-4 text-base text-stone-500">
          유용하고 재밌는 서비스를 만드는 개발자입니다.
        </p>
        <a
          href="https://github.com/hyr0208"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm transition hover:border-stone-300 hover:shadow-md"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          github.com/hyr0208
        </a>
      </header>

      {/* Projects */}
      <main className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="mb-6 text-xs font-semibold tracking-widest text-stone-400 uppercase">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} yyyerin. All rights reserved.
      </footer>
    </div>
  );
}
