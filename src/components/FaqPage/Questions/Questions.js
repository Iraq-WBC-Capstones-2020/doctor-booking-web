import React from 'react';
import { Container } from 'react-bootstrap';
import QuestionItem from './QuestionItem';

function Qustions() {
  const questions = [
    {
      question: 'Who can use this website?',
      answer: 'The website is for anyone who wants to find a doctor easily',
      id: 1,
    },
    {
      question:
        'Am I required to create an acount for booking an online appointment?',
      answer: 'No need for an account to book an appointment',
      id: 2,
    },
    {
      question:
        'Can I schedule more than one appointment with a single doctor?',
      answer: 'Yes, you can do that',
      id: 3,
    },
    {
      question: 'Can I reschedule an online appointment?',
      answer:
        'Yes, if you have an urgent situation you can reschedule to another time',
      id: 4,
    },
    {
      question: 'How will I know if my booking is confirmed?',
      answer: 'The secretary will call you to confirm the appoinment',
      id: 5,
    },
    {
      question:
        'Should I include a name of a doctor when I want to search for a specific specialty?',
      answer: 'No, just select the specialty ',
      id: 6,
    },

    {
      question: "What the doctor's consultation fee will be?",
      answer: 'It depends on the doctor himself',
      id: 17,
    },
    {
      question:
        'I am a Doctor and I have done my registration. What should I do next?',
      answer:
        'We will send you an email to confirm the registration then any user can search and find you',
      id: 8,
    },

    {
      question:
        'Can I use the app for checking the availability of a doctor \n without actually booking or scheduling an appointment?',
      answer:
        'Yes, while you are searching, click on the doctor card that you want to know about him, it will open another page that contains doctor informaition',
      id: 9,
    },
  ];

  return (
    <div>
      <Container className="my-5">
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </Container>
    </div>
  );
}

export default Qustions;
