'use client'

import { useEffect, useState } from 'react';
import Loading from '../loading';

export default function ExcalidrawPage() {
  const [DynamicExcalidraw, setDynamicExcalidraw] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    import('@excalidraw/excalidraw').then((module) => {
      // Excalidraw 모듈이 로드되면 해당 모듈을 상태에 저장
      setDynamicExcalidraw(() => module.Excalidraw);
      setIsLoading(false)
    });
  }, []);

  return (
    <>
      <h1 className='text-center text-3xl font-medium'>그림판</h1>
      {isLoading && <Loading/>}
      <div className="h-[40rem] mx-auto min-h-auto px-5">
        {DynamicExcalidraw && <DynamicExcalidraw />}
      </div>
    </>
  );
}
