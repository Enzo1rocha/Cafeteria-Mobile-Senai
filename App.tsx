import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do codigo</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name='person' size={20} color="#2f2d2c"></Ionicons>
        </View>

      </View>
      {/* header */}

      {/* content */}
      <View style={styles.content}>
        <View style={styles.grettingSection}>
      
          <Text style={styles.grettingTitle}>Bom dia!</Text>
          <Text style={styles.grettingSubtitle}> Que tal um café hoje?</Text>
      
        </View>
      

      <View>

        <Image source={require('./assets/coffee.jpg')}></Image> 
        <Text>Cappuccino Especial</Text>
        <Text>Cremoso e delicioso</Text>
        <Text>R$ 12,90</Text>
      
      </View>
    </View>
      
      {/* content */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2f2d2c"
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
    color: "#9b9b9b"
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 20

  },
  
  grettingSection: {
    marginTop:10,
    marginBottom: 24,
  },

  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  grettingSubtitle: {
    fontSize: 16,
    marginTop: 8,
    color: "#9b9b9b"
  }
})