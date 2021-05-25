import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = [
  `Front-end developer at the moment, have had fun with many things. Coding at job since 2013, 
  coding to drown consciousness since 2016. Full time C++ developer - 2013-2019, fixed a lot of bugs, learned ...meh, not much.
  Woke up in 2016 and dreamt of earning with Android apps, a basic apps went to playstore.
  Then I found flutter and spent some time trying to replicate a fairly complex animation from a famous app.
  Then python happened, scripted things, tried to make my (others' around me) life easy and then I found ReactJS.
  Tried to connect Python (flask) to ReactJS & ended up multiplexing websockets for fun.
  Many things arrived & left in the process.`,
  `Switched job, ReactJS official now. Lots of coding in the startup, lots of it.
  Seting up cypress, fair amount of investment in handling forms, played a lot with the custom hooks.
  Learning NestJS right now & SQL of course.`,
  `Highly interested in morality, logic, psychology, spirituality (even though agnostic). Vipassana practitioner for many years.
  Love articulating thoughts (can't always be called good writing). You might find some of that noise on this site as well.
  Grew up reading religious (sometimes forbidden by family) texts, was moulded into stounch Arya Samaji.
  Started reading Buddhism in college & srarted practicing Vipassana. Then found shortcomings in Arya Samaj & rejected the dicey parts.
  Then kept re-assessing the faiths & beliefs...
  Then started the process of unravelling myself (with external help as well).
  Then focused on ego, relationships, social skills (that I lacked, still do).
  Got into a lot of arguments, was forced to think through evereeeeeething, until turning the focus back to the listeners.
  Then the stuff about validations & why I speak. Then started to learn to listen, to ask, to penetrate instead of proving.
  Still going ....
  It's hard to capture idendity, it's hard to capture autobiography. I love reading those, but not good at writing mine.
  Hoping that this intro has at least some meaning eventually!
  Head on to Blogs if you're still not bored or frustrated, this head makes a lot of noise!`,
];

const AboutMe = () => {
  const description = pageText.concat(' ');
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Pulkit', 'Singh', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <h2>Developer</h2>
        {pageText.filter((val, idx) => idx <2).map(para => <p>
          {para}
        </p>)}
        <h2>Person</h2>
        {pageText.filter((val, idx) => idx >1).map(para => <p>
          {para}
        </p>)}
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Muzaffarnagar, UP, India"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col> */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Coding is my art"
            textH3="Coding is my escape"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
