import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='flex flex-col h-[100vh] w-[100vw] items-center justify-center'>
            <div className='text-4xl'>
                Trang này không tồn tại
            </div>
            <Link className='mt-4 p-3 border bg-green-400 text-black' to='/'>Quay trở lại trang chủ</Link>
        </div>
    );
};

export default PageNotFound;