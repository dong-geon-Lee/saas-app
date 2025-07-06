import React from "react";

const Like2 = () => {
  return (
    <section className="w-full bg-[#fdfadf] flex flex-col items-center justify-center py-16">
      <div className="max-w-6xl w-full flex flex-row items-center justify-between gap-8">
        {/* 텍스트 영역 */}
        <div className="flex-1 text-left">
          <h2 className="text-[30px] font-normal font-['Noto_Sans_KR'] text-black leading-[45px] mb-2">
            에버루프와 함께라면 중고도 트렌드가 됩니다.
          </h2>
          <h1 className="text-[40px] font-bold font-['Noto_Sans_KR'] text-black leading-[45px] mb-2">
            스마트한 소비, 멋진 발견을 경험하세요.
          </h1>
          <p className="text-[24px] font-medium font-['Noto_Sans_KR'] text-[#111] leading-[45px]">
            쉽고 안전한 거래, 여기에서 시작합니다.
          </p>
        </div>
        {/* 일러스트 영역 */}
        <div className="flex-1 flex justify-end">
          <img
            src="/images/illust-people.png"
            alt="4명의 사람 일러스트"
            className="w-[350px] h-auto rounded-lg shadow-md"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Like2;
