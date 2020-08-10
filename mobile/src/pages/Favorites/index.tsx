import React, { useState } from 'react';
import { View, AsyncStorage } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    await AsyncStorage.getItem('favorites').then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);
        (teacher: Teacher) => teacher.id;
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem teacher={teacher} key={teacher.id} favorited>
              {' '}
            </TeacherItem>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default Favorites;
