'use client';

import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

export default function ResumeDocument() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      fontFamily: 'Helvetica',
      fontSize: 11,
      padding: 30,
      backgroundColor: '#fff',
    },
    sidebar: {
      width: '35%',
      paddingRight: 10,
      borderRight: '1px solid #ccc',
    },
    main: {
      width: '65%',
      paddingLeft: 10,
    },
    section: {
      marginBottom: 20,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#555',
    },
    subHeader: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 4,
      color: '#2e7d6e',
    },
    text: {
      marginBottom: 2,
    },
    bullet: {
      marginLeft: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.section}>
            <Text style={styles.subHeader}>CONTACTS</Text>
            <Text style={styles.text}>Phone</Text>
            <Text style={styles.text}>Email</Text>
            <Text style={styles.text}>LinkedIn/Portfolio</Text>
            <Text style={styles.text}>Location</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>KEY ACHIEVEMENTS</Text>
            <Text style={styles.text}>Your Achievement</Text>
            <Text style={styles.bullet}>
              Describe what you did and the impact it had.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>COURSES</Text>
            <Text style={styles.text}>Course Title</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>INTERESTS</Text>
            <Text style={styles.text}>Career Interest / Passion</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.header}>YOUR NAME</Text>
            <Text style={styles.subHeader}>THE ROLE YOU ARE APPLYING FOR?</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>SUMMARY</Text>
            <Text style={styles.text}>
              Briefly explain why you're a great fit for the role - use the AI
              assistant to tailor this summary for each job posting.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>EXPERIENCE</Text>
            <Text style={styles.text}>Company Name | Title</Text>
            <Text style={styles.text}>Company Description</Text>
            <Text style={styles.bullet}>
              • Highlight your accomplishments, using numbers if possible.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>EDUCATION</Text>
            <Text style={styles.text}>School or University</Text>
            <Text style={styles.text}>Degree and Field of Study</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>SKILLS</Text>
            <Text style={styles.text}>Your Skill</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>LANGUAGES</Text>
            <Text style={styles.text}>LANGUAGE — Beginner</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
