import React from 'react'
import reactWeather from '../assets/Portfolio/reactweatherapp.png';
// import portfolioimage from '../assets/Portfolio/PortfolioImage2.jpg';
// import reactWeather from '../assets/Portfolio/WeatherImage.jpg';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      href: 'https://nasirhussain-react-weather-app.netlify.app/',
      href2: 'https://github.com/NasirHussain5226'

    },
    {
      id: 2,
      src: reactWeather,
      href: 'https://nasirhussain-react-weather-app.netlify.app/',
      href2: 'https://github.com/NasirHussain5226'

    },
    {
      id: 3,
      src: reactWeather,
      href: 'https://github.com/NasirHussain5226',
      href2: 'https://github.com/NasirHussain5226'
    },
    {
      id: 4,
      src: reactWeather,
      href: 'https://github.com/NasirHussain5226',
      href2: 'https://github.com/NasirHussain5226'
    },
  ];
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-700 text-white mx-auto w-full pb-12'>
      <div className='max-w-screenl-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-7 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-5 '>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 sm:px-0'>

          {portfolios.map(({ id, src, href, href2 }) => (

            <div key={id} className='shadow-md shadow-gray-600 rounded-lg w-full'>
              <img src={src} alt="Weather" className='hover:scale-105 duration-200 rounded-md cursor-pointer' />
              <div className='flex justify-center items-center'>
                <a href={href} className='w-1/2 px-5 py-2 flex justify-center m-3 duration-200 hover:scale-105'>Demo</a>
                <a href={href2} className='w-1/2 px-5 py-2 flex justify-center m-3 duration-200 hover:scale-105'>Code</a>
              </div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio