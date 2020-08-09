import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import landingImg from '../../global/assets/images/landing.png';
import studyIcon from '../../global/assets/images/icons/study.png';
import heartIcon from '../../global/assets/images/icons/heart.png';
import giveClassesIcon from '../../global/assets/images/icons/give-classes.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
function Landing() {
  const { navigate } = useNavigation();

  function handleNaviToClassesPages() {
    navigate('GiveClasses');
  }

  function handleNaviToStudyPages() {
    navigate('Study');
  }
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer </Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNaviToStudyPages}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNaviToClassesPages}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas {'  s'}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
