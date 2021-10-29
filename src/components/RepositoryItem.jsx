import React from 'react';
import { View, StyleSheet, Image, Pressable, Linking } from 'react-native';
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
    padding:8,
    margin: 5,
    borderRadius: 4,
    flexGrow: 0,
    fontFamily: theme.fonts.main
  },
  textBoxLower: {
    padding: 20
  },
  gitHubButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    padding: 12,
    fontFamily: theme.fonts.main,
    textAlign: 'center',
    width: 350,
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
  }
});

const handleNumberChange = (number) => {
  if(number >= 1000) {
    number = Math.round(number/100);
    return `${number/10}k`;
  }
  return number;
};

const RepositoryItem = ({ item, singleView=false }) => {
  return (
    <View style={styles.container}>    
      <View style={styles.upperContainer}>

        <Image style={styles.image} source={{uri: item.ownerAvatarUrl}}/>

        <View style={{display: 'flex'}}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.textUpper}
            testID={`fullName-${item.id}`}
          >
            {item.fullName}
          </Text>
          <Text
            style={styles.textUpper}
            fontSize="body"
            testID={`description-${item.id}`}
          >
            {item.description}
          </Text>
          <View style={{display:'flex', flexDirection:'row'}}>
            <Text
              style={styles.blueBackground}
              testID={`language-${item.id}`}
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
          <Text
            fontWeight="bold"
            testID={`stargazersCount-${item.id}`}
          >
            {handleNumberChange(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.textBoxLower}>
          <Text
            fontWeight="bold"
            testID={`forksCount-${item.id}`}
          >
            {handleNumberChange(item.forksCount)}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.textBoxLower}>
          <Text
            fontWeight="bold"
            testID={`reviewCount-${item.id}`}
          >
            {handleNumberChange(item.reviewCount)}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.textBoxLower}>
          <Text
            fontWeight="bold"
            testID={`ratingAverage-${item.id}`}
          >
            {handleNumberChange(item.ratingAverage)}
          </Text>
          <Text>Rating</Text>
        </View>        
      </View>
      
      {
      singleView && 
      <Pressable onPress={() => Linking.openURL(item.url)}>
        <Text
          style={styles.gitHubButton}
          fontWeight="bold"
          fontSize="subheading"
        >
          Open in GitHub
        </Text>
      </Pressable>
      }
    </View>
  );
};

export default RepositoryItem;