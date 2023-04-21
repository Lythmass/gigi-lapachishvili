import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Card } from 'pages';
import { Cards } from 'config';
import { motion } from 'framer-motion';

export const Portfolio = () => {
  const displayCards = Cards.map((card, index) => {
    return (
      <Card
        key={index}
        title={card.title}
        img={card.img}
        description={card.description}
        buttons={card.buttons}
        start={card.start}
        end={card.end}
      />
    );
  });

  return (
    <div
      id='portfolio'
      className='w-full min-h-full flex flex-col justify-center items-center gap-10 py-20'
    >
      <motion.h1
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 90,
        }}
        viewport={{ once: true }}
        className='text-light-color text-4xl text-center'
      >
        Take a look at my projects...
      </motion.h1>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
        viewport={{ once: true }}
        className='w-[85%] select-none sm:w-[70%] lg:w-1/2 xl:w-[70%] h-full py-5 gap-5 border-2 border-crimson rounded-2xl text-center'
      >
        <Carousel
          infiniteLoop={true}
          emulateTouch={true}
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          renderThumbs={() =>
            Cards.map((card, index) => {
              return (
                <img
                  key={index}
                  className='h-[2.3rem] object-cover'
                  src={`images/${card.img}.png`}
                  alt={card.title}
                />
              );
            })
          }
        >
          {displayCards}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Portfolio;
