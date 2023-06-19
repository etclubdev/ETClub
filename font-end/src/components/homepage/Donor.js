import React from "react";
import sponsorApi from "../../api/sponsorApi";
import "./donor.scss";
const Donor = () => {
  const [data, setData] = React.useState([]);
  const fetchSponsors = async () => {
    try {
      const dataApi = await sponsorApi.getAllsponsor();
      setData(dataApi?.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchSponsors();
  }, []);

  return (
    <div className='donor'>
      <h1 className='donor-title'>ĐỐI TÁC ĐỒNG HÀNH</h1>
      <div className='donor-logo'>
        {/* {data?.map((item, index) => (
          <img
            key={item.id}
            className={`donor-logo_${index + 1}`}
            src={`http://127.0.0.1:1111/public/images/sponsor/${item.logo}`}
            alt={item.name}
          />
        ))} */}
        <img
          className='donor-logo_1'
          src='/img/Donor/nashtech.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_2'
          src='/img/Donor/edu2review.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_3'
          src='/img/Donor/momo.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_4'
          src='/img/Donor/coffeeandtea.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_5'
          src='/img/Donor/intership.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_6'
          src='/img/Donor/camhouse.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_7'
          src='/img/Donor/infinity.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_8'
          src='/img/Donor/topcv.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_9'
          src='/img/Donor/diginet.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_10'
          src='/img/Donor/scommunications.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_11'
          src='/img/Donor/uehinstitute.png'
          alt='logo đối tác đồng hành'
        />
        <img
          className='donor-logo_12'
          src='/img/Donor/unknow.png'
          alt='logo đối tác đồng hành'
        />
      </div>
    </div>
  );
};

export default Donor;
