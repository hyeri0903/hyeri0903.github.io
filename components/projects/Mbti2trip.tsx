export default function Mbti2trip() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
          {/* 왼쪽 이미지 영역 */}
          <div className="md:w-1/2 w-full transition-transform duration-300 hover:cursor-pointer">
            <a href="https://mbti-to-trip.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="/mbti2trip.jpg" // public 폴더에 이미지 넣고 경로 지정
                alt="project screenshot"
                className="w-[450px] h-[300px] object-cover mx-auto transition-transform duration-1000 ease-out hover:scale-110"
              />
            </a>
          </div>

          {/* 오른쪽 텍스트 영역 */}
          <div className="md:w-1/2 w-full p-8">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-4 font-sans"
                style={{ textTransform: 'uppercase' }}
            >
              MBTI2TRIP
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
              This project suggests international travel destinations tailored to your MBTI type.
              This web application built with Next.js, Tailwind CSS, and Supabase.
            </p>

            {/* 버튼 링크 */}
            <div className="space-x-4">
              <a
                href="https://mbti-to-trip.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-black font-semibold hover:bg-white hover:text-black transition rounded-full"
              >
                LIVE DEMO
              </a>
              <a
                href="https://github.com/hyeri0903/mbti2trip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-black font-semibold hover:bg-white hover:text-black transition rounded-full"
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}