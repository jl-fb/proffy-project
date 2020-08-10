import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, AsyncStorage } from 'react-native';
import {
  TextInput,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import colors from '../../global/styles/styles';
import api from '../../service/api';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  const [favorites, setFavorites] = useState<number[]>([]);

  async function loadFavorites() {
    await AsyncStorage.getItem('favorites').then((res) => {
      if (res) {
        const favortitedTeachers = JSON.parse(res);
        const idsFavorited = favortitedTeachers.map(
          (teacher: Teacher) => teacher.id
        );
        setFavorites(idsFavorited);
      }
    });
  }

  function handleToggleFilterVisible() {
    setIsFilterVisible(!isFiltersVisible);
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  async function handleFilterSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        week_day,
        subject,
        time,
      },
    });
    console.log('voltou teacher', teachers);
    setTeachers(response.data);
    setIsFilterVisible(false);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color={colors.textPurpleLight} />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor={colors.inactiveTabText}
              style={styles.input}
              value={subject}
              onChangeText={(text) => {
                setSubject(text);
              }}
              placeholder="Qual a matéria?"
            ></TextInput>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor={colors.inactiveTabText}
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => {
                    setWeekDay(text);
                  }}
                  placeholder="Qual o dia?"
                ></TextInput>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor={colors.inactiveTabText}
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => {
                    setTime(text);
                  }}
                  placeholder="Qual horario?"
                ></TextInput>
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFilterSubmit}
            >
              <Text style={styles.submitButtonText}>Buscar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            teacher={teacher}
            key={teacher.id}
            favorited={favorites.includes(teacher.id)}
          ></TeacherItem>
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
