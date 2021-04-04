import { Link } from 'gatsby';
import * as React from 'react';

import { Hero, Layout, Section } from 'components';

function IndexPage() {
  return (
    <Layout
      title="Journey to Healing"
      transparent
    >
      <Hero />

      <Section>
        <h2>Services</h2>

        <ul>
          <li>
            <Link to="/individuals">Individuals</Link>
          </li>
          <li>
            <Link to="/couples">Couples</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/rehabilitation">Rehabilitation</Link>
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Why Psychotherapy Helps</h2>

        <p>
          Therapy provides a safe and confidential environment to identify and resolve personal and interpersonal issues. Getting the help you need can greatly enhance your quality of life.  In therapy, you will discover new insights and learn about the positive and negative impacts of early life experiences on your current mode of functioning. No matter what you are currently experiencing, therapy will help you sort out the confusion, helping you gain understanding and provide you with coping strategies that will make life more manageable.
        </p>

        <p>
          If your answer is yes to any of the questions below, therapy can be of great help to you and/or your loved ones.
        </p>

        <ul>
          <li>
            Are you having feelings that are too intense about life?
          </li>

          <li>
            Have you suffered a trauma that you can’t seem to stop thinking about?
          </li>

          <li>
            Do you have unexplained and recurrent headaches, stomach-aches or a rundown immune system?
          </li>

          <li>
            Are you hearing voices/noises that no one else can hear?
          </li>

          <li>
            Are you disturb by seeing, smelling for feeling things that others do not experience?
          </li>

          <li>
            Are you using a substance to cope with life?
          </li>

          <li>
            Do you feel disconnected from previously beloved activities?
          </li>

          <li>
            Are any of your relationships strained?
          </li>

          <li>
            Have your friends and/or family told you they’re concerned about you?
          </li>
        </ul>
      </Section>
    </Layout>
  );
}

export default IndexPage;
