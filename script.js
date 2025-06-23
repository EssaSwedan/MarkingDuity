// Data arrays for dropdowns
const teachers = ['Essa', 'Amdad', 'Anas', 'Roy', 'Hamza', 'Khaled'];
const grades = ['9A', '9B', '9C', '9D', '10A', '10B', '10C', '10D', '11A', '11B', '11C'];

// Initial counter data
let counterData = [
    { name: 'Essa', mcqMarker: 3, mcqReviewer: 2, frqMarker: 'Random Samples', frqReviewer: 'Random Samples' },
    { name: 'Amdad', mcqMarker: 1, mcqReviewer: 2, frqMarker: 2, frqReviewer: 2 },
    { name: 'Anas', mcqMarker: 1, mcqReviewer: 2, frqMarker: 2, frqReviewer: 3 },
    { name: 'Roy', mcqMarker: 3, mcqReviewer: 2, frqMarker: 1, frqReviewer: 1 },
    { name: 'Hamza', mcqMarker: 3, mcqReviewer: 1, frqMarker: 3, frqReviewer: 1 },
    { name: 'Khaled', mcqMarker: 0, mcqReviewer: 1, frqMarker: 3, frqReviewer: 4 }
];

// Initial assignment data
let assignmentData = [
    { grade: '9A', mcqMarker: 'Essa', mcqReviewer: 'Anas', frqMarker: 'Khaled', frqReviewer: 'Hamza', excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '9B', mcqMarker: 'Essa', mcqReviewer: 'Roy', frqMarker: 'Hamza', frqReviewer: 'Khaled', excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '9C', mcqMarker: 'Anas', mcqReviewer: 'Roy', frqMarker: 'Hamza', frqReviewer: 'Khaled', excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '9D', mcqMarker: 'Roy', mcqReviewer: 'Essa', frqMarker: 'Hamza', frqReviewer: 'Khaled', excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '10A', mcqMarker: 'Roy', mcqReviewer: 'Khaled', frqMarker: 'Anas', frqReviewer: 'Amdad', excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '10B', mcqMarker: 'Roy', mcqReviewer: 'Essa', frqMarker: 'Anas', frqReviewer: 'Amdad', excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '10C', mcqMarker: 'Hamza', mcqReviewer: 'Roy', frqMarker: 'Amdad', frqReviewer: 'Anas', excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '10D', mcqMarker: 'Essa', mcqReviewer: 'Hamza', frqMarker: 'Amdad', frqReviewer: 'Anas', excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '11A', mcqMarker: 'Hamza', mcqReviewer: 'Amdad', frqMarker: 'Khaled', frqReviewer: 'Roy', excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '11B', mcqMarker: 'Hamza', mcqReviewer: 'Amdad', frqMarker: 'Khaled', frqReviewer: 'Anas', excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '11C', mcqMarker: 'Amdad', mcqReviewer: 'Anas', frqMarker: 'Roy', frqReviewer: 'Khaled', excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' }
];

// Initialize the page
// (Initialization moved to the new DOMContentLoaded event listener at the bottom)

// Create dropdown element
function createDropdown(options, selectedValue, onChangeCallback) {
    const select = document.createElement('select');
    
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        if (option === selectedValue) {
            optionElement.selected = true;
        }
        select.appendChild(optionElement);
    });
    
    if (onChangeCallback) {
        select.addEventListener('change', onChangeCallback);
    }
    
    return select;
}

// Create number input
function createNumberInput(value, onChangeCallback) {
    const input = document.createElement('input');
    input.type = 'number';
    input.value = value === 'Random Samples' ? 0 : value;
    input.min = '0';
    input.max = '10';
    
    if (onChangeCallback) {
        input.addEventListener('change', onChangeCallback);
    }
    
    return input;
}

