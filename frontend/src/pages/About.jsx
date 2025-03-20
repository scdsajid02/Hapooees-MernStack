import React from 'react'
import Title from '../components/Title'
import { assets } from '../../assets/assets'
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Happoes, we believe that clothing is more than just fabric—it's a
            way to express your individuality and style. Our mission is to bring
            you a curated collection of trendy, high-quality, and comfortable
            apparel that complements every moment of your life.
          </p>
          <p>
            Founded with passion and purpose, Happoes is committed to
            sustainability and fair practices. We aim to create fashion that not
            only feels good but also does good for the planet. Join us in
            celebrating creativity, diversity, and timeless designs that empower
            you to be your happiest self every day.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Happoes, our mission is to redefine fashion with a blend of
            comfort, quality, and sustainability. We are dedicated to creating
            timeless designs that celebrate individuality and inspire
            confidence. Through fair practices and eco-conscious efforts, we aim
            to make fashion a force for good—for you and the planet.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            At Happoes, quality is our cornerstone. Each piece of clothing is
            meticulously crafted and undergoes rigorous testing to meet our high
            standards of comfort, durability, and style. From material selection
            to final production, every step is designed to ensure perfection.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className='text-gray-600'>
            At Happoes, we prioritize your convenience every step of the way.
            From effortless online shopping to quick deliveries, we ensure a
            seamless experience. Our easy-to-navigate website, flexible payment
            options, and responsive customer support are designed with your
            comfort in mind. Shopping with Happoes is as enjoyable as wearing
            our clothes!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            our customers are our top priority. We are dedicated to providing
            personalized, responsive, and friendly support at every step of your
            journey. Whether it's answering inquiries, resolving issues, or
            offering guidance, we go the extra mile to ensure your satisfaction.
            With Happoes, you're not just a customer—you're family.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
}

export default About