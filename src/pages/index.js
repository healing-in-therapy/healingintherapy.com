import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { Column, Hero, Layout, Row, Section } from 'components';

function IndexPage() {
  return (
    <Layout title="Journey to Healing" transparent>
      <Hero />

      <div style={{ margin: '0 auto', width: 720 }}>
        <h2>What type of therapy are you looking for?</h2>

        <Section>
          <ul>
            <li>
              <Link to="/individuals">Individuals</Link>
            </li>
            <li>
              <Link to="/couples"> Couples</Link>
            </li>
          </ul>
        </Section>

        <Section>
          <p>
            Therapy provides a safe and confidential environment to identify and
            resolve personal and interpersonal issues. Getting the help you need
            can greatly enhance your quality of life. In therapy, you will
            discover new insights and learn about the positive and negative
            impacts of early life experiences on your current mode of
            functioning. No matter what you are currently experiencing, therapy
            will help you sort out the confusion, helping you gain understanding
            and provide you with coping strategies that will make life more
            manageable.
          </p>
          <p>
            If your answer is yes to any of the questions below, therapy can be
            of great help to you and/or your loved ones.
          </p>

          <ul>
            <li>Are you having feelings that are too intense about life?</li>
            <li>
              Have you suffered a trauma that you can’t seem to stop thinking
              about?
            </li>
            <li>
              Do you have unexplained and recurrent headaches, stomach-aches or
              a rundown immune system?
            </li>
            <li>Are you hearing voices/noises that no one else can hear?</li>
            <li>
              Are you disturb by seeing, smelling for feeling things that others
              do not experience?
            </li>
            <li>Are you using a substance to cope with life?</li>
            <li>
              Do you feel disconnected from previously beloved activities?
            </li>
            <li>Are any of your relationships strained?</li>
            <li>
              Have your friends and/or family told you they’re concerned about
              you?
            </li>
          </ul>
        </Section>

        <h2>Specialties</h2>

        <Section>
          <ul>
            <li>Stress</li>
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Bipolar disorder</li>
            <li>Relationship issues</li>
            <li>Trauma and abuse</li>
          </ul>
        </Section>

        <h2>Why Telehealth?</h2>

        <ul>
          <li>Phone</li>
          <li>Video</li>
        </ul>

        <h2>Who is Kayla Mach?</h2>

        <Section>
          <Row>
            <Column>
              <p>
                Hello! My name is Kayla Mach and I am a Licensed Marriage and
                Family Therapist in the state of California, specifically Orange
                County. I have been working in the field of mental health
                serving Orange County residents since 2010. I have mainly worked
                in mental health outpatient clinics in the past 10 years serving
                clients with severe and persistent mental illnesses.
              </p>
              <p>
                <Link to="/about">Read more about Kayla Mach</Link>
              </p>
            </Column>

            <Column width={300}>
              <StaticImage
                alt="Photo of Kayla Mach"
                src="../images/photo.jpg"
              />
            </Column>
          </Row>
        </Section>
      </div>
    </Layout>
  );
}

export default IndexPage;
