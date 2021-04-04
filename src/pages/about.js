import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Column, Layout, Row, Section } from 'components';

function AboutPage() {
  return (
    <Layout title="About">
      <h1>About</h1>

      <Section>
        <Row>
          <Column>
            <p>
              Hello! My name is Kayla Mach and I am a Licensed Marriage and
              Family Therapist in the state of California, specifically Orange
              County. I have been working in the field of mental health serving
              Orange County residents since 2010. I have mainly worked in mental
              health outpatient clinics in the past 10 years serving clients
              with severe and persistent mental illnesses. As a Licensed
              Marriage and Family Therapist, I am deeply invested in the growth
              and mental health of my clients. I understand the pains in life of
              feeling stuck, lost, unseen, or feeling alone despite much efforts
              for change. My desire to work with individuals is fueled by my
              passion to help those who are thinking about making changes in
              their life. I am passionate about helping you gain a better
              understanding of who you are and walk alongside you as you embark
              on your journey to healing, finding restoration and a new life. I
              want to create a comfortable, supportive and nonjudgmental
              environment for you to examine your life and tell your life story.
              Together, I will work collaboratively with you to identify
              maladaptive behavior patterns that have prevented you from
              achieving the life you desire. I have worked with a wide variety
              of clients in different settings ranging from clients experiencing
              psychosocial stressors to acute psychiatric disorders. As a result
              of my wide range of experiences, I believe I can help you overcome
              the barriers that are preventing you from moving toward the right
              direction. I provide a highly personalized approach, utilizing
              various therapeutic techniques to target each of my client’s needs
              and presenting problems.
            </p>

            <h3>Also experienced in:</h3>

            <p>
              Addictions, Family conflicts, Grief, Intimacy-related issues,
              Eating disorders, Sleeping disorders, Parenting issues, Anger
              management, Self esteem, Career difficulties, Coping with life
              changes, Coaching, Compassion fatigue, ADHD, Abandonment,
              Antisocial Personality, Attachment Issues, Avoidant Personality,
              Caregiver Issues and Stress, Commitment Issues, Communication
              Problems, Control Issues, Dependent Personality, Disruptive Mood
              Dysregulation Disorder (DMDD), Dissociation, Divorce and
              Separation, Emptiness, Family of Origin Issues, Family Problems,
              Fatherhood Issues, Forgiveness, Guilt and Shame, Impulsivity,
              Infidelity, Isolation/Loneliness, Jealousy, Life Purpose, Mood
              Disorders, Narcissism, Obsessions, Compulsions, and OCD, Panic
              Disorder and Panic Attacks, Paranoia, Personality Disorders,
              Phobias, Postpartum Depression, Posttraumatic Stress, Seasonal
              Affective Disorder (SAD), Self-Harm, Sexuality, Social Anxiety and
              Phobia, Women's Issues, Young Adult Issues.
            </p>

            <h3>Clinical approaches:</h3>

            <p>
              Attachment-Based Therapy, Client-Centered Therapy, Cognitive
              Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT),
              Emotionally-Focused Therapy (EFT), Existential Therapy, Eye
              Movement Desensitization and Reprocessing (EMDR), Gottman Method,
              Mindfulness Therapy, Motivational Interviewing, Narrative Therapy,
              Psychodynamic Therapy, Solution-Focused Therapy, Trauma-Focused
              Therapy
            </p>

            <h3>LICENSING</h3>

            <p>LMFT #93339 (Expires: 2021-08-31)</p>
          </Column>

          <Column width={300}>
            <StaticImage alt="Photo of Kayla Mach" src="../images/photo.jpg" />
          </Column>
        </Row>
      </Section>
    </Layout>
  );
}

export default AboutPage;
