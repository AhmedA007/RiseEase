/*
References: 
For setting up the environment, Andriod Studio(for emulator), react-native cli, and running the app on the emulator:
https://www.youtube.com/watch?v=8ejuHsaXiwU
https://reactnative.dev/docs/environment-setup
How to use react-native:
https://reactnative.dev/docs/tutorial


*/

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
  Switch,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  // State for switches
  const [bedTimeEnabled, setBedTimeEnabled] = useState(true);
  const [alarmEnabled, setAlarmEnabled] = useState(true);
  
  // Days of the week for calendar
  const daysOfWeek = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [22, 23, 24, 25, 26, 27];
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerName}>Hunter,</Text>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.sunEmoji}>🌞</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bellButton}>
          <Ionicons name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      {/* Notification Card */}
      <View style={styles.notificationCard}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        <Text style={styles.notificationText}>You have slept 09:30</Text>
        <Text style={styles.notificationSubtext}>
          That is above your <Text style={styles.underlinedText}>recommendation</Text>
        </Text>
      </View>
      
      {/* Sleep Calendar Section */}
      <Text style={styles.calendarTitle}>Your Sleep Calendar</Text>
      
      {/* Days of week calendar */}
      <View style={styles.calendar}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.calendarColumn}>
            <Text style={styles.dayText}>{day}</Text>
            <View style={[
              styles.dateCircle, 
              dates[index] === 24 ? styles.activeDateCircle : null
            ]}>
              <Text style={[
                styles.dateText,
                dates[index] === 24 ? styles.activeDateText : null
              ]}>
                {dates[index]}
              </Text>
            </View>
          </View>
        ))}
      </View>
      
      {/* Sleep Tools Section */}
      <View style={styles.toolsContainer}>
        {/* Bed Time Card */}
        <View style={styles.toolCard}>
          <View style={styles.toolHeader}>
            <View style={styles.toolIconContainer}>
              <FontAwesome5 name="bed" size={20} color="#fff" />
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={20} color="#8BA0B2" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.toolTitle}>Bed time</Text>
          <Text style={styles.toolTime}>7H and 28Min</Text>
          
          <Switch
            value={bedTimeEnabled}
            onValueChange={setBedTimeEnabled}
            trackColor={{ false: '#3e3e3e', true: '#50D890' }}
            thumbColor="#fff"
            style={styles.switch}
          />
        </View>
        
        {/* Alarm Card */}
        <View style={styles.toolCard}>
          <View style={styles.toolHeader}>
            <View style={styles.toolIconContainer}>
              <FontAwesome5 name="clock" size={20} color="#fff" />
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={20} color="#8BA0B2" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.toolTitle}>Alarm</Text>
          <Text style={styles.toolTime}>16H and 18Min</Text>
          
          <Switch
            value={alarmEnabled}
            onValueChange={setAlarmEnabled}
            trackColor={{ false: '#3e3e3e', true: '#50D890' }}
            thumbColor="#fff"
            style={styles.switch}
          />
        </View>
      </View>
      
      {/* Sleep Problem Card */}
      <View style={styles.problemCard}>
        <View>
          <Text style={styles.problemQuestion}>Have a problem</Text>
          <Text style={styles.problemTitle}>Sleeping?</Text>
          
          <TouchableOpacity style={styles.assistantButton}>
            <Text style={styles.assistantButtonText}>Go to Assistant</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sleepImageContainer}>
          <Image 
            source={require('./assets/sleeping.png')} 
            style={styles.sleepImage}
          />
        </View>
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="stats-chart" size={24} color="#7A6E9E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#7A6E9E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings" size={24} color="#7A6E9E" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F38',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerContent: {
    flex: 1,
  },
  headerName: {
    color: '#AAAACC',
    fontSize: 16,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sunEmoji: {
    fontSize: 22,
    marginLeft: 8,
  },
  bellButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#807946',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCard: {
    backgroundColor: '#176B87',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 16,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  notificationSubtext: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  underlinedText: {
    textDecorationLine: 'underline',
  },
  calendarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  calendarColumn: {
    alignItems: 'center',
  },
  dayText: {
    color: '#AAA',
    marginBottom: 8,
  },
  dateCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDateCircle: {
    backgroundColor: 'white',
  },
  dateText: {
    color: '#AAA',
  },
  activeDateText: {
    color: '#1E1F38',
    fontWeight: 'bold',
  },
  toolsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  toolCard: {
    backgroundColor: '#1a3b59',
    borderRadius: 16,
    padding: 16,
    width: '48%',
  },
  toolHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  toolIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#176B87',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toolTime: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 12,
  },
  switch: {
    alignSelf: 'flex-start',
  },
  problemCard: {
    backgroundColor: '#1a4d47',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  problemQuestion: {
    color: '#AAA',
    fontSize: 14,
  },
  problemTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  assistantButton: {
    backgroundColor: '#50D890',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  assistantButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sleepImageContainer: {
    justifyContent: 'center',
  },
  sleepImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#16162A',
    borderRadius: 16,
    padding: 16,
    marginTop: 'auto',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default App;