// Render counter table
function renderCounterTable() {
    const tbody = document.getElementById('counterTableBody');
    tbody.innerHTML = '';
    
    counterData.forEach((teacher, index) => {
        const row = document.createElement('tr');
        
        // Name dropdown
        const nameCell = document.createElement('td');
        const nameDropdown = createDropdown(teachers, teacher.name, (e) => {
            counterData[index].name = e.target.value;
            updateCounterTotals();
        });
        nameCell.appendChild(nameDropdown);
        row.appendChild(nameCell);
        
        // MCQ Marker
        const mcqMarkerCell = document.createElement('td');
        const mcqMarkerInput = createNumberInput(teacher.mcqMarker, (e) => {
            counterData[index].mcqMarker = parseInt(e.target.value) || 0;
            updateCounterTotals();
        });
        mcqMarkerCell.appendChild(mcqMarkerInput);
        row.appendChild(mcqMarkerCell);
        
        // MCQ Reviewer
        const mcqReviewerCell = document.createElement('td');
        const mcqReviewerInput = createNumberInput(teacher.mcqReviewer, (e) => {
            counterData[index].mcqReviewer = parseInt(e.target.value) || 0;
            updateCounterTotals();
        });
        mcqReviewerCell.appendChild(mcqReviewerInput);
        row.appendChild(mcqReviewerCell);
        
        // FRQ Marker
        const frqMarkerCell = document.createElement('td');
        if (teacher.frqMarker === 'Random Samples') {
            frqMarkerCell.textContent = 'Random Samples';
            frqMarkerCell.style.fontStyle = 'italic';
            frqMarkerCell.style.color = '#666';
        } else {
            const frqMarkerInput = createNumberInput(teacher.frqMarker, (e) => {
                counterData[index].frqMarker = parseInt(e.target.value) || 0;
                updateCounterTotals();
            });
            frqMarkerCell.appendChild(frqMarkerInput);
        }
        row.appendChild(frqMarkerCell);
        
        // FRQ Reviewer
        const frqReviewerCell = document.createElement('td');
        if (teacher.frqReviewer === 'Random Samples') {
            frqReviewerCell.textContent = 'Random Samples';
            frqReviewerCell.style.fontStyle = 'italic';
            frqReviewerCell.style.color = '#666';
        } else {
            const frqReviewerInput = createNumberInput(teacher.frqReviewer, (e) => {
                counterData[index].frqReviewer = parseInt(e.target.value) || 0;
                updateCounterTotals();
            });
            frqReviewerCell.appendChild(frqReviewerInput);
        }
        row.appendChild(frqReviewerCell);
        
        // Total
        const totalCell = document.createElement('td');
        totalCell.style.fontWeight = 'bold';
        totalCell.style.backgroundColor = '#f0f8ff';
        row.appendChild(totalCell);
        
        tbody.appendChild(row);
    });
    
    updateCounterTotals();
}

// Update counter totals
function updateCounterTotals() {
    const rows = document.querySelectorAll('#counterTableBody tr');
    
    rows.forEach((row, index) => {
        const teacher = counterData[index];
        const totalCell = row.lastElementChild;
        
        let total = 0;
        total += (typeof teacher.mcqMarker === 'number') ? teacher.mcqMarker : 0;
        total += (typeof teacher.mcqReviewer === 'number') ? teacher.mcqReviewer : 0;
        total += (typeof teacher.frqMarker === 'number') ? teacher.frqMarker : 0;
        total += (typeof teacher.frqReviewer === 'number') ? teacher.frqReviewer : 0;
        
        totalCell.textContent = total;
    });
}

// Render assignment table
function renderAssignmentTable() {
    const tbody = document.getElementById('assignmentTableBody');
    tbody.innerHTML = '';
    
    assignmentData.forEach((assignment, index) => {
        const row = document.createElement('tr');
        
        // Grade (fixed text)
        const gradeCell = document.createElement('td');
        gradeCell.textContent = assignment.grade;
        gradeCell.style.fontWeight = 'bold';
        gradeCell.style.backgroundColor = '#f8f9fa';
        row.appendChild(gradeCell);
        
        // MCQ Marker
        const mcqMarkerCell = document.createElement('td');
        const mcqMarkerDropdown = createDropdown(teachers, assignment.mcqMarker, (e) => {
            assignmentData[index].mcqMarker = e.target.value;
        });
        mcqMarkerCell.appendChild(mcqMarkerDropdown);
        row.appendChild(mcqMarkerCell);
        
        // MCQ Reviewer
        const mcqReviewerCell = document.createElement('td');
        const mcqReviewerDropdown = createDropdown(teachers, assignment.mcqReviewer, (e) => {
            assignmentData[index].mcqReviewer = e.target.value;
        });
        mcqReviewerCell.appendChild(mcqReviewerDropdown);
        row.appendChild(mcqReviewerCell);
        
        // FRQ Marker
        const frqMarkerCell = document.createElement('td');
        const frqMarkerDropdown = createDropdown(teachers, assignment.frqMarker, (e) => {
            assignmentData[index].frqMarker = e.target.value;
        });
        frqMarkerCell.appendChild(frqMarkerDropdown);
        row.appendChild(frqMarkerCell);
        
        // FRQ Reviewer
        const frqReviewerCell = document.createElement('td');
        const frqReviewerDropdown = createDropdown(teachers, assignment.frqReviewer, (e) => {
            assignmentData[index].frqReviewer = e.target.value;
        });
        frqReviewerCell.appendChild(frqReviewerDropdown);
        row.appendChild(frqReviewerCell);
        
        // Mark Registry - Excel checkbox
        const excelCell = document.createElement('td');
        const excelCheckbox = document.createElement('input');
        excelCheckbox.type = 'checkbox';
        excelCheckbox.checked = assignment.excel || false;
        excelCheckbox.addEventListener('change', (e) => {
            assignmentData[index].excel = e.target.checked;
        });
        excelCell.appendChild(excelCheckbox);
        row.appendChild(excelCell);
        
        // Mark Registry - Portal checkbox
        const portalCell = document.createElement('td');
        const portalCheckbox = document.createElement('input');
        portalCheckbox.type = 'checkbox';
        portalCheckbox.checked = assignment.portal || false;
        portalCheckbox.addEventListener('change', (e) => {
            assignmentData[index].portal = e.target.checked;
        });
        portalCell.appendChild(portalCheckbox);
        row.appendChild(portalCell);
        
        // Mark Registry - NSIS checkbox
        const nsisCell = document.createElement('td');
        const nsisCheckbox = document.createElement('input');
        nsisCheckbox.type = 'checkbox';
        nsisCheckbox.checked = assignment.nsis || false;
        nsisCheckbox.addEventListener('change', (e) => {
            assignmentData[index].nsis = e.target.checked;
        });
        nsisCell.appendChild(nsisCheckbox);
        row.appendChild(nsisCell);
        
        // 5 Samples Marking Check
        const samplesCell = document.createElement('td');
        samplesCell.className = 'samples-column';
        const samplesDropdown = createDropdown(teachers, assignment.samplesCheck, (e) => {
            assignmentData[index].samplesCheck = e.target.value;
        });
        samplesCell.appendChild(samplesDropdown);
        row.appendChild(samplesCell);
        
        // Mark Reg. Final Check
        const finalCell = document.createElement('td');
        finalCell.className = 'hod-column';
        const finalDropdown = createDropdown(teachers, assignment.finalCheck, (e) => {
            assignmentData[index].finalCheck = e.target.value;
        });
        finalCell.appendChild(finalDropdown);
        row.appendChild(finalCell);
        
        tbody.appendChild(row);
    });
}

// Add new teacher to counter
function addNewTeacher() {
    const newTeacher = {
        name: teachers[0],
        mcqMarker: 0,
        mcqReviewer: 0,
        frqMarker: 0,
        frqReviewer: 0
    };
    counterData.push(newTeacher);
    renderCounterTable();
}

// Reset all counters
function resetCounters() {
    if (confirm('Are you sure you want to reset all counters to zero?')) {
        counterData.forEach(teacher => {
            if (teacher.frqMarker !== 'Random Samples') teacher.mcqMarker = 0;
            if (teacher.frqReviewer !== 'Random Samples') teacher.mcqReviewer = 0;
            if (teacher.frqMarker !== 'Random Samples') teacher.frqMarker = 0;
            if (teacher.frqReviewer !== 'Random Samples') teacher.frqReviewer = 0;
        });
        renderCounterTable();
    }
}

// Add new class to assignment
function addNewClass() {
    const newClass = {
        grade: grades[0],
        mcqMarker: teachers[0],
        mcqReviewer: teachers[1],
        frqMarker: teachers[2],
        frqReviewer: teachers[3],
        samplesCheck: teachers[0],
        finalCheck: teachers[0]
    };
    assignmentData.push(newClass);
    renderAssignmentTable();
}

// Auto assign markers (simple round-robin assignment)
function autoAssignMarkers() {
    if (confirm('This will automatically reassign all markers. Continue?')) {
        assignmentData.forEach((assignment, index) => {
            assignment.mcqMarker = teachers[index % teachers.length];
            assignment.mcqReviewer = teachers[(index + 1) % teachers.length];
            assignment.frqMarker = teachers[(index + 2) % teachers.length];
            assignment.frqReviewer = teachers[(index + 3) % teachers.length];
            assignment.samplesCheck = teachers[0]; // Default to first teacher
            assignment.finalCheck = teachers[0]; // Default to first teacher
        });
        renderAssignmentTable();
    }
}

