import React from 'react';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <>
        <p className='text-indigo-700 font-bold p-2'>
          Node.js 환경에서의 웹 개발에 관심을 가진
        </p>
        <h1 className='sm:text-5xl md:text-6xl text-3xl font-bold md:py-6'>
          마음을 읽는 개발자 <br/>
          김재광입니다. 
        </h1>
        <div className='flex justify-center items-center  text-gray-500'>
          <Typed
          className='sm:text-3xl md:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Next.js', 'Nest.js', 'Express.js']}
            typeSpeed={150}
            backSpeed={250}
            loop
          />
          <p className='sm:text-3xl md:text-4xl text-xl font-bold py-4'>
            프로젝트 경험이 있습니다.
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-700'>일신우일신(日新又日新)의 마음으로 살아갑니다.</p>

    </>
  );
}
