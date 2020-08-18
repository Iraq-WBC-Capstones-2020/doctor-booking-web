import React from 'react';
import { Container } from 'react-bootstrap';
import QuestionItem from './QuestionItem';

function Qustions() {
  const questions = [
    {
      question: 'who can use this website?',
      answer: 'the website is for anyone that went to find doctor easily',
      id: 1,
    },
    {
      question:
        'Am I required to create a acount for making an online appointment?',
      answer: 'no need for a user to create an acount',
      id: 2,
    },
    {
      question:
        'Can I schedule more than one appointment with a single doctor?',
      answer: 'yes, you can do that',
      id: 3,
    },
    {
      question: 'Can I reschedule an online appointment?',
      answer:
        'yes, if you have an argent situation you can reschedule to anthor time',
      id: 4,
    },
    {
      question: 'How will I know if my booking is confirmed?',
      answer:
        'the secretary tall you to confirm the appoinment by calling or sending email',
      id: 5,
    },
    {
      question:
        'should i include a name of a doctor when i want to search for a specific specialty ?',
      answer: 'no, just enter the specialty ',
      id: 6,
    },

    {
      question: "What will the doctor's consultation fee be?",
      answer: 'it depend on the doctor itself',
      id: 17,
    },
    {
      question:
        'I am a Doctor and I have done my registration. What should I do next?',
      answer:
        'we send you an email that you are now in our website and user can search and find you',
      id: 8,
    },

    {
      question:
        'Can I use the app for checking availability of Doctor and \n his fees without actually booking or scheduling an appointment ?',
      answer:
        'yes, while you searching, click on the doctor card that you went know about him, it open a anther page that contain doctor informaition',
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
