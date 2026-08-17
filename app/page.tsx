import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            AAS<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#news" className="transition hover:text-cyan-400">
              News
            </a>
            <a href="#research" className="transition hover:text-cyan-400">
              Research
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#teaching" className="transition hover:text-cyan-400">
              Teaching
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Mining Engineering • Research • Technology
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Ahmad Ali
              <br />
              <span className="text-slate-400">Syafi&apos;i</span>
            </h1>

            <p className="mt-6 text-xl font-medium text-slate-200">
              Mining Engineering Lecturer
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
              Lecturer and researcher at Universitas Lambung Mangkurat,
              working at the intersection of mining engineering, geospatial
              technology, remote sensing, research, and community development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#research"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Research
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile visual */}
          <div className="mx-auto">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 md:h-80 md:w-80">
              <Image
                src="/profil.jpg"
                alt="Ahmad Ali Syafi'i"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About
          </p>

          <h2 className="mt-3 text-4xl font-bold">Academic Profile</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-8 text-slate-400">
              I am a Mining Engineering Lecturer at Universitas Lambung
              Mangkurat, Indonesia. My academic activities combine teaching,
              research, technology development, and community engagement.
            </p>

            <p className="text-lg leading-8 text-slate-400">
              My work focuses on applying geospatial and digital technologies
              to mining, mineral exploration, environmental applications,
              geodiversity, and sustainable community development.
            </p>
          </div>
        </div>
      </section>

      {/* News & Updates Section (PENAMBAHAN BARU) */}
      <section id="news" className="border-t border-white/10 bg-slate-900/30 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            News & Updates
          </p>

          <h2 className="mt-3 text-4xl font-bold">Latest Articles</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Kartu Berita 1 */}
            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  17 Agustus 2026
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-white hover:text-cyan-300">
                  <a href="/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka">
                    Program Pemberdayaan Pengrajin Batu Mulia Cempaka Berjalan: Dari Modernisasi Produksi hingga Pendampingan NIB
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Program Pengabdian kepada Masyarakat (PkM) tim ULM mendorong transformasi pengrajin batu mulia Cempaka dari pola produksi tradisional menuju usaha modern, produktif, dan berlegalitas.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href="/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka"
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Read Full Article <span className="ml-1">→</span>
                </a>
              </div>
            </article>

            {/* Kartu Berita 2 (Contoh) */}
            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  15 Agustus 2026
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-white hover:text-cyan-300">
                  <a href="#">
                    Penelitian Geopark Meratus
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Riset dan eksplorasi geodiversitas serta potensi warisan geologi di kawasan Meratus.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Read Full Article <span className="ml-1">→</span>
                </a>
              </div>
            </article>

            {/* Kartu Berita 3 (Contoh) */}
            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  01 Agustus 2026
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-white hover:text-cyan-300">
                  <a href="#">
                    Eksplorasi Mineral Kalimantan
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Pendekatan geospasial dan penginderaan jauh untuk eksplorasi mineral dan interpretasi geologi.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Read Full Article <span className="ml-1">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="bg-slate-900/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Research
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Research Interests
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-cyan-400" />
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Selected Academic Activities
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-slate-900 p-7"
              >
                <h3 className="text-xl font-bold text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section id="teaching" className="bg-slate-900/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Teaching
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Mining Engineering Courses
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
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
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Connect
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let&apos;s Connect
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Open to academic collaboration, research partnerships,
            geospatial projects, mining technology development, and community
            empowerment initiatives.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://mining.ft.ulm.ac.id"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              PSTP ULM
            </a>

            <a
              href="https://github.com/syafiiali"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Ahmad Ali Syafi&apos;i</p>
          <p>Mining Engineering • Research • Technology</p>
        </div>
      </footer>
    </main>
  );
}