/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [data, setData] = React.useState({
    sembuh: 0,
    positif: 0,
    meninggal: 0,
    dirawat: 0,
  });

  React.useEffect(() => {
    const FetchAPI = async () => {
      const api = await fetch(
        'https://data.covid19.go.id/public/api/prov.json',
      );
      const json = await api.json();
      const e = json.list_data.filter((r: any) => {
        return r.key === 'BALI';
      });
      setData({
        sembuh: e[0].jumlah_sembuh,
        positif: e[0].jumlah_kasus,
        meninggal: e[0].jumlah_meninggal,
        dirawat: e[0].jumlah_dirawat,
      });
    };
    FetchAPI();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.bgTop}>
        <View style={styles.container}>
          <View style={styles.topbar}>
            <View>
              <Image source={require('./assets/logo.png')} />
            </View>
            <View>
              <Image source={require('./assets/avatar.png')} />
            </View>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Stastictic
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: '400',
                marginTop: 10,
                marginBottom: 15,
              }}>
              Covid-19 indonesia stastictic
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                justifyContent: 'center',
                backgroundColor: '#DE7649',
                borderRadius: 10,
                padding: 15,
                width: 155,
                marginBottom: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                  marginBottom: 13,
                }}>
                Affected
              </Text>
              <Text style={{color: 'white', fontSize: 24, fontWeight: '800'}}>
                {data.positif}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                justifyContent: 'center',
                backgroundColor: '#DE4949',
                borderRadius: 10,
                width: 155,
                padding: 15,
                marginBottom: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                  marginBottom: 13,
                }}>
                Death
              </Text>
              <Text style={{color: 'white', fontSize: 24, fontWeight: '800'}}>
                {data.meninggal}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                justifyContent: 'center',
                backgroundColor: '#70C154',
                borderRadius: 10,
                padding: 15,
                marginBottom: 15,
                marginRight: 15,
                width: 100,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                  marginBottom: 13,
                }}>
                Revive
              </Text>
              <Text style={{color: 'white', fontSize: 24, fontWeight: '800'}}>
                {data.sembuh}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                justifyContent: 'center',
                backgroundColor: '#52B2D0',
                borderRadius: 10,
                padding: 15,
                marginBottom: 15,
                marginRight: 15,
                width: 100,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                  marginBottom: 13,
                }}>
                Active
              </Text>
              <Text style={{color: 'white', fontSize: 24, fontWeight: '800'}}>
                {data.dirawat}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                justifyContent: 'center',
                backgroundColor: '#CA45CD',
                borderRadius: 10,
                padding: 15,
                marginBottom: 15,
                marginRight: 15,
                width: 100,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                  marginBottom: 13,
                }}>
                Seriouse
              </Text>
              <Text style={{color: 'white', fontSize: 24, fontWeight: '800'}}>
                1.010
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* instruction */}
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Instruction</Text>
          <Text style={{fontSize: 14, fontWeight: '300', marginTop: 10}}>
            Help you to prevent viruses better
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image source={require('./assets/hero.png')} />
              <Text style={{marginTop: 10, fontSize: 16}}>Mask</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgTop: {
    backgroundColor: '#373E46',
  },
  textWhite: {
    color: 'white',
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingRight: 30,
    paddingLeft: 30,
  },
});

export default App;
