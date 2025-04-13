
export default function PortfolioProjectPage() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-[#C9D1D9] px-4 py-12 pt-24">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">Portfolio Website</h1>
        <p className="text-lg text-[#C9D1D9]/80 mb-6">
          This portfolio was designed and developed to showcase my work as a Full Stack Developer. It emphasizes clean UI, fast performance, and scalable project architecture.
        </p>


        <hr className="border-[#161B22] my-8" />

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl">🎯 Goals</h2>
            <p className="text-[#C9D1D9]/80 mt-2">
              I wanted this portfolio to reflect senior-level thinking: thoughtful design choices, scalable routing, reusable components, and space to grow. It needed to highlight my MERN projects clearly and concisely, while looking sharp and performing fast.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">⚙️ Features</h2>
            <ul className="list-disc list-inside text-[#C9D1D9]/80 mt-2">
              <li>Dark mode aesthetic with a custom color palette</li>
              <li>Dynamic project routes with scalability in mind</li>
              <li>Framer Motion animations for subtle interactivity</li>
              <li>Typography pairing (Bebas Neue + Nunito)</li>
              <li>Tailwind global utility styles for cleaner code</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">🧠 Lessons Learned</h2>
            <p className="text-[#C9D1D9]/80 mt-2">
              I spent time dialing in layout structure and typography to ensure a clean user experience. It taught me to treat even personal projects like production apps — from routing strategy to animation timing. Designing for reusability (like the Projects section) paid off as I began adding more content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">🛠 Tech Stack</h2>
            <ul className="list-disc list-inside text-[#C9D1D9]/80 mt-2">
              <li>Next.js 14 (App Router)</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>Framer Motion</li>
              <li>ReactIcons</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
