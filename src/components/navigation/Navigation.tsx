import React, {useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import Home from '../container/pages/Home';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import CreateGame from '../container/pages/CreateGame';
import JoinGame from '../container/pages/JoinGame';
import RoomGame from '../container/pages/RoomGame';
import SignIn from '../container/pages/SignIn';
import SignUp from '../container/pages/SignUp';

export type ScreenTypes =
  | 'HOME'
  | 'CREATE_GAME'
  | 'JOIN_GAME'
  | 'ROOM_GAME'
  | 'SIGN_IN'
  | 'SIGN_UP';

export type ScreenProps = {
  goBack: () => void;
  params?: any;
  navigate: (screen_selected: ScreenTypes, params?: any) => void;
};

export default function Navigation() {
  const [screen, setScreen] = useState<ScreenTypes>('HOME');
  const [params, setParams] = useState(null);
  const [lastScreens, setLastScreens] = useState<Array<ScreenTypes>>([]);

  const navigate = (screen_selected: ScreenTypes, params_requested?: any) => {
    setLastScreens([...lastScreens, screen]);
    setScreen(screen_selected);
    setParams(params_requested);
  };
  const goBack = () => {
    if (lastScreens.length > 0) {
      const lastScreenAux = lastScreens;
      const lastScreen = lastScreenAux.pop();
      if (lastScreen) {
        setScreen(lastScreen);
      }
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          {screen === 'HOME' && (
            <Home params={params} goBack={goBack} navigate={navigate} />
          )}
          {screen === 'CREATE_GAME' && (
            <CreateGame params={params} goBack={goBack} navigate={navigate} />
          )}
          {screen === 'JOIN_GAME' && (
            <JoinGame params={params} goBack={goBack} navigate={navigate} />
          )}
          {screen === 'ROOM_GAME' && (
            <RoomGame params={params} goBack={goBack} navigate={navigate} />
          )}
          {screen === 'SIGN_IN' && (
            <SignIn params={params} goBack={goBack} navigate={navigate} />
          )}
          {screen === 'SIGN_UP' && (
            <SignUp params={params} goBack={goBack} navigate={navigate} />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
  },
});
