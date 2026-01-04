import heroImage from "../assets/hero.png";

function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <section
        className="relative min-h-screen flex items-center pt-24"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Building <span className="text-yellow-400">Trust</span>, <br />
              Creating <span className="text-yellow-400">Excellence</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              P&amp;P Construction delivers high-quality residential and
              commercial projects with precision, safety, and on-time delivery.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-300 transition">
                View Projects
              </button>

              <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl p-8 grid grid-cols-2 gap-6 text-center backdrop-blur">
            <Stat value="10+" label="Years Experience" />
            <Stat value="120+" label="Projects Completed" />
            <Stat value="50+" label="Happy Clients" />
            <Stat value="100%" label="Quality Focus" />
          </div>

        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-yellow-400">{value}</h2>
      <p className="text-gray-200 mt-2">{label}</p>
    </div>
  );
}

export default Home;
