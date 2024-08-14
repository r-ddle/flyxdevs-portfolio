import React from 'react';
import Tabs from './Accordian'
import Hero from './Hero'

const About = () => {
  return (
    <>
        <Hero
        SpanTitle="Flyx Devs: "
        Title="Creating Beautiful, Smooth and Clean Applications."
        paragraph="Since 2024"
        />
        <Tabs />
    </>

  );
};

export default About;
