// OrchardAid - Option A: Clean Landing Page + Blog + Crypto Donations
// Initial version: Lightweight, modular, SEO-optimized, responsive

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center p-12">
        <h1 className="text-5xl font-bold mb-4">OrchardAid</h1>
        <p className="text-lg max-w-xl mx-auto">
          A grassroots platform for those who believe in peace over fear, truth over noise,
          and using intelligence ethically. Welcome to our orchard.
        </p>
        <div className="mt-6">
          <a
            href="#donate"
            className="px-6 py-2 bg-black text-white rounded-2xl shadow hover:scale-105 transition"
          >
            Support Us
          </a>
        </div>
      </section>

      <section className="bg-gray-100 p-10" id="blog">
        <h2 className="text-3xl font-semibold text-center mb-6">Latest Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sample blog entries */}
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold">Our Vision: What is OrchardAid?</h3>
            <p className="mt-2 text-sm text-gray-600">
              A look into the philosophy, origin, and mission behind OrchardAid.xyz.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold">Crypto as Ethical Fuel</h3>
            <p className="mt-2 text-sm text-gray-600">
              Why we believe decentralization and smart contracts will help rebuild
              systems of trust.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center p-12" id="donate">
        <h2 className="text-3xl font-semibold mb-4">Support Our Work</h2>
        <p className="text-gray-700 mb-4">
          Crypto donations go directly toward building, maintaining, and protecting this platform.
        </p>
        <div className="bg-gray-200 p-4 rounded-xl inline-block">
          <p className="font-mono text-sm mb-2">ETH / USDC / MATIC Wallet:</p>
          <code className="text-md font-bold">
            0x8253e93E6d18081C76Dd77f9698D8BE47a5e034a
          </code>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} OrchardAid.xyz — All Rights Reserved.
      </footer>
    </main>
  );
}
