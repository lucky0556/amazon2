import './Third.css';
import styles from './third2.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Third()
{
    const arr=[
        {link:"https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_GW_PC_Hero_H1_BB_Shopnow_2x._CB794880602_.jpg"},
        {link:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/PC_Hero_Asin_3000x1200_LA_2x._CB794840181_.jpg"},
        {link:"https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/HeroQ2/toys/MayART25/PC_Hero_Asin_3000x1200-1POOLS-FDFO._CB794846381_.jpg"}
    ]

    const arr2=[
        {link:"https://m.media-amazon.com/images/I/81yuJNKP5sL._AC_SY200_.jpg"},
        {link:"https://m.media-amazon.com/images/I/717WiuxL2XL._AC_SY200_.jpg"},
        {link:"https://m.media-amazon.com/images/I/71vXhM3XFkL._AC_SY200_.jpg"},
        {link:"https://m.media-amazon.com/images/I/817E4h9a6PL._AC_SY200_.jpg"},
        {link:"https://m.media-amazon.com/images/I/81l228yQGfL._AC_SY200_.jpg"},
        {link:"https://m.media-amazon.com/images/I/516QguRimLL._AC_SY200_.jpg"}
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
      };

      var settings2 = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "linear",
      };
      console.log("Viewport width: " + window.innerWidth);

    return(
        <div className='main'>
        <div className='ass'>
            <Slider {...settings}>
                {arr.map((d)=>(
                        <div className='don'>
                        <img className='phot' src={d.link}/>
                        </div>
                ))}
            </Slider>

            <div className='every'>
            <div className={styles.display}>
            
            
                <div className='block1'>
                    <p className='heading'>Appliances for your home | up to 55% off</p>
                    <div className={styles.photo}>
                        <div className={styles.photo1}>
                        <img className='img' alt='photo' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg'/>
                        <p className='sen'>furniture</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg' />
                        <p className='sen'>fridge</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg'/>
                        <p className='sen'>microwave</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img'src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg'/>
                        <p className='sen'>washing machine</p>
                        </div>
                        
                    </div>
                    <p className='sen1'>see more</p>
                </div>
                <div className='block1'>
                    <p className='heading'>Starting at just 149 </p>
                    <div className={styles.photo}>
                    <div className={styles.photo1}>
                        <img className='img' alt='photo' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_2._SY232_CB567468220_.jpg'/>
                        <p className='sen'>bedspread</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_3._SY232_CB567468220_.jpg' />
                        <p className='sen'>curtain</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_4._SY232_CB567468220_.jpg'/>
                        <p className='sen'>stand</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img'src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_1._SY232_CB567468220_.jpg'/>
                        <p className='sen'>idol</p>
                        </div>
                    </div>
                    <p className='sen1'>explore all</p>
                </div>
                <div className='block1'>
                    <p className='heading'>Revamp your home in style</p>
                    <div className={styles.photo}>
                    <div className={styles.photo1}>
                        <img className='img' alt='photo' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg'/>
                        <p className='sen'>mat</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg' />
                        <p className='sen'>toy</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg'/>
                        <p className='sen'>stand</p>
                        </div>
                        <div className={styles.photo1}>
                        <img className='img'src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg'/>
                        <p className='sen'>lamp</p>
                        </div>
                    </div>
                    <p className='sen1'> see more</p>
                </div>
            </div>
           
            </div>

            
        </div>
        <div className='divide'>
        <div className='display1'>
                <div className='block3'>
                <p className='heading'>Up to 60% off | Kitchen essentials</p>
                <p className='sen2'>see all offers</p>
                </div>
                <div className='block2'>
            <Slider {...settings2}>
                {arr2.map((d)=>(
                    <div className='division'>
                    <img className='img3' src={d.link}/>
                    </div>
                ))}
            </Slider> 
            </div>
                 
            
            </div>
            </div>
        
        </div>
        
    )

}

export default Third;