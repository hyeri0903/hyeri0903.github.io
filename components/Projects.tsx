import Mbti2trip from "./Mbti2trip";
import Mobileinvitations from "./Mobileinvitations";
export default function Projects() {
  return (
    <section className="px-4 py-16 bg-gray-200 dark:bg-black transition-colors duration-200">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>

        {/* 프로젝트 박스 */}
        <h2 className="relative inline-block text-lg sm:text-2xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8 after:content-[''] after:block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-2 after:bg-blue-300 after:z-0 z-10">
          <span className="relative z-10">Side Projects</span>
        </h2>
        <div className="flex flex-col gap-y-4 md:gap-y-4">
          <div><Mbti2trip /></div>
          <div><Mobileinvitations /></div>
        </div>
        
      </div>
    </section>
  );
}
