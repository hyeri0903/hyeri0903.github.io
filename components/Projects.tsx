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
        <div className="flex flex-col gap-y-4 md:gap-y-4">
          <div className="transition-transform duration-300 hover:scale-95"><Mbti2trip /></div>
          <div className="transition-transform duration-300 hover:scale-95"><Mobileinvitations /></div>
        </div>
        
      </div>
    </section>
  );
}