// Export data (bonus feature)
function exportData() {
    const data = {
        counterData: counterData,
        assignmentData: assignmentData,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'marking_duty_data.json';
    link.click();
}

// Import data (bonus feature)
function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                if (data.counterData && data.assignmentData) {
                    counterData = data.counterData;
                    assignmentData = data.assignmentData;
                    renderCounterTable();
                    renderAssignmentTable();
                    alert('Data imported successfully!');
                } else {
                    alert('Invalid file format!');
                }
            } catch (error) {
                alert('Error reading file: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
}

// Save and Load functionality for multi-user sharing
function saveData() {
    const saveBtn = document.getElementById('saveBtn');
    const statusDiv = document.getElementById('saveStatus');
    
    // Disable button during save
    saveBtn.disabled = true;
    saveBtn.textContent = '💾 Saving...';
    
    const dataToSave = {
        counterData: counterData,
        assignmentData: assignmentData,
        timestamp: new Date().toISOString(),
        lastModifiedBy: 'User', // In real implementation, this would be the actual user name
        version: Date.now()
    };
    
    try {
        // For demonstration: Save to localStorage
        // In real implementation, this would be an API call to save to database
        localStorage.setItem('markingDutyData', JSON.stringify(dataToSave));
        
        // Simulate server call delay
        setTimeout(() => {
            saveBtn.disabled = false;
            saveBtn.textContent = '💾 Save Changes';
            
            showStatus('Changes saved successfully! ✅', 'success');
            
            // Auto-refresh other users' data (simulate real-time updates)
            // In real implementation, this would be handled by websockets or polling
            broadcastUpdate();
        }, 500);
        
    } catch (error) {
        saveBtn.disabled = false;
        saveBtn.textContent = '💾 Save Changes';
        showStatus('Error saving data: ' + error.message, 'error');
    }
}

function loadData() {
    const loadBtn = document.getElementById('loadBtn');
    
    loadBtn.disabled = true;
    loadBtn.textContent = '📁 Loading...';
    
    try {
        // For demonstration: Load from localStorage
        // In real implementation, this would be an API call to load from database
        const savedData = localStorage.getItem('markingDutyData');
        
        if (savedData) {
            const data = JSON.parse(savedData);
            
            // Update local data
            counterData = data.counterData || counterData;
            assignmentData = data.assignmentData || assignmentData;
            
            // Ensure backward compatibility - add missing checkbox properties
            assignmentData.forEach(assignment => {
                if (assignment.excel === undefined) assignment.excel = false;
                if (assignment.portal === undefined) assignment.portal = false;
                if (assignment.nsis === undefined) assignment.nsis = false;
            });
            
            // Re-render tables
            renderCounterTable();
            renderAssignmentTable();
            
            const lastModified = new Date(data.timestamp).toLocaleString();
            showStatus(`Data loaded! Last modified: ${lastModified}`, 'success');
        } else {
            showStatus('No saved data found', 'info');
        }
        
    } catch (error) {
        showStatus('Error loading data: ' + error.message, 'error');
    } finally {
        setTimeout(() => {
            loadBtn.disabled = false;
            loadBtn.textContent = '📁 Load Latest';
        }, 500);
    }
}

function showStatus(message, type) {
    const statusDiv = document.getElementById('saveStatus');
    statusDiv.textContent = message;
    statusDiv.className = `save-status ${type}`;
    
    // Clear status after 5 seconds
    setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.className = 'save-status';
    }, 5000);
}

// Simulate broadcasting updates to other users
function broadcastUpdate() {
    // In real implementation, this would use WebSockets, Server-Sent Events, or polling
    // to notify other users of changes
    console.log('Broadcasting update to other users...');
    
    // Simulate receiving updates from other users
    // This would be handled by the server in a real implementation
}

// Auto-load data when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load saved data if available
    setTimeout(() => {
        const savedData = localStorage.getItem('markingDutyData');
        if (savedData) {
            const data = JSON.parse(savedData);
            counterData = data.counterData || counterData;
            assignmentData = data.assignmentData || assignmentData;
            
            // Ensure backward compatibility - add missing checkbox properties
            assignmentData.forEach(assignment => {
                if (assignment.excel === undefined) assignment.excel = false;
                if (assignment.portal === undefined) assignment.portal = false;
                if (assignment.nsis === undefined) assignment.nsis = false;
            });
        }
        renderCounterTable();
        renderAssignmentTable();
        
        // Show initial status
        showStatus('Page loaded. Ready to use!', 'info');
    }, 100);
});

// Periodic check for updates (simulate real-time updates)
setInterval(() => {
    // In real implementation, this would check for updates from server
    // and automatically load new data if available
    const savedData = localStorage.getItem('markingDutyData');
    if (savedData) {
        const data = JSON.parse(savedData);
        // Check if data is newer than current data
        // This is simplified - real implementation would use proper version control
    }
}, 30000); // Check every 30 seconds

/*
IMPLEMENTATION NOTES FOR REAL MULTI-USER FUNCTIONALITY:

1. Replace localStorage with API calls:
   - saveData() should POST to /api/save-marking-data
   - loadData() should GET from /api/load-marking-data

2. Add user authentication:
   - Track which user made changes
   - Add user permissions (read/write access)

3. Implement real-time updates:
   - Use WebSockets for instant updates
   - Or use Server-Sent Events for one-way updates
   - Or implement polling every few seconds

4. Add conflict resolution:
   - Handle simultaneous edits by multiple users
   - Show who is currently editing what
   - Implement version control/merging

5. Add database backend:
   - Store data in PostgreSQL/MySQL/MongoDB
   - Implement proper data validation
   - Add backup and recovery

6. Security considerations:
   - Input validation and sanitization
   - Authentication and authorization
   - HTTPS for secure communication
*/
