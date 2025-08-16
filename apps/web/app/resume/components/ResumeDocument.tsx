"use client";

import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const merriweather =
  "http://fonts.gstatic.com/s/merriweather/v15/RFda8w1V0eDZheqfcyQ4EInF5uFdDttMLvmWuJdhhgs.ttf";
const merriweatherBold =
  "http://fonts.gstatic.com/s/merriweather/v19/ZvcMqxEwPfh2qDWBPxn6nkD2ttfZwueP-QU272T9-k4.ttf";
const merriweatherItalic =
  "http://fonts.gstatic.com/s/merriweather/v19/So5lHxHT37p2SS4-t60SlPMZXuCXbOrAvx5R0IT5Oyo.ttf";
const opensansbold =
  "http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzC3USBnSvpkopQaUR-2r7iU.ttf";
const opensans =
  "http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTS3USBnSvpkopQaUR-2r7iU.ttf";

Font.register({
  family: "Merriweather",
  src: merriweather,
  fontStyle: "normal",
  fontWeight: 300,
});

Font.register({
  family: "Merriweather",
  src: merriweatherBold,
  fontStyle: "normal",
  fontWeight: 700,
});
Font.register({
  family: "Merriweather",
  src: merriweatherItalic,
  fontStyle: "italic",
  fontWeight: 300,
});

Font.register({
  family: "OpenSans",
  src: opensans,
  fontStyle: "normal",
  fontWeight: 300,
});
Font.register({
  family: "OpenSans",
  src: opensansbold,
  fontStyle: "normal",
  fontWeight: 700,
});

const locals = {
  experience: "experience",
  softSkills: "soft skills",
  technicalSkills: "technical skill",
  languages: "languages",
  keyAchievements: "key achievements & projects",
  certifications: "certifications",
  education: "education & professional development",
  present: "Present",
};
const resume = {
  name: "Damir Akzhigitov",
  summary:
    "Senior Frontend Engineer with 6+ years building production applications for financial services and high-traffic platforms. I specialize in Vue.js/React ecosystems and have led technical initiatives across 16+ developer teams. Currently seeking a role where I can tackle complex architectural challenges and drive technical excellence.",
  experience: [
    {
      company: "MUFG Fund Services Limited",
      location: "Cyprus, Limassol",
      position: "Senior Associate, Frontend Engineer",
      startAt: "03-22-2022",
      endAt: "",
      bullets: [
        {
          start: "Took the lead",
          text: "on improving our micro-frontend architecture by identifying potential problems early and proposing better technical solutions.",
        },
        {
          start: "Coordinated technical tasks for large-scale features",
          text: "across 16+ frontend developers, creating documentation and tracking progress to keep everyone aligned.",
        },
        {
          start: "Worked directly with product managers",
          text: "to plan and shape new features, often suggesting better technical approaches and refining requirements before development.",
        },
        {
          start: "Migrated multiple repositories",
          text: "from Vue 2 to Vue 3 with TypeScript and the Composition API, which made development faster and improved performance.",
        },
        {
          start: "Reviewed code and mentored",
          text: "developers, pushing for best practices like TDD and Clean Code principles to improve code quality.",
        },
      ],
    },
    {
      company: "Savings and Loan Services Bank",
      location: "Russia",
      position: "Banking Application Web Developer",
      startAt: "06-01-2021",
      endAt: "05-31-2022",
      bullets: [
        {
          start: "Rebuilt",
          text: "the bank's internal sales tool, helping managers process client applications over 25% faster and with fewer data entry errors.",
        },
        {
          start: "As the lead frontend developer,",
          text: "I worked directly with the department director to design and build new features using Vue 3, TypeScript and component libraries based on Bootstrap.",
        },
      ],
    },
    {
      company: "Payterra Processing Company, LLC",
      location: "Russia",
      position: "Middle Frontend Developer",
      startAt: "12-01-2020",
      endAt: "06-30-2021",
      bullets: [
        {
          start: "Helped grow",
          text: "the platform's user base by building a new streaming widget system in React that allowed streamers to increase their earnings.",
        },
      ],
    },
    {
      company: "Kameleoon",
      location: "Russia",
      position: "Frontend Developer (A/B Testing)",
      startAt: "10-01-2019",
      endAt: "12-31-2020",
      bullets: [
        {
          start: "Developed",
          text: "client-side A/B tests for high-traffic e-commerce sites, improving conversion rates & client retention.",
        },
      ],
    },
  ],
  key_achievements: [
    {
      name: "Automated Release Management Tool (MUFG)",
      bullets: [
        "Built a full-stack tool to automate release processes (branch creation, tagging, changelog generation).",
        "Reduced release prep time from 2+ hours to under 20 minutes and eliminated common human errors.",
        "Adopted company-wide, becoming the standard for releases.",
      ],
    },
    {
      name: "Critical Production Fix – Notifications Component",
      bullets: [
        "Resolved performance failure that froze app with 10k+ notifications.",
        "Introduced pagination & lazy loading → now handles unlimited notifications without downtime.",
      ],
    },
    {
      name: "AI Dev Assistant for GitLab",
      bullets: [
        "Created an AI-powered tool to convert GitLab issues directly into ready-to-merge requests.",
        "Automated component creation, refactoring, and documentation generation → boosted productivity for small dev teams.",
      ],
    },
  ],
  certifications: [
    {
      legal_name: "Udemy",
      name: "AWS Certified Cloud Practitioner",
      location: "Remote",
      date: "2024",
    },
  ],
  education: [
    {
      legal_name: "Udemy",
      name: "Vue JS 3: Composition API (with Pinia, Firebase 9 & Vite)",
      location: "Remote",
      date: "2023",
    },
    {
      legal_name: "HarvardX",
      name: "CS50’s Introduction to Computer Science",
      location: "Remote",
      date: "2019",
    },
    {
      legal_name: "Hexlet",
      name: "Frontend Developer Program",
      location: "Russia",
      date: "2019",
    },
    {
      legal_name: "Finance University",
      name: "Professional Diploma, Design Program",
      location: "Russia",
      date: "2011 - 2015",
    },
  ],
  contacts: [
    "Limassol, Cyprus",
    "damir.cy@gmail.com",
    "linkedin.com/in/damir-akzhigitov",
  ],
  softSkills: [
    "Mentoring & Coaching",
    "Problem-Solving",
    "Cross-Functional Communication",
    "Proactive Initiative",
    "Team Building & Morale",
  ],
  technicalSkills: {
    "Full-Stack": ["JavaScript/TypeScript", "C#", "SQL"],
    Frontend: ["React", "Vue.js", "CSS3", "SCSS"],
    "Backend & Data": ["GraphQL", "REST APIs", "Database Design"],
    "Frameworks & Libraries": [
      "Jest",
      "Playwright",
      "AG-Grid",
      "AG-Charts",
      "i18n",
      "Apollo",
      "Webpack",
      "OpenAI",
    ],
    "Tools & Platforms": [
      "Git",
      "CI/CD",
      "Vite",
      "AWS",
      "Jira",
      "Babel",
      "ESLint",
      "Prettier",
      "Amplify",
      "Datadog",
    ],
    Concepts: ["Domain-Driven Design (DDD)", "A/B Testing"],
  },
  languages: {
    Russian: "Native",
    English: "B2",
    Greek: "Intermediate (A2 Level)",
  },
};

export default function ResumeDocument() {
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      fontFamily: "Merriweather",
      flexDirection: "row",
      fontSize: 7,
      padding: "30px",
      backgroundColor: "#fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      margin: "20px auto",
    },
    sidebar: {
      width: "35%",
      paddingLeft: "20px",
    },
    main: {
      width: "65%",
      paddingRight: "20px",
    },
    section: {
      marginBottom: "20px",
    },
    header: {
      fontSize: 35,
      fontWeight: "bold",
      marginBottom: "5px",
      color: "#333",
    },
    subHeader: {
      fontFamily: "OpenSans",
      fontSize: 9,
      fontWeight: 700,
      marginBottom: "10px",
      color: "#2079c7",
      textTransform: "uppercase",
    },
    subHeaderMain: {
      fontFamily: "OpenSans",
      fontSize: 9,
      fontWeight: 700,
      marginBottom: "10px",
      color: "#2079c7",
      textTransform: "uppercase",
    },
    text: {
      fontSize: 9,
      marginBottom: "4px",
      color: "#555",
    },
    boldText: {
      fontFamily: "Merriweather",
      fontSize: 9,
      fontWeight: 700,
      color: "#666666",
    },
    bullet: {
      fontFamily: "Merriweather",
      color: "#666666",
      fontSize: 9,
      marginBottom: 10,
    },
    summary: {
      lineHeight: 1.5,
      fontSize: 9,
      marginTop: "15px",
      marginBottom: "15px",
      color: "#555",
    },
    jobTitle: {
      fontSize: 11,
      fontWeight: 300,
      fontStyle: "italic",
      marginBottom: 5,
    },
    itemTitle: {
      color: "#000",
      fontSize: 11,
      fontWeight: 700,
    },
    location: {
      fontWeight: 300,
    },
    date: {
      fontFamily: "OpenSans",
      fontSize: 8,
      color: "#444",
      marginBottom: 5,
    },
    flexColumn: {
      display: "flex",
      flexDirection: "column",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.header}>{resume.name}</Text>
            <Text style={styles.summary}>{resume.summary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeaderMain}>{locals.experience}</Text>
            {resume.experience.map((item, index) => (
              <View key={index}>
                <Text style={styles.itemTitle}>
                  {item.company}, &nbsp;
                  <Text style={styles.location}>{item.location} —</Text>
                </Text>
                <Text style={styles.jobTitle}>{item.position}</Text>
                <Text style={styles.date}>
                  {item.startAt} - {item.endAt || locals.present}
                </Text>
                {item.bullets.map((bullet) => (
                  <Text key={bullet.text} style={styles.bullet}>
                    {bullet.start && (
                      <Text style={styles.boldText}>{bullet.start}</Text>
                    )}
                    {bullet.text}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.sidebar}>
          <View style={styles.section}>
            {resume.contacts.map((item, idx) => (
              <Text key={idx} style={styles.text}>
                {item}
              </Text>
            ))}
          </View>

          {/* Soft Skills */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>{locals.softSkills}</Text>
            {resume.softSkills.map((skill, idx) => (
              <Text key={idx} style={styles.text}>
                {skill}
              </Text>
            ))}
          </View>

          {/* Technical Skills */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>{locals.technicalSkills}</Text>
            {Object.entries(resume.technicalSkills).map(
              ([category, skills], idx) => (
                <View key={idx}>
                  <Text style={styles.boldText}>{category}:</Text>
                  <Text style={styles.text}>{skills.join(", ")}</Text>
                </View>
              ),
            )}
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>{locals.languages}</Text>
            {Object.entries(resume.languages).map(([lang, level], idx) => (
              <Text key={idx} style={styles.text}>
                {lang}: {level}
              </Text>
            ))}
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.flexColumn}>
          <View style={styles.section}>
            <Text style={styles.subHeaderMain}>{locals.keyAchievements}</Text>
            {resume.key_achievements.map((item, index) => (
              <View key={index}>
                <Text style={{ ...styles.itemTitle, marginBottom: 5 }}>
                  {item.name}
                </Text>
                {item.bullets.map((bullet) => (
                  <Text key={bullet} style={styles.bullet}>
                    {bullet}
                  </Text>
                ))}
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeaderMain}>{locals.certifications}</Text>
            {resume.certifications.map((item) => (
              <View key={item.name}>
                <Text style={styles.text}>
                  {item.legal_name}, {item.location} — {item.legal_name}
                </Text>
                <Text>{item.date}</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeaderMain}>{locals.education}</Text>
            {resume.education.map((item) => (
              <View key={item.name}>
                <Text style={styles.text}>
                  <Text style={styles.boldText}>{item.legal_name}</Text>,{" "}
                  {item.location} — {item.name}
                </Text>
                <Text>{item.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
