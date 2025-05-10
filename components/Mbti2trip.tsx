
export default function Mbti2trip() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center bg-gray-600 rounded-lg overflow-hidden">
          {/* 왼쪽 이미지 영역 */}
          <div className="md:w-1/2 w-full">
            <img
              src="/blackrabbit.png" // public 폴더에 이미지 넣고 경로 지정
              alt="project screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 오른쪽 텍스트 영역 */}
          <div className="md:w-1/2 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-4">MBTI2TRIP</h3>
            <p className="text-gray-300 mb-6">
              This project suggests international travel destinations tailored to your MBTI type.
              This web application built with Next.js, Tailwind CSS, and Supabase.
            </p>

            {/* 버튼 링크 */}
            <div className="space-x-4">
              <a
                href="https://mbti-to-trip.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                LIVE APP
              </a>
              <a
                href="https://github.com/hyeri0903/mbti2trip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}