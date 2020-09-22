import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  Button,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Question from './Question'

export default function Main() {
  const [loop, setLoop] = useState([1,2,3]) // ,4,5,6,7,8,9,10,11,12,13,14,15
  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)
  const [operation, setOperation] = useState(null)
  const [result, setResult] = useState(null)
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    setNumber1(Math.round(Math.random() * 10))
    setNumber2(Math.round(Math.random() * 10))
    let op = ['+', '-', '/', '*']
    let index = Math.round(Math.random() * 3)
    setOperation(op[index])
  }, [])

  useEffect(() => {
    // console.log(-2 == '-2')
    switch (operation) {
      case '+':
        setResult(number1 + number2)
        break;
      case '*':
        setResult(number1 * number2)
        break;
      case '-':
        setResult(number1 - number2)
        break;
      case '/':
        if ((number1 / number2) % 1 != 0) {
          setResult((number1 / number2).toFixed(2))
        } else {
          setResult(number1 / number2)
        }
        break;
    }
  }, [number1, number2, operation])

  if (loop.length >= 16) {
    return (
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.9)', width: wp('100%') }}>
        <Text style={{ color: 'white', fontWeight: '700', fontSize: 50 }}>Well Done!</Text>
        <TouchableNativeFeedback>
          <Button title='Home' onPress={() => console.log('go to home')} />
        </TouchableNativeFeedback>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position:'absolute', bottom: 30, backgroundColor: 'gray' }}>
        {/* <ScrollView> */}
          { loop.map((_, i) => (
            <View key={i}>
              <Question 
                number1={number1}
                number2={number2}
                operation={operation}
                result={result}
                answer={answer}
                setAnswer={setAnswer}
              />
              <Button title='submit' onPress={() => console.log(i)} />
            </View>
          )) }
        {/* </ScrollView> */}
      </View>
    </View>
  );
}