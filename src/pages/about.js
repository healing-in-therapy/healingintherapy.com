import React from 'react';

import { Image, Layout, SEO } from 'components';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />

      <div>
        <h1>About</h1>

        <Image filename="photo.jpg" />

        <p>
          Hi, my name is Kayla Mach (LMFT 93339). I am a Licensed Marriage and Family Therapist and associated with the <a href="http://www.camft.org/IAS/COS/Default.aspx" rel="noopener noreferrer" target="_blank">California Association of Marriage & Family Therapists</a>. I graduated from Antioch University with a Masters Degree in Clinical Psychology and a Bachelor’s Degree in University of California, Santa Barbara.
        </p>

        <p>
          I have been working for the County of Orange Health Care Agency, Behavioral Health Services serving the adults in Orange County suffering from severe and persistent mental health conditions, such as schizophrenia, severe mood disorders, anxiety, post-traumatic stress disorder and personality disorders since 2010.
        </p>

        <p>
          My private practice office is located in Santa Ana, California but I also conduct my sessions in the field or at my client’s home depending on their needs, comfort and convenience. Based on my experiences working in the non-traditional therapeutic environment such as in the field or at my client’s home, I find that my clients feel less stigma, more comfortable and as a result, more at ease to open up and more willing to actively work on their presenting problems.
        </p>

        <p>
          My goal is not only to talk, but for my clients to actively practice what we talk about in session. My field services, if requested by clients, is to walk alongside them in their environment to work on coping skills publicly in the real world. I specialize in working with the severe and persistent mental illness population, as well as with higher functioning, working professionals who struggle with various individual issues and/or marital problems.
        </p>

        <h2>Education</h2>

        <ul>
          <li>
            M.A Clinical Psychology, Antioch University.
          </li>

          <li>
            B.A. Psychology, UC Santa Barbara.
          </li>
        </ul>

        <h2>Trainings</h2>

        <ul>
          <li>
            Completed level 3 of Gottman Method Couples Therapy.
          </li>

          <li>
            Motivational Interviewing.
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default AboutPage;
