/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./resultContest.scss";
import { Popover } from 'antd';
import { ArrowDown2 } from 'iconsax-react';
import competitionResult from '../../api/competitionResult';
import { useParams } from 'react-router-dom';
const ResultContest = () => {
  const [dataResult, setDataResult] = React.useState();
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const result = await competitionResult.getAllCompetitionResult({ competition_id: id, pageSize: 20 })
        setDataResult(result?.data)
      }
      fetchData()
    }
  }, [id])
  const teamsMapped = [];

  const handleGetInfoTeam = (rank) => {
    const dataTeam2 = dataResult ? dataResult?.filter((item => item.rank === rank)) : []
    return dataTeam2 ? (
      <div className='text-white'>
        {dataTeam2?.map((item, index) => {

          return <div key={index} className={`p-2 ${index < dataTeam2.length - 1 ? 'border-b-[3px] border-b-[#F5A623]' : ''}`}>
            <h3 className='text-lg md:text-xl'>{item.name}</h3>
            <h4 className='text-base md:text-lg'>{item.major} - {item.academic_year} - {item.school}</h4>
          </div>
        })}
      </div>
    ) : undefined;
  }
  return (
    <div className="container-fluid__result">

      {/* hiển thị giải là các giải thi theo cá nhân */}
      {dataResult && dataResult[0]?.type == 1 && <div className="row max-sm:w-full max-sm:mx-auto container-result--main">
        {dataResult?.sort((a, b) => (a.rank === 2 ? -1 : b.rank === 2 ? 1 : 0)).map((item, index) => {
          if (item.rank === 4) return null
          return <div key={index} className={`flex flex-col items-center col-lg-4 col-4 ${item?.rank === 1 ? 'first-prize' : item?.rank === 2 ? 'second-prize' : ' third-prize'} `}>
            <div className="prize-title mb-[70px]">{item?.rank === 1 ? 'GIẢI NHẤT' : item?.rank === 2 ? 'GIẢI NHÌ' : 'GIẢI BA'}</div>
            <div className='relative max-sm:w-[110px] max-sm:h-[100px] sm:w-[180px] sm:h-[170px] md:w-[236px] md:h-[230px] max-sm:mb-[20px] sm:mb-[30px] md:mb-[40px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

              <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] max-sm:w-[90px] max-sm:h-[90px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] rounded-full'>
                <img className='max-sm:w-[70px] max-sm:h-[70px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-full object-cover' src={`http://127.0.0.1:1111/public/images/competition-results/${item?.avt}`} alt={`${item.name}-${index}`} />
              </div>


            </div>
            <div className="container-info flex flex-col items-center">
              <h3 className='max-sm:text-[15px] max-sm:text-center'>{item?.name}</h3>
              <h4 className='max-sm:my-[5px] max-sm:text-center my-[15px]'>{item?.major}</h4>
              <h4>{item?.academic_year}-{item?.school}</h4>
            </div>

          </div>
        })}
      </div>}

      {/* hiển thị giải là các giải thi theo đội */}

      {dataResult && dataResult[0]?.type == 2 && <div className="row max-sm:w-full max-sm:mx-auto container-result--main">
        {dataResult?.sort((a, b) => (a.rank === 2 ? -1 : b.rank === 2 ? 1 : 0)).map((item, index) => {


          if ([1, 2, 3].includes(item.rank) && !teamsMapped.includes(item.team)) {
            teamsMapped.push(item.team);

            return (
              <div key={index} className={`flex flex-col items-center col-lg-4 col-4 ${item?.rank === 1 ? 'first-prize' : item?.rank === 2 ? 'second-prize' : ' third-prize'}`}>
                <div className="prize-title mb-[70px]">{item?.rank === 1 ? 'GIẢI NHẤT' : item?.rank === 2 ? 'GIẢI NHÌ' : 'GIẢI BA'}</div>
                <div className='relative max-sm:w-[110px] max-sm:h-[100px] sm:w-[180px] sm:h-[170px] md:w-[236px] md:h-[230px] max-sm:mb-[20px] sm:mb-[30px] md:mb-[40px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] max-sm:w-[90px] max-sm:h-[90px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] rounded-full'>
                    <img className='max-sm:w-[70px] max-sm:h-[70px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-full object-cover' src={`http://127.0.0.1:1111/public/images/competition-results/${item?.logo_team}`} alt={`${item.name}-${index}`} />
                  </div>
                </div>
                <Popover placement="bottom" title={null} arrow={false} content={handleGetInfoTeam(item.rank)} trigger="click">
                  <h3 className='cursor-pointer font-bold text-sm md:text-2xl flex items-center'>{item.team}<ArrowDown2 className='ml-1 md:ml-2 ' size="32" variant="Bold" color="#FFFFFF" /></h3>
                </Popover>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>}

      {/* hiển thị giải khuyến khích là các giải thi theo cá nhân */}
      {
        dataResult && <div className="row container-result--encourage max-sm:w-full max-sm:ml-0">
          {dataResult?.map((item, index) => {
            if ([1, 2, 3].includes(item?.rank)) return null
            if (dataResult[0]?.type == 2 && [4].includes(item.rank) && !teamsMapped.includes(item.team)) {
              teamsMapped.push(item.team);
              return <div key={index} className="col-lg-5 col-5 encourage-prize flex flex-col items-center">
                <div className="prize-title">KHUYẾN KHÍCH</div>
                <div className='relative max-sm:w-[110px] max-sm:h-[100px] sm:w-[180px] sm:h-[170px] md:w-[236px] md:h-[230px] mb-[20px] md:mb-[40px] mt-[10px] md:mt-[30px]' >

                  <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] max-sm:w-[90px] max-sm:h-[90px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] rounded-full'>
                    <img className='max-sm:w-[70px] max-sm:h-[70px]  sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-full object-cover' src={`http://127.0.0.1:1111/public/images/competition-results/${item?.type == 1 ? item?.avt : item?.logo_team}`} alt={`${item.name}-${index}`} />
                  </div>


                </div>
                {dataResult[0]?.type == 1 ? <div className="container-info flex flex-col items-center">
                  <h3>{item.name}</h3>
                  <h4 className='my-[15px]'>{item.major}</h4>
                  <h4>{item.academic_year}-{item.school}</h4>
                </div> : <Popover placement="bottom" title={null} arrow={false} content={handleGetInfoTeam(item.rank)} trigger="click">
                  <h3 className='cursor-pointer font-bold text-sm md:text-2xl flex items-center'>{item.team}<ArrowDown2 className='ml-1 md:ml-2 ' size="32" variant="Bold" color="#FFFFFF" /></h3>
                </Popover>}

              </div>
            }
          })}

        </div>
      }


    </div>
  );
};

export default ResultContest;
