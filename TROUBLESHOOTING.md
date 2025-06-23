# Firebase Sync Troubleshooting Guide

If your real-time synchronization isn't working, follow these steps to diagnose and fix the issue.

## 🔍 Step 1: Check Browser Console

1. **Open your website** in Chrome/Firefox
2. **Press F12** to open Developer Tools
3. **Go to Console tab**
4. **Refresh the page** and look for errors

### Expected Console Messages:
```
Firebase initialized successfully
Database URL: https://cs-marking-duty-default-rtdb.asia-southeast1.firebasedatabase.app
DOM loaded, checking Firebase availability...
Firebase is available, setting up real-time sync...
Setting up Firebase real-time listener...
✅ Connected to Firebase
Firebase listener setup complete
Loading data from Firebase...
```

### Common Error Messages:

#### ❌ "Firebase SDK not loaded"
**Problem**: Firebase scripts not loading
**Solution**: Check internet connection, Firebase CDN might be blocked

#### ❌ "Permission denied"
**Problem**: Firebase security rules too restrictive
**Solution**: Update Firebase rules (see Step 3)

#### ❌ "Network request failed"
**Problem**: Internet connection or Firebase server issues
**Solution**: Check internet connection, try again later

## 🧪 Step 2: Test Firebase Connection

1. **Open browser console** (F12 → Console)
2. **Type and press Enter**:
   ```javascript
   testFirebaseConnection()
   ```
3. **Check the results** - should show green checkmarks

## 🔐 Step 3: Check Firebase Security Rules

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: `cs-marking-duty`
3. **Go to Realtime Database** → **Rules tab**
4. **Set these rules** for testing:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

⚠️ **Note**: These rules allow anyone to read/write. For production, use more restrictive rules.

## 🌐 Step 4: Check Database Region

Your database URL shows `asia-southeast1` region. Make sure this matches your Firebase project settings:

1. **Go to Firebase Console** → **Realtime Database**
2. **Check the database URL** matches exactly:
   ```
   https://cs-marking-duty-default-rtdb.asia-southeast1.firebasedatabase.app
   ```

## 📊 Step 5: Check Database Content

1. **Go to Firebase Console** → **Realtime Database**
2. **Look for `markingDutyData` node**
3. **Should contain**:
   ```json
   {
     "markingDutyData": {
       "assignmentData": [...],
       "counterData": [...],
       "timestamp": 1703123456789,
       "lastModifiedBy": "User_abc123"
     }
   }
   ```

## 🔄 Step 6: Manual Sync Test

1. **Open your website** in two browser tabs
2. **In tab 1**: Check a checkbox
3. **Check tab 2**: Should update immediately
4. **Check Firebase Console**: Should see data update

## 🛠️ Step 7: Common Fixes

### Fix 1: Clear Browser Cache
```javascript
// Run in console to clear local data
localStorage.clear();
location.reload();
```

### Fix 2: Force Data Reload
```javascript
// Run in console to force Firebase reload
loadData();
```

### Fix 3: Check User ID
```javascript
// Run in console to check user identification
console.log('User ID:', getUserId());
```

## 📱 Step 8: Test Multiple Devices

1. **Phone + Computer**: Open website on both
2. **Different Networks**: Try WiFi vs Mobile data
3. **Different Browsers**: Chrome, Firefox, Safari

## 🚨 Emergency Fallback

If Firebase still doesn't work, the app will automatically use localStorage:

1. **Changes save locally** on each device
2. **Use "💾 Save Changes" button** to persist data
3. **Data won't sync** between devices (local only)

## 📞 Getting Help

### Error Information to Collect:

1. **Browser console errors** (screenshot)
2. **Firebase project URL**
3. **Which step failed** in this guide
4. **Device/browser information**

### Console Debug Commands:

```javascript
// Check Firebase status
console.log('Firebase available:', typeof firebase !== 'undefined');
console.log('Database available:', firebase && firebase.database);

// Check connection
firebase.database().ref('.info/connected').once('value', snap => {
  console.log('Connected:', snap.val());
});

// Check data
dataRef.once('value', snap => {
  console.log('Data exists:', snap.exists());
  console.log('Data:', snap.val());
});
```

## ✅ Success Indicators

When everything works correctly, you should see:

1. **Status message**: "🔄 Connected to real-time sync"
2. **Console**: No red error messages
3. **Multi-tab sync**: Changes appear instantly in other tabs
4. **Firebase Console**: Data updates when you make changes
5. **User notifications**: "Updated by [User]" messages

The most common issue is Firebase security rules being too restrictive. Start with Step 3 to fix this.
