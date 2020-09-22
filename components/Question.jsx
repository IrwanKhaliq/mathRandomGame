import React from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function Question({ number1, number2, operation, result, answer, setAnswer }) {

  return ( 
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: wp('100%'),
        height: hp('10%'),
        paddingLeft: 30
      }}>
      <Text 
        style={{
          fontSize: wp('10%')
        }}>{number1} {operation} {number2} = {result}
        <TextInput
          keyboardType='number-pad'
          style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
          value={answer}
          onChangeText={setAnswer}
        />
        {/* you can use it for always keep keyboard
              <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={'always'} >
              </ScrollView>
        */}
      </Text>
    </View>
  );
}