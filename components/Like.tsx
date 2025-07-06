import React from "react";

const Like = () => {
  return (
    <nav className="w-full h-20 flex items-center px-8 bg-white shadow-sm">
      {/* 로고 */}
      <div className="flex items-center mr-8">
        {/* (아이콘 자리) */}
        <span className="font-bold text-2xl text-[#ff4c4c] font-['Noto_Sans_KR']">
          에버루프
        </span>
      </div>

      {/* 검색창 */}
      <div className="flex items-center bg-[#f4f4f4] rounded-[10px] px-4 py-2 w-[482px] max-w-xs mr-auto">
        <input
          type="text"
          placeholder="보고 싶은 중고물품을 검색해보세요"
          className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-[#c1c1c1] w-full"
        />
        {/* 검색 아이콘 (간단한 SVG) */}
        <svg
          className="w-6 h-6 text-gray-400 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <line
            x1="16.65"
            y1="16.65"
            x2="21"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* 알림 아이콘 */}
      <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 mr-4">
        {/* 종(bell) 아이콘 */}
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>

      {/* 로그인/회원가입 버튼 */}
      <button className="ml-2 px-6 py-2 border border-[#eeeeee] rounded-[10px] text-sm text-black hover:bg-gray-50">
        로그인/회원가입
      </button>
    </nav>
  );
};

export default Like;
