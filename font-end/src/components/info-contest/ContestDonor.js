/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./contestDonor.scss";
import sponsorApi from '../../api/sponsorApi';
import { useParams } from 'react-router-dom';
const ContestDonor = () => {
  const [data, setData] = React.useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const getData = async () => {
        const result = await sponsorApi.getAllsponsor({ competition_id: id, pageSize: 14 });
        setData(result?.data)
      }
      getData();
    }
  }, [id])

  return (
    <div className="container-donors">
      <div className="donors-title">
        <h1>NHÀ TÀI TRỢ</h1>
      </div>
      <div className="diamond-donor flex flex-col items-center">
        <h3>NHÀ TÀI TRỢ KIM CƯƠNG</h3>
        <div className='flex flex-wrap gap-[50px] items-center justify-center max-sm:px-[15px]'>
          {
            data?.filter(item => item.kind == 1).map((item, index) => {
              return <div key={index}>
                <img className='max-w-[80px] h-[80px] md:max-w-[150px] md:h-[150px] object-cover' src={`http://127.0.0.1:1111/public/images/sponsor/${item.logo}`} alt={`diamond_logo_${item.logo}`} />
              </div>
            })
          }

        </div>
      </div>
      <div className="mb-[60px]">
        <h3>NHÀ TÀI VÀNG</h3>
        <div className='flex flex-wrap gap-[50px] md:gap-[80px] items-center justify-center max-sm:px-[15px]'>
          {
            data?.filter(item => item.kind == 2).map((item, index) => {
              return <div key={index}>
                <img className='max-w-[80px] h-[80px] md:max-w-[150px] md:h-[150px] object-cover' src={`http://127.0.0.1:1111/public/images/sponsor/${item.logo}`} alt={`diamond_logo_${item.logo}`} />
              </div>
            })
          }
        </div>

      </div>
      <div className="co-donor">
        <h3>ĐỒNG TÀI TRỢ</h3>
        <div className='flex flex-wrap gap-[50px] md:gap-[80px] items-center justify-center max-sm:px-[15px]'>
          {
            data?.filter(item => item.kind == 4).map((item, index) => {
              return <div key={index}>
                <img className='max-w-[80px] h-[80px] md:max-w-[150px] md:h-[150px] object-cover' src={`http://127.0.0.1:1111/public/images/sponsor/${item.logo}`} alt={`diamond_logo_${item.logo}`} />
              </div>
            })
          }
        </div>
      </div>
      <div className="media-patronage">
        <h3>BẢO TRỢ TRUYỀN THÔNG</h3>
        <div className='flex flex-wrap gap-[50px] md:gap-[80px] items-center justify-center max-sm:px-[15px]'>
          {
            data?.filter(item => item.kind == 5).map((item, index) => {

              return <div key={index}>
                <img className='max-w-[80px] h-[80px] md:max-w-[150px] md:h-[150px] object-cover' src={`http://127.0.0.1:1111/public/images/sponsor/${item.logo}`} alt={`diamond_logo_${item.logo}`} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ContestDonor;
