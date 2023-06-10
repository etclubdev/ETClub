import React from "react";
import "./thinking.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import feelingApi from "../../api/feelingApi";
const Thinking = () => {
  const options = {
    dotsEach: true,
    loop: false,
    nav: false,
    margin: 20,
    items: 3,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const [data, setData] = React.useState([]);
  const fetchFeelings = async () => {
    try {
      const dataApi = await feelingApi.getAll();
      setData(dataApi);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchFeelings();
  }, []);
  return (
    <div>
      <div className='thingking container'>
        <div className='thingking-name'>CẢM NGHĨ</div>
        {data.length > 0 ? (
          <OwlCarousel className='owl-theme thingking-list' {...options}>
            {data?.map((item) => (
              <div key={item.id} className='thingking-item item'>
                <div className='thingking-quote'>
                  <img src='/img/Rectangle 2640.png' alt='' />
                </div>
                <div className='thingking-desc'>
                  <p>{item.quote}</p>
                </div>
                <div className='thingking-detail'>
                  <div className='thingking-avatar'>
                    <img
                      src={`http://127.0.0.1:1111/public/images/feeling/${item.avatar}`}
                      alt=''
                    />
                  </div>
                  <div className='thingking-info'>
                    <div className='info-name'>{item.author}</div>
                    <div className='info-where'>{item.department}</div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Thinking;
