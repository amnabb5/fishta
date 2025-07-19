import Image from "next/image";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-[#FB3026] blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src="/images/stripes-dark.svg"
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-8">
        <div className="absolute right-[-4rem] top-1/3 -z-10 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full border-[16px] border-[#FB3026] blur-[64px]" />
        </div>
        <div className="absolute left-[-4rem] top-1/2 -z-10 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full border-[16px] border-[#FB3026] blur-[64px]" />
        </div>
        <Image
          src="/images/mock.png"
          alt="tv1"
          width={600}
          height={350}
        />
        <Image
          src="/images/grp23.png"
          alt="tv2"
          width={400}
          height={14}
          className="mt-2"
        />
      </div>
    </section>
  );
}
