import React from "react";
import "./MyCard.css";
import Card from "./Card"
import FeaturedCard from './FeaturedCard'

const MyCard = () => {
  return (
    <>
      <div className="container-fluid" style={{ padding: "20px" }}>
        <h1>Our Services</h1>
        <div className="grid-container">
          <Card
            title="Mobile Apps"
            description="Top notch mobile application development solutions for Android and iOS using React Native and Flutter"
            imgUrl="https://www.incerro.ai/assets/services/mobile.svg"
          />
          
          <Card
            title="Web Apps"
            description="Highly scalable and performant web applications using NextJs, Gatsby, Angular and Vue"
            imgUrl="https://www.incerro.ai/assets/services/web.svg"
          />

          <Card
            title="Headless Development"
            description="Developing pluggable headless solutions for your business using Strapi, Contentful, Sanity and Shopify"
            imgUrl="https://www.incerro.ai/assets/services/headless.svg"
          />

           <Card
            title="Resource Augmentation"
            description="Augment your team with pre-vetted, highly skilled engineers to
            accelerate your product development"
            imgUrl="https://www.incerro.ai/assets/services/re.svg"
          />

           <Card
            title="Generative AI"
            description=" Leverage the power of AI and Chatbots to automate your business
            processes and make smarter decisions"
            imgUrl="https://www.incerro.ai/assets/services/ai.svg"
          />
           <FeaturedCard/>
        </div>
        
      </div>
    </>
  );
};

export default MyCard;
