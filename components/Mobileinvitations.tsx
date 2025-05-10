
export default function Mobileinvitations() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg overflow-hidden">
          {/* 오른쪽 텍스트 영역 */}
          <div className="md:w-1/2 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Mobile Party Invitation</h3>
            <p className="text-gray-300 mb-6">
              This application is mobile invitation for special occasions such as party.
              This web application built with Next.js, Tailwind CSS.
            </p>

            {/* 버튼 링크 */}
            <div className="space-x-4">
              <a
                href="https://mobile-invitation-rouge.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                LIVE APP
              </a>
              <a
                href="https://github.com/hyeri0903/mobile-invitation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                LEARN MORE
              </a>
            </div>
          </div>
           {/* 오른쪽 이미지 영역 */}
           <div className="md:w-1/2 w-full">
            <img
              src="/rabbit.png" // public 폴더에 이미지 넣고 경로 지정
              alt="project screenshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
    </div>
  );
}