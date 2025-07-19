import Image from "next/image";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Fishta: Smart Aquaculture Platform
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Fishta helps you monitor and manage fish ponds with sensors, logs, and dashboards. Works online and offline, gives AI-based alerts, and supports multiple languages. Part of Challenge 4 for digital fish farming solutions.
            </p>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-[#FB3026] before:to-[#FB3026]/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,#FB3026,transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src="/images/planet.png"
                  width={400}
                  height={400}
                  alt="Planet"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(251,48,38,0.25)', mixBlendMode: 'multiply' }} />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src="/images/planet-overlay.svg"
                    width={789}
                    height={755}
                    alt="Planet decoration"
                    style={{ filter: 'hue-rotate(-20deg) saturate(1.5)' }}
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src="/images/planet-tag-01.png"
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src="/images/planet-tag-02.png"
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src="/images/planet-tag-03.png"
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src="/images/planet-tag-04.png"
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-[#FB3026]" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <span>Overview</span>
              </h3>
              <p className="text-[15px] text-gray-400">Dashboard with pond stats: number, alerts, temp, pH, oxygen.</p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-[#FB3026]" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <rect x="2" y="2" width="12" height="12" rx="3" />
                </svg>
                <span>Ponds Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">Monitor real-time & history, see pond details, configs, and notes.</p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-[#FB3026]" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <ellipse cx="8" cy="8" rx="8" ry="4" />
                </svg>
                <span>Alerts</span>
              </h3>
              <p className="text-[15px] text-gray-400">Smart notifications and AI suggestions for water quality.</p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-[#FB3026]" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <rect x="4" y="4" width="8" height="8" rx="2" />
                </svg>
                <span>Reports & Daily Records</span>
              </h3>
              <p className="text-[15px] text-gray-400">Logs of daily events, downloadable reports, and tracking.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
