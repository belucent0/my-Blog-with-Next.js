//페이지 이동시 필요한 로딩 스피너
export default function Loading() {
  return (
    <>
      <div className="container mx-auto min-h-screen px-5 py-24">
        <div className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-2 border-indigo-200"></div>
            <div className="absolute left-0 top-0 h-20 w-20 animate-spin rounded-full border-t-2 border-indigo-800"></div>
          </div>
        </div>
      </div>
    </>
  );
}