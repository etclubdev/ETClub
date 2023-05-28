/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./resultContest.scss";
const ResultContest = () => {
  return (
    <div className="container-fluid__result">
      <div className="row container-result--main">
        <div className="flex flex-col items-center col-lg-4 col-4 second-prize ">
          <div className="prize-title mb-[70px]">GIẢI NHÌ</div>
          <div className='relative w-[236px] h-[230px] mb-[40px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

            <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
              <img className=' w-[180px] h-[180px] rounded-full object-cover' src="/img/Circle - L.png" alt="" />
            </div>


          </div>
          <div className="container-info flex flex-col items-center">
            <h3>Nguyễn Văn A</h3>
            <h4 className='my-[15px]'>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
        <div className="col-lg-4 col-4 first-prize flex flex-col items-center">
          <div className="prize-title mb-[70px]">GIẢI NHẤT</div>
          <div className='relative w-[236px] h-[230px] mb-[40px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

            <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
              <img className=' w-[180px] h-[180px] rounded-full object-cover' src="/img/Circle - L.png" alt="" />
            </div>


          </div>
          <div className="container-info flex flex-col items-center">
            <h3>Nguyễn Văn A</h3>
            <h4 className='my-[15px]'>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
        <div className="col-lg-4 col-4 third-prize flex flex-col items-center">
          <div className="prize-title mb-[70px]">GIẢI BA</div>
          <div className='relative w-[236px] h-[230px] mb-[40px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

            <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
              <img className=' w-[180px] h-[180px] rounded-full object-cover' src="/img/Circle - L.png" alt="" />
            </div>


          </div>
          <div className="container-info flex flex-col items-center">
            <h3>Nguyễn Văn A</h3>
            <h4 className='my-[15px]'>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
      </div>
      <div className="row container-result--encourage">
        <div className="col-lg-5 col-5 encourage-prize flex flex-col items-center">
          <div className="prize-title">KHUYẾN KHÍCH</div>
          <div className='relative w-[236px] h-[230px] mb-[40px] mt-[30px]' >

            <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
              <img className=' w-[180px] h-[180px] rounded-full object-cover' src="/img/Circle - L.png" alt="" />
            </div>


          </div>
          <div className="container-info flex flex-col items-center">
            <h3>Nguyễn Văn A</h3>
            <h4 className='my-[15px]'>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
        <div className="col-lg-5 col-5 encourage-prize flex flex-col items-center">
          <div className="prize-title">KHUYẾN KHÍCH</div>
          <div className='relative w-[236px] h-[230px] mb-[40px] mt-[30px]' >

            <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
              <img className=' w-[180px] h-[180px] rounded-full object-cover' src="/img/Circle - L.png" alt="" />
            </div>


          </div>
          <div className="container-info flex flex-col items-center">
            <h3>Nguyễn Văn A</h3>
            <h4 className='my-[15px]'>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContest;
