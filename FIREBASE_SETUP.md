# Firebase Setup Guide for Real-Time Synchronization

To enable real-time synchronization of checkbox changes for all users worldwide, you need to set up Firebase Realtime Database.

## Step 1: Create Firebase Project

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Click "Create a project"**
3. **Enter project name**: `cs-marking-duty` (or any name you prefer)
4. **Disable Google Analytics** (not needed for this project)
5. **Click "Create project"**

## Step 2: Setup Realtime Database

1. **In your Firebase project**, click "Realtime Database" in the left sidebar
2. **Click "Create Database"**
3. **Choose location**: Select closest to your users (you chose asia-southeast1)
4. **Security rules**: Start in **test mode** with these rules:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
5. **Click "Done"**

⚠️ **Important**: These rules allow anyone to read/write. You can make them more restrictive later.

## Step 3: Get Configuration

1. **In Firebase Console**, click the gear icon → "Project settings"
2. **Scroll down** to "Your apps" section
3. **Click the `</>` icon** (Add Firebase to your web app)
4. **Enter app name**: `CS-Marking-Duty-Web`
5. **Copy the configuration object** that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## Step 4: Update Your Code

1. **Open `firebase-config.js`**
2. **Replace the placeholder config** with your actual Firebase configuration:

```javascript
// Replace this entire firebaseConfig object with your actual config
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    databaseURL: "https://your-project-id-default-rtdb.firebaseio.com/",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

## Step 5: Deploy to GitHub Pages

1. **Commit and push** your updated `firebase-config.js`
2. **Your website will automatically sync** checkbox changes in real-time!

## Step 6: Test Real-Time Sync

1. **Open your website** in two different browser tabs
2. **Check a checkbox** in one tab
3. **Watch it appear immediately** in the other tab! ✅

## Security Rules (Optional - for production)

For production use, update your Firebase Realtime Database security rules:

```json
{
  "rules": {
    "markingDutyData": {
      ".read": true,
      ".write": true,
      ".validate": "newData.hasChildren(['counterData', 'assignmentData', 'timestamp'])"
    }
  }
}
```

## Features Enabled

✅ **Real-time checkbox sync** - Changes appear instantly on all devices
✅ **Global synchronization** - Works anywhere in the world
✅ **Automatic fallback** - Uses localStorage if Firebase is unavailable
✅ **Conflict resolution** - Handles simultaneous edits gracefully
✅ **User identification** - Tracks who made changes
✅ **Status feedback** - Shows sync status to users

## Troubleshooting

### Common Issues:

1. **"Firebase not available"** - Check internet connection and Firebase config
2. **"Permission denied"** - Check Firebase security rules
3. **"Quota exceeded"** - Firebase free tier has limits, consider upgrading

### Testing Locally:

- Open `index.html` in multiple browser tabs
- Make changes in one tab, see them appear in others
- Check browser console for any Firebase errors

## Cost Information

**Firebase Realtime Database Free Tier:**
- 1GB stored data
- 10GB/month bandwidth
- 100 simultaneous connections

This is more than enough for a school marking duty system!

## Alternative Setup (No Firebase Required)

If you prefer not to use Firebase, the system will work with localStorage only:
- Changes save locally on each device
- Use the manual "Save" button to persist data
- No real-time sync between users

The app automatically detects Firebase availability and provides appropriate fallback.
