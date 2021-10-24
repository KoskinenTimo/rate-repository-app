import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const authToken = await AsyncStorage.getItem(this.namespace);
      console.log('result from storage');
      return authToken ? JSON.parse(authToken) : null;
    } catch (error) {
      console.log(error);
    }
  }

  async setAccessToken(accessToken) {
    try {
      const tokenStringified = JSON.stringify(accessToken);
      console.log('stringified token');
      await AsyncStorage.setItem(this.namespace,tokenStringified);
    } catch (error) {
      console.log(error);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(this.namespace);      
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthStorage;