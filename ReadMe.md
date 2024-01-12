# FutureSight
FutureSight is a comprehensive phone app and website designed to provide easy access to essential student information for both schools and classmates. The platform is tailored to empower students by centralizing and organizing all pertinent details, streamlining the student lookup process for educational institutions and businesses seeking to hire.
# Synopsis
FutureSight's primary goal is to enhance collaboration and accessibility in the academic and professional spheres. By consolidating student information in one user-friendly platform, it ensures that schools and businesses can efficiently access the necessary details they require. This includes academic achievements, extracurricular activities, and other relevant data that contribute to a holistic understanding of each student's profile. FutureSight envisions a future where information retrieval is seamless, fostering improved connections and opportunities within the educational and professional landscape.
# Table Of Contents
- [Installation](#installation)
- [Features](#features)
  - [User Data](#user-data)
    - [Personal Info](#personal-info)
    - [Academic Achievements](#achievements)
    - [Extracurricular Activities](#extracurricular)
    - [Community Service](#communityService)
    - [Portfolio Links](#portfolioLinks)
    - [Rest of the Data](#restData)
    - [Whole Object](#whole-object)
  - [Sign up Questions](#signUp)
- [Dependencies](#dependencies)
  - [Expo Vector Icons](#expo-vector-icons)
  - [Async Storage](#async-storage)
  - [Firebase App](#firebase-app)
  - [Firebase Auth](#firebase-auth)
  - [Firebase Database](#firebase-database)
  - [React Navigation](#react-navigation)
  - [Navigation Stack](#navigation-stack)
  - [Expo](#expo)
  - [Firebase SDK](#firebase-sdk)
  - [React](#react)
  - [React Native](#react-native)
  - [Element Dropdown](#element-dropdown)
  - [React Native Elements](#react-native-elements)
  - [React Native Offline](#react-native-offline)
  - [React Native Reanimated](#react-native-reanimated)
  - [React Native UUID](#react-native-uuid)
  - [Vector Icons](#vector-icons)
  - [Expo Image Picker](#expo-image-picker)
- [License & Terms](#license)
  - [Acceptance of Terms](#acceptance-of-terms)
  - [User Responsibilities](#user-responsibilities)
  - [Intellectual Property](#intellectual-property)
  - [Privacy Policy](#privacy-policy)
  - [Termination](#termination)
  - [Dispute Resolution](#dispute-resolution)
  - [Modifications to Terms](#modifications-to-terms)
  - [Contact Information](#contact-information)
# Installation <a id="installation"></a>
1. Press `"Win + R"` to open the run command
2. Type CMD and press enter
3. Using the CD command move to the directory you want the app to be stored
4. Type `git clone https://github.com/kkelleaz17/MOBILEFBLA2024.git` and press enter
5. When it is finished installing, CD into the `MOBILEFBLA2024` directory
6. Type `npm install`
7. Once the packages finish installing, type `npm start` and press enter
8. You should see a QR code in the console, use your phone to scan this code
9. A website will open on your phone, click `Don't have an account?`
10. Create your sign up credentials and log in 
11. It will ask you questions defined in [Sign up Questions](#signUp)   
12. Once your signed in your done! 
# Features <a id="features"></a>
The FutureSight app allows you to have a profile with all the information that a school, student or employer could want.  FutureSight provides this in a easy and concise UI that is easy to understand.  The 

## User Data <a id="user-data"></a>
This is the schema for the data that is stored within the app.
Not all fields are required for a user.

### Personal Info <a id="personal-info"></a>
```json
"personalInfo": {
    "name": " ",
    "gender": " ",
    "dateOfBirth": " ",
    "grade": 0,
    "school": " ",
    "contactInfo": {
      "email": " ",
      "phone": " ",
      "address": " "
    },
    "profileIcon": " ",
    "profileBackground": " "
  }
```

### Academic Achievements <a id="achievements"></a>
```json
"academicAchievements": {
    "GPA": 0,
    "honorsClasses": [ ],
    "awards": [ ],
    "testScores": {
      "SAT": 0,
      "ACT": 0
    },
    "coursesTaken": [ ]
  }
```

### Extracurricular Activities <a id="extracurricular"></a>
```json
  "extracurricularActivities": {
    "sports": [ ],
    "performingArts": [ ],
    "clubsAndOrganizations": [ ],
    "leadershipRoles": [ ],
    "otherActivities": [ ]
  }
```
### Community Service <a id="communityService"></a>
```json
  "communityService": {
    "totalHours": 0,
    "activities": [ ]
  }
```

### Portfolio Links <a id="portfolioLinks"></a>
```json
  "portfolioLinks": {
    "linkedIn": " ",
    "personalWebsite": " ",
    "otherLinks": [ ]
  }
```

### Rest of the Data <a id="restData"></a>
```json
  "projects": [ ],
  "internships": [ ],
  "skills": [ ],
  "references": [ ],
  "certifications": [ ],
  "languages": [ ],
  "collegeOfChoice": " ",
  "currentEducationLevel": " ",
  "jobExperience": [ ],
  "goals": [ ],
  "recommendations": [ ]
```



### All data combined <a id="whole-object"></a>
```json
{
  "personalInfo": {
    "name": " ",
    "gender": " ",
    "dateOfBirth": " ",
    "grade": 0,
    "school": " ",
    "contactInfo": {
      "email": " ",
      "phone": " ",
      "address": " "
    },
    "profileIcon": " ",
    "profileBackground": " "
  },
  "academicAchievements": {
    "GPA": 0,
    "honorsClasses": [ ],
    "awards": [ ],
    "testScores": {
      "SAT": 0,
      "ACT": 0
    },
    "coursesTaken": [ ]
  },
  "extracurricularActivities": {
    "sports": [ ],
    "performingArts": [ ],
    "clubsAndOrganizations": [ ],
    "leadershipRoles": [ ],
    "otherActivities": [ ]
  },
  "communityService": {
    "totalHours": 0,
    "activities": [ ]
  },
  "projects": [ ],
  "internships": [ ],
  "skills": [ ],
  "references": [ ],
  "certifications": [ ],
  "languages": [ ],
  "portfolioLinks": {
    "linkedIn": " ",
    "personalWebsite": " ",
    "otherLinks": [ ]
  },
  "collegeOfChoice": " ",
  "currentEducationLevel": " ",
  "jobExperience": [ ],
  "goals": [ ],
  "recommendations": [ ]
}
```

## Sign up Questions <a id="signUp"></a>
- `What is your full name?`
- `What is the name of your school?`
- `When is your date of birth? (MM/DD/YYYY)`
- `Which grade are you currently in?`
- `What is your gender?`
- `Do you know your current GPA? If yes, what is it?`
# Dependencies <a id="dependencies"></a>
1. **@expo/vector-icons** (Version: ^13.0.0) - Provides a set of customizable vector icons for your React Native application.<a id="expo-vector-icons"></a>

2. **<a id="async-storage"></a>@react-native-async-storage/async-storage** (Version: 1.18.2) - A library for asynchronous storage management in React Native applications, used for persisting data.

3. **<a id="firebase-app"></a>@react-native-firebase/app** (Version: ^18.7.3) - Part of the Firebase SDK for React Native, this package initializes the Firebase app.

4. **<a id="firebase-auth"></a>@react-native-firebase/auth** (Version: ^18.7.3) - Handles authentication functionalities using Firebase in React Native.

5. **<a id="firebase-database"></a>@react-native-firebase/database** (Version: ^18.7.3) - Provides access to Firebase Realtime Database for real-time data synchronization in React Native.

6. **<a id="react-navigation"></a>@react-navigation/native** (Version: ^6.1.9) - Core navigation library for React Native applications, used for building navigation structures.

7. **<a id="navigation-stack"></a>@react-navigation/stack** (Version: ^6.3.20) - Stack navigator for React Navigation, facilitating navigation between screens using a stack-based approach.

8. **<a id="expo"></a>expo** (Version: ^49.0.21) - The Expo framework for developing React Native applications with ease, providing tools, services, and libraries.

9. **<a id="firebase-sdk"></a>firebase** (Version: ^10.7.0) - The Firebase SDK for various services like authentication, database, and storage.

10. **<a id="react"></a>react** (Version: 18.2.0) - The core React library for building user interfaces.

11. **<a id="react-native"></a>react-native** (Version: 0.72.6) - The core React Native library for building cross-platform mobile applications.

12. **<a id="element-dropdown"></a>react-native-element-dropdown** (Version: ^2.10.1) - A dropdown component for React Native applications.

13. **<a id="react-native-elements"></a>react-native-elements** (Version: ^3.4.3) - A UI toolkit for React Native, providing pre-designed and customizable components.

14. **<a id="react-native-offline"></a>react-native-offline** (Version: ^6.0.2) - Handles offline scenarios in React Native applications, providing network status and offline support.

15. **<a id="react-native-reanimated"></a>react-native-reanimated** (Version: ~3.3.0) - A React Native library for building smooth and interactive animations.

16. **<a id="react-native-uuid"></a>react-native-uuid** (Version: ^2.0.1) - Generates unique identifiers (UUIDs) in React Native applications.

17. **<a id="vector-icons"></a>react-native-vector-icons** (Version: ^10.0.2) - A library for using custom vector icons in React Native applications.

18. **<a id="expo-image-picker"></a>expo-image-picker** (Version: ~14.3.2) - A module for picking images and videos from the user's device in Expo projects.

# License <a id="license"></a>
This is the license and privacy statement for the use of the FutureSite mobile application. The license outlines the terms and conditions under which users are granted permission to use the application, while the privacy statement explains how the app collects, uses, and protects user data to ensure a secure and transparent user experience.

## Acceptance of Terms <a id="acceptance-of-terms"></a>
By accessing or using the FutureSite mobile application (FutureSite), you agree to comply with and be bound by these Terms of Service.

## User Responsibilities <a id="user-responsibilities"></a>
Users are solely responsible for their use of the App and agree to comply with all applicable laws and regulations. Users must not engage in any activity that interferes with or disrupts the functionality of the App.

## Intellectual Property <a id="intellectual-property"></a>
All content and materials available in the App, including but not limited to text, graphics, logos, images, and software, are the property of FutureSite and are protected by applicable intellectual property laws.

## Privacy Policy <a id="privacy-policy"></a>
This Privacy Policy outlines how FutureSite ("we," "our," or "us") collects, uses, and protects the personal information of users ("you" or "user") when using the FutureSite mobile application ("App"). We are committed to ensuring the privacy and security of your information. By using the App, you agree to the terms outlined in this Privacy Policy.

## Termination <a id="termination"></a>
FutureSite reserves the right to terminate or suspend your access to the App at any time, with or without cause. Upon termination, all rights and licenses granted to you will immediately cease.

## Dispute Resolution <a id="dispute-resolution"></a>
Any disputes arising out of or relating to these Terms of Service will be resolved through binding arbitration, following the rules of the FutureSite. Each party shall bear its own costs in the arbitration proceedings.

## Modifications to Terms <a id="modifications-to-terms"></a>
FutureSite reserves the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting. Continued use of the App after any modifications constitutes acceptance of the revised terms.

## Contact Information <a id="contact-information"></a>
If you have any questions or concerns about these Terms of Service, please contact us at [Kristopheraz@live.com](mailto:Kristopheraz@live.com).

