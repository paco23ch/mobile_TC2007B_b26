// App.js - Live Coding Starter Baseline
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const FEED_DATA = [
  { id: '1', title: 'Cybersecurity Lab Update', category: 'Security', author: 'Alex', image: 'https://picsum.photos/400/200?random=1' },
  { id: '2', title: 'Mobile App UI Best Practices', category: 'Design', author: 'Elena', image: 'https://picsum.photos/400/200?random=2' },
  { id: '3', title: 'Network Encryption Fundamentals', category: 'Security', author: 'Marcus', image: 'https://picsum.photos/400/200?random=3' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = selectedCategory === 'All' 
    ? FEED_DATA 
    : FEED_DATA.filter(item => item.category === selectedCategory);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Campus Activity Feed</Text>

        {/* Filter Pills Header */}
        <View style={styles.filterRow}>
          {['All', 'Security', 'Design'].map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={[styles.pill, selectedCategory === cat && styles.activePill]}
            >
              <Text style={[styles.pillText, selectedCategory === cat && styles.activePillText]}>{cat}</Text>
            </Pressable>
          ))}
        </View>

        {/* Dynamic Feed List */}
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardBody}>
                <Text style={styles.cardTag}>{item.category}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardAuthor}>By {item.author}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', paddingHorizontal: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#f8fafc', marginVertical: 12 },
  filterRow: { flexDirection: 'row', marginBottom: 16 },
  pill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#1e293b', marginRight: 8 },
  activePill: { backgroundColor: '#3b82f6' },
  pillText: { color: '#94a3b8', fontWeight: '600' },
  activePillText: { color: '#ffffff' },
  card: { backgroundColor: '#1e293b', borderRadius: 12, overflow: 'hidden', marginBottom: 16 },
  cardImage: { width: '100%', height: 160 },
  cardBody: { padding: 12 },
  cardTag: { color: '#38bdf8', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' },
  cardTitle: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  cardAuthor: { color: '#64748b', fontSize: 12, marginTop: 4 },
});