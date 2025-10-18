# Environment Configuration Template

## Firebase Configuration
Add these to your `.env` file (create one if it doesn't exist):

```bash
# Get these values from Firebase Console > Project Settings > General > Your apps
REACT_APP_FIREBASE_API_KEY=your-api-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=lonisa-mari.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=lonisa-mari
REACT_APP_FIREBASE_STORAGE_BUCKET=lonisa-mari.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## Airtable Configuration
Set these in Firebase Functions:

```bash
firebase functions:config:set airtable.api_key="your-airtable-api-key"
firebase functions:config:set airtable.base_id="your-airtable-base-id"
```

## Getting Your API Keys:

### Firebase Config:
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select "lonisa-mari" project
3. Project Settings (gear icon)
4. Scroll to "Your apps" → Web app config

### Airtable Keys:
1. Go to [Airtable Account](https://airtable.com/account)
2. Scroll to "API" section
3. Generate API Key
4. Get Base ID from your base URL
