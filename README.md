# CS Marking Duty Manager

A web-based application for managing Computer Science exam schedules and marking duty assignments with real-time save functionality.

🌐 **[Live Demo](https://yourusername.github.io/MarkingDuity)** *(Replace with your actual GitHub username)*

## 📋 Features

### 🎯 **Exam Schedule Management**
- CS End of Year exam schedule display
- Clean, modern interface with responsive design

### 📊 **Marking Duty Counter**
- Track marking duties for each teacher
- Separate counters for MCQ and FRQ (Marker and Reviewer roles)
- Automatic total calculation
- Editable teacher names via dropdowns
- Number inputs for easy duty count adjustment

### 📝 **Marking Duty Assignment**
- Assign teachers to specific classes and marking roles
- Dropdown lists for all assignments (easy to change)
- Fixed grade columns for consistency
- Checkbox tracking for Mark Registry completion (Excel, Portal, NSIS)
- Separate columns for different types of marking duties

### 💾 **Save Functionality**
- **Save Changes** button to persist all data
- Automatic data loading on page refresh
- All form states maintained including checkboxes
- Real-time status updates with color-coded feedback

## 🚀 Quick Start

1. **Visit the live demo**: [https://yourusername.github.io/MarkingDuity](https://yourusername.github.io/MarkingDuity)
2. **Make changes** to any dropdowns, numbers, or checkboxes
3. **Click "💾 Save Changes"** to save your work
4. **Refresh the page** - all changes will be maintained

## 🛠️ Local Development

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/MarkingDuity.git
   cd MarkingDuity
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file.

## 📁 File Structure

```
MarkingDuity/
├── index.html          # Main webpage structure
├── styles.css          # Styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This documentation
```

## 🎨 Customization

### Adding New Teachers
Edit the `teachers` array in `script.js`:
```javascript
const teachers = ['Essa', 'Amdad', 'Anas', 'Roy', 'Hamza', 'Khaled', 'NewTeacher'];
```

### Adding New Grades
Edit the `grades` array in `script.js`:
```javascript
const grades = ['9A', '9B', '9C', '9D', '10A', '10B', '10C', '10D', '11A', '11B', '11C', '12A'];
```

### Modifying Exam Schedule
Edit the schedule in `index.html`:
```html
<div class="schedule-item">
    <div class="date">Your Date</div>
    <div class="grade">Your Grade</div>
</div>
```

## 💡 How It Works

### Data Persistence
- Uses browser's `localStorage` for data persistence
- Automatically saves checkbox states, dropdown selections, and number inputs
- Maintains data across browser sessions

### Responsive Design
- Mobile-friendly interface
- Adapts to different screen sizes
- Touch-friendly controls for tablets and phones

### User Interface
- **Modern gradient design** with professional appearance
- **Color-coded status messages** (green for success, red for errors, blue for info)
- **Smooth animations** and hover effects
- **Intuitive controls** with clear visual feedback

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No external dependencies
- **LocalStorage API** - Data persistence

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

### Performance
- **Lightweight** - No external libraries
- **Fast loading** - Optimized CSS and JavaScript
- **Responsive** - Smooth interactions on all devices

## 📱 Mobile Support

The application is fully responsive and works great on:
- 📱 **Smartphones** (iOS Safari, Android Chrome)
- 📱 **Tablets** (iPad, Android tablets)
- 💻 **Desktop** (all major browsers)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎓 Educational Use

This tool is designed for educational institutions managing Computer Science exam marking duties. It can be easily adapted for other subjects or marking systems.

## 🆘 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Try refreshing the page
3. Clear browser cache if needed
4. Open an issue on this repository

## 🔄 Updates

- **v1.0** - Initial release with basic functionality
- **v1.1** - Added save functionality and checkbox persistence
- **v1.2** - Improved responsive design and mobile support

---

Made with ❤️ for CS educators
