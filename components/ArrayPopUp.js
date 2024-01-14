import React, { useState, useEffect } from 'react';
import MessageBox from './MessageBox';
import { Text } from 'react-native-elements';
import { Button, TouchableOpacity, TextInput } from 'react-native';

// ArrayPopUp component definition
export default function ArrayPopUp({ value, Close, saveBigValues, createDoc }) {
  const isOne = value.start === value.end;
  const [QuestionNumber, setQuestionNumber] = useState(value.start);
  const [QuestionValues, setQuestionValues] = useState({
    name: '',
    school: '',
    dateOfBirth: '',
    grade: '',
    gender: '',
    GPA: '',
    dreamjob: '',
    personalWebsite: '',
  });

  // Array of initial questions
  const initialQuestions = [
    { Question: 'What is your first name?', edit: 'name', keyboardType: 'default' },
    { Question: 'What is the name of your school?', edit: 'school', keyboardType: 'default' },
    { Question: 'When is your date of birth? (MM/DD/YYYY)', edit: 'dateOfBirth', keyboardType: 'default' },
    { Question: 'Which grade are you currently in?', edit: 'grade', keyboardType: 'default' },
    { Question: 'What is your gender?', edit: 'gender', keyboardType: 'default' },
    { Question: 'Do you know your current GPA? If yes, what is it?', edit: 'GPA', keyboardType: 'default' },
    { Question: 'What is a dream job of yours?', edit: 'dreamjob', keyboardType: 'default' },
    { Question: 'Do you have a personal website?', edit: 'personalWebsite', keyboardType: 'url' },
  ];

  // Function to handle actions when the user presses the 'Next' or 'Finish' button
  const Action = () => {
    Close();
    if (value.type === 'create') {
      createDoc(QuestionValues);
    } else if (value.type === 'update') {
      saveBigValues(QuestionValues)
    
    }
  };

  // Function to navigate to the next question
  const GoNext = () => {
    setQuestionNumber((prev) => {
      const NewNum = prev + 1;
      return NewNum;
    });
  };

  // useEffect to check if the last question is reached and trigger the appropriate action
  useEffect(() => {
    if (QuestionNumber > value.end) {
      Close();
      Action();
    }
  }, [QuestionNumber, value.end]);

  // Function to navigate to the previous question
  const GoBack = () => {
    setQuestionNumber((prev) => {
      const NewNum = prev - 1;
      return NewNum < value.start ? prev : NewNum;
    });
  };

  // If QuestionNumber is greater than the end value, return null
  if (QuestionNumber > value.end) {
    return null;
  }

  return (
    <MessageBox Header={initialQuestions[QuestionNumber].Question} Message={''}>
      {/* TextInput for entering the answer to the current question */}
      <TextInput
        value={QuestionValues[initialQuestions[QuestionNumber].edit]}
        keyboardType={initialQuestions[QuestionNumber].keyboardType}
        onChangeText={(text) => {
          setQuestionValues((prev) => {
            const newObject = { ...prev };
            newObject[initialQuestions[QuestionNumber].edit] = text;
            return newObject;
          });
        }}
        autoCapitalize={'sentences'}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 12,
          width: '100%',
          borderRadius: 8,
          backgroundColor: '#D9D9D9',
          fontSize: 15,
        }}
      />
      {/* Button to navigate to the next question */}
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#0798AF',
          padding: 12,
          borderRadius: 5,
          alignItems: 'center',
          marginBottom: 5,
        }}
        onPress={GoNext}
      >
        <Text style={{ color: 'white', fontSize: 15 }}>{QuestionNumber < value.end || !isOne ? 'Next' : 'Finish'}</Text>
      </TouchableOpacity>
      {/* Button to navigate to the previous question */}
      {!isOne && (
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#0798AF',
            padding: 12,
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: 5,
          }}
          onPress={GoBack}
        >
          <Text style={{ color: 'white', fontSize: 15 }}>Back</Text>
        </TouchableOpacity>
      )}
      {/* Button to close the pop-up */}
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#0798AF',
          padding: 12,
          borderRadius: 5,
          alignItems: 'center',
        }}
        onPress={() => {
          Close();
        }}
      >
        <Text style={{ color: 'white', fontSize: 15 }}>Close</Text>
      </TouchableOpacity>
    </MessageBox>
  );
}
