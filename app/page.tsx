import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-rose-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-rose-950/60 bg-stone-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-base font-bold tracking-tight text-white">
            AAS<span className="text-rose-600">.</span>
          </a>

          <div className="hidden gap-6 text-sm text-stone-400 md:flex">
            <a href="#about" className="transition hover:text-rose-400">About</a>
            <a href="#news" className="transition hover:text-rose-400">News</a>
            <a href="#research" className="transition hover:text-rose-400">Research</a>
            <a href="#projects" className="transition hover:text-rose-400">Projects</a>
            <a href="#teaching" className="transition hover:text-rose-400">Teaching</a>
            <a href="#contact" className="transition hover:text-rose-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pt-36 pb-20">
        <div className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose-500">
              Mining Engineering • Research • Technology
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Ahmad Ali Syafi&apos;i
            </h1>

            <p className="mt-3 text-lg font-medium text-rose-200/90">
              Mining Engineering Lecturer
            </p>

            <p className="mt-4 text-base leading-relaxed text-stone-400">
              Lecturer and researcher at Universitas Lambung Mangkurat, working at the intersection of mining engineering, geospatial technology, remote sensing, research, and community development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#news"
                className="rounded-lg bg-rose-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Read News
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-stone-800 px-5 py-2.5 text-sm font-semibold text-stone-300 transition hover:border-rose-700 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profil Visual Minimalis */}
          <div className="shrink-0">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-rose-900/60 shadow-xl shadow-rose-950/40 md:h-52 md:w-52">
              <Image
                src="/profil.jpg"
                alt="Ahmad Ali Syafi'i"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-stone-900 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">About</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Academic Profile</h3>

          <div className="mt-6 grid gap-6 text-stone-400 md:grid-cols-2 text-sm leading-relaxed">
            <p>
              I am a Mining Engineering Lecturer at Universitas Lambung Mangkurat, Indonesia. My academic activities combine teaching, research, technology development, and community engagement.
            </p>
            <p>
              My work focuses on applying geospatial and digital technologies to mining, mineral exploration, environmental applications, geodiversity, and sustainable community development.
            </p>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="border-t border-stone-900 bg-stone-900/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">News & Updates</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Latest Articles</h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Berita 1 */}
            <article className="flex flex-col justify-between rounded-xl border border-stone-800/80 bg-stone-900/80 p-5 transition hover:border-rose-900/80">
              <div>
                <span className="text-[11px] font-medium text-rose-400">17 Agustus 2026</span>
                <h4 className="mt-2 text-base font-semibold leading-snug text-stone-100 hover:text-rose-300">
                  <a href="/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka">
                    Program Pemberdayaan Pengrajin Batu Mulia Cempaka Berjalan: Dari Modernisasi Produksi hingga Pendampingan NIB
                  </a>
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-stone-400 line-clamp-3">
                  Program Pengabdian kepada Masyarakat (PkM) tim ULM mendorong transformasi pengrajin batu mulia Cempaka dari pola produksi tradisional menuju usaha modern, produktif, dan berlegalitas.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-800">
                <a
                  href="/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka"
                  className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300"
                >
                  Read Article <span className="ml-1">→</span>
                </a>
              </div>
            </article>

            {/* Berita 2 */}
            <article className="flex flex-col justify-between rounded-xl border border-stone-800/80 bg-stone-900/80 p-5 transition hover:border-rose-900/80">
              <div>
                <span className="text-[11px] font-medium text-rose-400">15 Agustus 2026</span>
                <h4 className="mt-2 text-base font-semibold text-stone-100 hover:text-rose-300">
                  <a href="#">Penelitian Geopark Meratus</a>
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-stone-400 line-clamp-3">
                  Riset dan eksplorasi geodiversitas serta potensi warisan geologi di kawasan Meratus.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-800">
                <a href="#" className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300">
                  Read Article <span className="ml-1">→</span>
                </a>
              </div>
            </article>

            {/* Berita 3 */}
            <article className="flex flex-col justify-between rounded-xl border border-stone-800/80 bg-stone-900/80 p-5 transition hover:border-rose-900/80">
              <div>
                <span className="text-[11px] font-medium text-rose-400">01 Agustus 2026</span>
                <h4 className="mt-2 text-base font-semibold text-stone-100 hover:text-rose-300">
                  <a href="#">Eksplorasi Mineral Kalimantan</a>
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-stone-400 line-clamp-3">
                  Pendekatan geospasial dan penginderaan jauh untuk eksplorasi mineral dan interpretasi geologi.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-800">
                <a href="#" className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300">
                  Read Article <span className="ml-1">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="border-t border-stone-900 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">Research</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Research Interests</h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "GIS & Spatial Analysis",
              "Remote Sensing",
              "Mineral Exploration",
              "Photogrammetry",
              "Geodiversity & Geopark",
              "Machine Learning for Mining",
              "Sustainable Mining",
              "Mining Technology",
              "Community Development",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-stone-800 bg-stone-900/60 px-3.5 py-2 text-xs font-medium text-stone-300 hover:border-rose-900/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-stone-900 bg-stone-900/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">Projects</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Selected Academic Activities</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Mineral Exploration",
                text: "Geospatial and remote sensing approaches for mineral exploration and geological interpretation.",
              },
              {
                title: "Geopark Meratus",
                text: "Research and exploration of geodiversity and geological potential in the Meratus region.",
              },
              {
                title: "Community Empowerment",
                text: "Technology transfer, digitalization, and local economic development through community-based programs.",
              },
            ].map((project) => (
              <div key={project.title} className="rounded-xl border border-stone-800 bg-stone-900/80 p-5">
                <h4 className="text-base font-semibold text-rose-300">{project.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="border-t border-stone-900 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">Teaching</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Mining Engineering Courses</h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "GIS Pertambangan",
              "Fotogrametri Pertambangan",
              "Teknik Eksplorasi",
              "Metode Numerik",
              "Genesa Bahan Galian",
              "Perpetaan Tambang",
              "Pengantar Teknologi Informasi",
            ].map((course) => (
              <span
                key={course}
                className="rounded-full border border-stone-800 bg-stone-900/40 px-4 py-1.5 text-xs text-stone-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-stone-900 bg-stone-900/40 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-rose-950/80 bg-rose-950/20 p-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">Connect</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Let&apos;s Connect</h3>

          <p className="mt-3 text-sm text-stone-400 max-w-xl leading-relaxed">
            Open to academic collaboration, research partnerships, geospatial projects, mining technology development, and community empowerment initiatives.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://mining.ft.ulm.ac.id"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-rose-800 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-rose-700"
            >
              PSTP ULM
            </a>
            <a
              href="https://github.com/syafiiali"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-stone-800 px-5 py-2.5 text-xs font-semibold text-stone-300 transition hover:border-rose-700 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900 px-6 py-8 text-xs text-stone-500">
        <div className="mx-auto flex max-w-5xl justify-between gap-3 flex-col sm:flex-row">
          <p>© {new Date().getFullYear()} Ahmad Ali Syafi&apos;i</p>
          <p>Mining Engineering • Research • Technology</p>
        </div>
      </footer>
    </main>
  );
}