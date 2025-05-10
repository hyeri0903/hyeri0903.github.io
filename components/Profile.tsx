import Link from "next/link";

export default function FirstBody() {
  return (
    <section className="text-left mx-auto px-4 py-16 bg-green-50 dark:bg-black transition-colors duration-200">
      <h2 className="text-left text-lg sm:text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 w-full">
        Profile
      </h2>
      <p className="font-sans text-base leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
        Backend developer with 4+ years of experience designing and scaling enterprise system in Java and Kotlin. Skilled in B2B services, distributed systems, and building maintainable architectures. Strong communicator who bridges the gap between technical and non-technical stakeholders.
      </p>
    </section>
  );
}
