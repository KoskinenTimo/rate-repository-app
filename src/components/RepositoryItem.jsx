import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: theme.colors.textWhite
  },
  upperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lowerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    marginEnd: 10
  },
  textUpper: {
    width: 250
  },
  blueBackground: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    padding:10,
    margin: 5,
    borderRadius: 8,
    flexGrow: 0,
    fontFamily: theme.fonts.main
  },
  textBoxLower: {
    padding: 20
  }
});

const handleNumberChange = (number) => {
  if(number >= 1000) {
    number = Math.round(number/100);
    return `${number/10}k`;
  }
  return number;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>    
      <View style={styles.upperContainer}>

        <Image style={styles.image} source={{uri: item.ownerAvatarUrl}}/>

        <View style={{display: 'flex'}}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.textUpper}
          >
            {item.fullName}
          </Text>
          <Text
            style={styles.textUpper}
            fontSize="body"
          >
            {item.description}
          </Text>
          <View style={{display:'flex', flexDirection:'row'}}>
            <Text
              style={styles.blueBackground}
              fontWeight="bold"
            >
              {item.language}
            </Text>
          </View> 

        </View>        
      </View>

      <View
        style={styles.lowerContainer}
      >
        <View style={styles.textBoxLower}>
          <Text fontWeight="bold">{handleNumberChange(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.textBoxLower}>
          <Text fontWeight="bold">{handleNumberChange(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.textBoxLower}>
          <Text fontWeight="bold">{handleNumberChange(item.reviewCount)}</Text>
          <Text>Review</Text>
        </View>
        <View style={styles.textBoxLower}>
          <Text fontWeight="bold">{handleNumberChange(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>        
      </View>

    </View>
  );
};

export default RepositoryItem;