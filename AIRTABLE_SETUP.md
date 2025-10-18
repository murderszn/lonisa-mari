# Airtable Newsletter Integration Setup Guide

## 🚀 **Complete Setup for Email Subscriber Management**

### **1. Airtable Setup**

#### **Create Your Subscribers Table:**
1. Go to [airtable.com](https://airtable.com) and sign in
2. Create a new base called "Newsletter Subscribers"
3. Create a table called "Subscribers" with these fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| Email | Email | Primary field - subscriber email |
| Source | Single Select | Where they signed up (website, modal-popup, newsletter-banner) |
| Subscribe Date | Date & Time | When they subscribed |
| Status | Single Select | Active, Unsubscribed, Bounced |
| First Name | Single line text | Optional |
| Last Name | Single line text | Optional |

#### **Get Your Airtable API Key:**
1. Go to [airtable.com/developers/web/api/introduction](https://airtable.com/developers/web/api/introduction)
2. Click "Create a token"
3. Name it "Lonisa Mari Newsletter"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. Add your base to the token
6. **Copy the API Key** - you'll need it later

#### **Get Your Base ID:**
1. In your Airtable base, go to the API documentation
2. Your Base ID is in the URL: `https://airtable.com/{BASE_ID}/...`
3. **Copy the Base ID** - you'll need it later

### **2. Firebase Setup**

#### **Get Your Firebase Config:**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your "lonisa-mari" project
3. Go to **Project Settings** (gear icon)
4. Scroll down to "Your apps" section
5. Click "Add app" → Web app (</>)
6. Register your app with name "lonisa-mari-web"
7. **Copy the Firebase config object**

#### **Set Environment Variables:**
Update `src/services/api.js` with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "lonisa-mari.firebaseapp.com",
  projectId: "lonisa-mari",
  storageBucket: "lonisa-mari.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### **3. Deploy Firebase Functions**

#### **Install Dependencies:**
```bash
cd functions
npm install
```

#### **Set Environment Variables:**
```bash
firebase functions:config:set airtable.api_key="your-airtable-api-key"
firebase functions:config:set airtable.base_id="your-airtable-base-id"
```

#### **Deploy Functions:**
```bash
firebase deploy --only functions
```

### **4. Test Your Integration**

#### **Test the Email Forms:**
1. Visit your website
2. Try the email popup (appears after 3 seconds)
3. Try the newsletter banner
4. Check your Airtable base - new records should appear!

### **5. Troubleshooting**

#### **If Functions Don't Deploy:**
- Make sure Cloud Functions API is enabled in Google Cloud Console
- Check your Firebase project permissions
- Verify your Airtable API key and Base ID

#### **If Emails Don't Save:**
- Check Firebase Functions logs: `firebase functions:log`
- Verify your Airtable API key permissions
- Make sure your table name is exactly "Subscribers"

#### **If Frontend Doesn't Work:**
- Check browser console for errors
- Make sure Firebase config is correct
- Verify the functions are deployed

### **6. Advanced Features**

#### **Add More Fields:**
You can extend the Airtable integration to capture:
- Name
- Phone number
- Preferences
- Referral source

#### **Email Validation:**
Add more robust email validation in the functions

#### **Unsubscribe System:**
Add unsubscribe links and functionality

#### **Analytics:**
Track subscription sources and conversion rates

---

## 📊 **What Gets Saved to Airtable:**

Each subscription creates a new record with:
- **Email**: Subscriber's email address
- **Source**: Where they signed up (modal-popup, newsletter-banner, footer)
- **Subscribe Date**: Timestamp of subscription
- **Status**: Set to "Active" by default

## 🎯 **Next Steps:**
1. Set up your Airtable base
2. Get API credentials
3. Update Firebase config
4. Deploy functions
5. Test the integration
6. Start collecting subscribers! 📧

Your email subscriber system is now ready! 🚀
