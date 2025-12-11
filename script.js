// Data arrays for dropdowns
const teachers = ['Essa', 'Amdad', 'Anas', 'Roy', 'Mohammd', 'Khaled'];
const grades = ['9A', '9B', '9C', '9D', '10A', '10B', '10C', '10D', '11A', '11B', '11C_Eng', '11C_CS'];

// Initial counter data
let counterData = [
    { name: 'Essa', mcqMarker: 3, mcqReviewer: 2, frqMarker: 'Random Samples', frqReviewer: 'Random Samples' },
    { name: 'Amdad', mcqMarker: 1, mcqReviewer: 2, frqMarker: 2, frqReviewer: 2 },
    { name: 'Anas', mcqMarker: 1, mcqReviewer: 2, frqMarker: 2, frqReviewer: 3 },
    { name: 'Roy', mcqMarker: 3, mcqReviewer: 2, frqMarker: 1, frqReviewer: 1 },
    { name: 'Mohammd', mcqMarker: 3, mcqReviewer: 1, frqMarker: 3, frqReviewer: 1 },
    { name: 'Khaled', mcqMarker: 0, mcqReviewer: 1, frqMarker: 3, frqReviewer: 4 }
];

// Initial assignment data
let assignmentData = [
    { grade: '9A', mcqMarker: 'Essa', mcqReviewer: 'Anas', frqMarker: 'Khaled', frqReviewer: 'Mohammd', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '9B', mcqMarker: 'Essa', mcqReviewer: 'Roy', frqMarker: 'Mohammd', frqReviewer: 'Khaled', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '9C', mcqMarker: 'Anas', mcqReviewer: 'Roy', frqMarker: 'Mohammd', frqReviewer: 'Khaled', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '9D', mcqMarker: 'Roy', mcqReviewer: 'Essa', frqMarker: 'Mohammd', frqReviewer: 'Khaled', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '10A', mcqMarker: 'Roy', mcqReviewer: 'Khaled', frqMarker: 'Anas', frqReviewer: 'Amdad', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '10B', mcqMarker: 'Roy', mcqReviewer: 'Essa', frqMarker: 'Anas', frqReviewer: 'Amdad', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '10C', mcqMarker: 'Mohammd', mcqReviewer: 'Roy', frqMarker: 'Amdad', frqReviewer: 'Anas', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '10D', mcqMarker: 'Essa', mcqReviewer: 'Mohammd', frqMarker: 'Amdad', frqReviewer: 'Anas', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Roy', finalCheck: 'Essa' },
    { grade: '11A', mcqMarker: 'Mohammd', mcqReviewer: 'Amdad', frqMarker: 'Khaled', frqReviewer: 'Roy', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '11B', mcqMarker: 'Mohammd', mcqReviewer: 'Amdad', frqMarker: 'Khaled', frqReviewer: 'Anas', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '11C_Eng', mcqMarker: 'Amdad', mcqReviewer: 'Anas', frqMarker: 'Roy', frqReviewer: 'Khaled', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' },
    { grade: '11C_CS', mcqMarker: 'Amdad', mcqReviewer: 'Anas', frqMarker: 'Roy', frqReviewer: 'Khaled', mcqMarkerDone: false, mcqReviewerDone: false, frqMarkerDone: false, frqReviewerDone: false, excel: false, portal: false, nsis: false, samplesCheck: 'Essa', finalCheck: 'Essa' }

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
            debounceAutoSave();
        });
        nameCell.appendChild(nameDropdown);
        row.appendChild(nameCell);
        
        // MCQ Marker
        const mcqMarkerCell = document.createElement('td');
        const mcqMarkerInput = createNumberInput(teacher.mcqMarker, (e) => {
            counterData[index].mcqMarker = parseInt(e.target.value) || 0;
            updateCounterTotals();
            debounceAutoSave();
        });
        mcqMarkerCell.appendChild(mcqMarkerInput);
        row.appendChild(mcqMarkerCell);
        
        // MCQ Reviewer
        const mcqReviewerCell = document.createElement('td');
        const mcqReviewerInput = createNumberInput(teacher.mcqReviewer, (e) => {
            counterData[index].mcqReviewer = parseInt(e.target.value) || 0;
            updateCounterTotals();
            debounceAutoSave();
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
                debounceAutoSave();
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
                debounceAutoSave();
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
            debounceAutoSave();
        });
        mcqMarkerCell.appendChild(mcqMarkerDropdown);
        row.appendChild(mcqMarkerCell);
        
        // MCQ Marker Done Checkbox
        const mcqMarkerDoneCell = document.createElement('td');
        const mcqMarkerDoneCheckbox = document.createElement('input');
        mcqMarkerDoneCheckbox.type = 'checkbox';
        mcqMarkerDoneCheckbox.checked = assignment.mcqMarkerDone || false;
        mcqMarkerDoneCheckbox.addEventListener('change', (e) => {
            assignmentData[index].mcqMarkerDone = e.target.checked;
            debounceAutoSave();
        });
        mcqMarkerDoneCell.appendChild(mcqMarkerDoneCheckbox);
        row.appendChild(mcqMarkerDoneCell);
        
        // MCQ Reviewer
        const mcqReviewerCell = document.createElement('td');
        const mcqReviewerDropdown = createDropdown(teachers, assignment.mcqReviewer, (e) => {
            assignmentData[index].mcqReviewer = e.target.value;
            debounceAutoSave();
        });
        mcqReviewerCell.appendChild(mcqReviewerDropdown);
        row.appendChild(mcqReviewerCell);
        
        // MCQ Reviewer Done Checkbox
        const mcqReviewerDoneCell = document.createElement('td');
        const mcqReviewerDoneCheckbox = document.createElement('input');
        mcqReviewerDoneCheckbox.type = 'checkbox';
        mcqReviewerDoneCheckbox.checked = assignment.mcqReviewerDone || false;
        mcqReviewerDoneCheckbox.addEventListener('change', (e) => {
            assignmentData[index].mcqReviewerDone = e.target.checked;
            debounceAutoSave();
        });
        mcqReviewerDoneCell.appendChild(mcqReviewerDoneCheckbox);
        row.appendChild(mcqReviewerDoneCell);
        
        // FRQ Marker
        const frqMarkerCell = document.createElement('td');
        const frqMarkerDropdown = createDropdown(teachers, assignment.frqMarker, (e) => {
            assignmentData[index].frqMarker = e.target.value;
            debounceAutoSave();
        });
        frqMarkerCell.appendChild(frqMarkerDropdown);
        row.appendChild(frqMarkerCell);
        
        // FRQ Marker Done Checkbox
        const frqMarkerDoneCell = document.createElement('td');
        const frqMarkerDoneCheckbox = document.createElement('input');
        frqMarkerDoneCheckbox.type = 'checkbox';
        frqMarkerDoneCheckbox.checked = assignment.frqMarkerDone || false;
        frqMarkerDoneCheckbox.addEventListener('change', (e) => {
            assignmentData[index].frqMarkerDone = e.target.checked;
            debounceAutoSave();
        });
        frqMarkerDoneCell.appendChild(frqMarkerDoneCheckbox);
        row.appendChild(frqMarkerDoneCell);
        
        // FRQ Reviewer
        const frqReviewerCell = document.createElement('td');
        const frqReviewerDropdown = createDropdown(teachers, assignment.frqReviewer, (e) => {
            assignmentData[index].frqReviewer = e.target.value;
            debounceAutoSave();
        });
        frqReviewerCell.appendChild(frqReviewerDropdown);
        row.appendChild(frqReviewerCell);
        
        // FRQ Reviewer Done Checkbox
        const frqReviewerDoneCell = document.createElement('td');
        const frqReviewerDoneCheckbox = document.createElement('input');
        frqReviewerDoneCheckbox.type = 'checkbox';
        frqReviewerDoneCheckbox.checked = assignment.frqReviewerDone || false;
        frqReviewerDoneCheckbox.addEventListener('change', (e) => {
            assignmentData[index].frqReviewerDone = e.target.checked;
            debounceAutoSave();
        });
        frqReviewerDoneCell.appendChild(frqReviewerDoneCheckbox);
        row.appendChild(frqReviewerDoneCell);
        
        // Mark Registry - Excel checkbox
        const excelCell = document.createElement('td');
        const excelCheckbox = document.createElement('input');
        excelCheckbox.type = 'checkbox';
        excelCheckbox.checked = assignment.excel || false;
        excelCheckbox.addEventListener('change', (e) => {
            assignmentData[index].excel = e.target.checked;
            // Auto-save for real-time sync
            debounceAutoSave();
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
            // Auto-save for real-time sync
            debounceAutoSave();
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
            // Auto-save for real-time sync
            debounceAutoSave();
        });
        nsisCell.appendChild(nsisCheckbox);
        row.appendChild(nsisCell);
        
        // 5 Samples Marking Check
        const samplesCell = document.createElement('td');
        samplesCell.className = 'samples-column';
        const samplesDropdown = createDropdown(teachers, assignment.samplesCheck, (e) => {
            assignmentData[index].samplesCheck = e.target.value;
            debounceAutoSave();
        });
        samplesCell.appendChild(samplesDropdown);
        row.appendChild(samplesCell);
        
        // Mark Reg. Final Check
        const finalCell = document.createElement('td');
        finalCell.className = 'hod-column';
        const finalDropdown = createDropdown(teachers, assignment.finalCheck, (e) => {
            assignmentData[index].finalCheck = e.target.value;
            debounceAutoSave();
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

// Real-time synchronization variables
let isUpdatingFromFirebase = false;
let lastUpdateTime = Date.now();

// Save data to Firebase (real-time sync for all users)
function saveData() {
    const saveBtn = document.getElementById('saveBtn');
    const statusDiv = document.getElementById('saveStatus');
    
    // Disable button during save
    saveBtn.disabled = true;
    saveBtn.textContent = '💾 Saving...';
    
    const dataToSave = {
        counterData: counterData,
        assignmentData: assignmentData,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        lastModifiedBy: getUserId(),
        version: Date.now()
    };
    
    // Save to Firebase (this will trigger real-time updates to all users)
    dataRef.set(dataToSave)
        .then(() => {
            saveBtn.disabled = false;
            saveBtn.textContent = '💾 Save Changes';
            showStatus('Changes saved and synced to all users! ✅', 'success');
            lastUpdateTime = Date.now();
        })
        .catch((error) => {
            saveBtn.disabled = false;
            saveBtn.textContent = '💾 Save Changes';
            showStatus('Error saving data: ' + error.message, 'error');
            console.error('Firebase save error:', error);
            
            // Fallback to localStorage if Firebase fails
            try {
                localStorage.setItem('markingDutyData', JSON.stringify(dataToSave));
                showStatus('Saved locally (offline mode)', 'info');
            } catch (localError) {
                showStatus('Failed to save: ' + localError.message, 'error');
            }
        });
}

// Auto-save function for real-time updates
function autoSave() {
    if (!isUpdatingFromFirebase) {
        showStatus('🔄 Syncing...', 'syncing');
        
        const dataToSave = {
            counterData: counterData,
            assignmentData: assignmentData,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            lastModifiedBy: getUserId(),
            version: Date.now()
        };
        
        // Save to Firebase without UI feedback (silent save)
        dataRef.set(dataToSave)
            .then(() => {
                showStatus('✅ Synced to all users', 'success');
            })
            .catch((error) => {
                console.warn('Auto-save failed:', error);
                showStatus('⚠️ Sync failed - saved locally', 'error');
                // Fallback to localStorage
                try {
                    localStorage.setItem('markingDutyData', JSON.stringify(dataToSave));
                } catch (localError) {
                    console.error('Fallback save failed:', localError);
                }
            });
    }
}

// Load data from Firebase
function loadData() {
    console.log('Loading data from Firebase...');
    showStatus('Loading latest data...', 'info');
    
    if (!dataRef) {
        console.error('Firebase dataRef not available');
        showStatus('❌ Firebase connection not available', 'error');
        return;
    }
    
    dataRef.once('value')
        .then((snapshot) => {
            console.log('Firebase data loaded, exists:', snapshot.exists());
            
            const data = snapshot.val();
            if (data) {
                console.log('Processing loaded data:', data);
                isUpdatingFromFirebase = true;
                
                // Update local data
                counterData = data.counterData || counterData;
                assignmentData = data.assignmentData || assignmentData;
                
                // Ensure backward compatibility
                assignmentData.forEach(assignment => {
                    if (assignment.excel === undefined) assignment.excel = false;
                    if (assignment.portal === undefined) assignment.portal = false;
                    if (assignment.nsis === undefined) assignment.nsis = false;
                    if (assignment.mcqMarkerDone === undefined) assignment.mcqMarkerDone = false;
                    if (assignment.mcqReviewerDone === undefined) assignment.mcqReviewerDone = false;
                    if (assignment.frqMarkerDone === undefined) assignment.frqMarkerDone = false;
                    if (assignment.frqReviewerDone === undefined) assignment.frqReviewerDone = false;
                });
                
                // Re-render tables
                renderCounterTable();
                renderAssignmentTable();
                
                const lastModified = data.timestamp ? new Date(data.timestamp).toLocaleString() : 'Unknown';
                const modifiedBy = data.lastModifiedBy || 'Unknown user';
                showStatus(`✅ Data loaded! Last modified: ${lastModified} by ${modifiedBy}`, 'success');
                
                lastUpdateTime = data.timestamp || Date.now();
                
                setTimeout(() => {
                    isUpdatingFromFirebase = false;
                }, 1000);
            } else {
                console.log('No data found in Firebase, using local data');
                renderCounterTable();
                renderAssignmentTable();
                showStatus('No data in database - initialized with defaults', 'info');
                
                // Save current data to Firebase
                if (counterData.length > 0 || assignmentData.length > 0) {
                    console.log('Saving initial data to Firebase...');
                    autoSave();
                }
            }
        })
        .catch((error) => {
            console.error('Firebase load error:', error);
            showStatus('❌ Error loading data: ' + error.message, 'error');
            
            // Fallback to localStorage
            try {
                const savedData = localStorage.getItem('markingDutyData');
                if (savedData) {
                    const data = JSON.parse(savedData);
                    counterData = data.counterData || counterData;
                    assignmentData = data.assignmentData || assignmentData;
                    
                    // Ensure backward compatibility
                    assignmentData.forEach(assignment => {
                        if (assignment.excel === undefined) assignment.excel = false;
                        if (assignment.portal === undefined) assignment.portal = false;
                        if (assignment.nsis === undefined) assignment.nsis = false;
                        if (assignment.mcqMarkerDone === undefined) assignment.mcqMarkerDone = false;
                        if (assignment.mcqReviewerDone === undefined) assignment.mcqReviewerDone = false;
                        if (assignment.frqMarkerDone === undefined) assignment.frqMarkerDone = false;
                        if (assignment.frqReviewerDone === undefined) assignment.frqReviewerDone = false;
                    });
                    
                    renderCounterTable();
                    renderAssignmentTable();
                    showStatus('Loaded from local storage (offline mode)', 'info');
                } else {
                    renderCounterTable();
                    renderAssignmentTable();
                    showStatus('Using default data (no saved data found)', 'info');
                }
            } catch (localError) {
                console.error('Local storage fallback failed:', localError);
                renderCounterTable();
                renderAssignmentTable();
                showStatus('Using default data (fallback failed)', 'error');
            }
            isUpdatingFromFirebase = false;
        });
}

// Listen for real-time updates from Firebase
function setupRealTimeListener() {
    console.log('Setting up Firebase real-time listener...');
    
    try {
        dataRef.on('value', (snapshot) => {
            console.log('Firebase data received:', snapshot.exists());
            
            const data = snapshot.val();
            if (data && !isUpdatingFromFirebase) {
                console.log('Processing Firebase update...', data);
                
                // Only update if the data is newer than our last update
                const serverTime = data.timestamp || 0;
                if (serverTime > lastUpdateTime || lastUpdateTime === 0) {
                    isUpdatingFromFirebase = true;
                    
                    console.log('Applying Firebase update to UI');
                    
                    // Update local data
                    counterData = data.counterData || counterData;
                    assignmentData = data.assignmentData || assignmentData;
                    
                    // Ensure backward compatibility
                    assignmentData.forEach(assignment => {
                        if (assignment.excel === undefined) assignment.excel = false;
                        if (assignment.portal === undefined) assignment.portal = false;
                        if (assignment.nsis === undefined) assignment.nsis = false;
                        if (assignment.mcqMarkerDone === undefined) assignment.mcqMarkerDone = false;
                        if (assignment.mcqReviewerDone === undefined) assignment.mcqReviewerDone = false;
                        if (assignment.frqMarkerDone === undefined) assignment.frqMarkerDone = false;
                        if (assignment.frqReviewerDone === undefined) assignment.frqReviewerDone = false;
                    });
                    
                    // Re-render tables
                    renderCounterTable();
                    renderAssignmentTable();
                    
                    const modifiedBy = data.lastModifiedBy || 'Another user';
                    if (modifiedBy !== getUserId()) {
                        console.log('Update from:', modifiedBy);
                        showStatus(`🔄 Updated by ${modifiedBy}`, 'info');
                    } else {
                        showStatus('✅ Your changes saved', 'success');
                    }
                    
                    lastUpdateTime = serverTime;
                    
                    setTimeout(() => {
                        isUpdatingFromFirebase = false;
                    }, 1000);
                }
            } else if (!snapshot.exists()) {
                console.log('No data in Firebase, initializing...');
                // Initialize with current data if database is empty
                if (counterData.length > 0 || assignmentData.length > 0) {
                    autoSave();
                }
            }
        }, (error) => {
            console.error('Firebase listener error:', error);
            showStatus('❌ Real-time sync error: ' + error.message, 'error');
        });
        
        console.log('Firebase listener setup complete');
    } catch (error) {
        console.error('Error setting up Firebase listener:', error);
        showStatus('❌ Failed to setup real-time sync: ' + error.message, 'error');
    }
}

// Generate or get user ID
function getUserId() {
    let userId = localStorage.getItem('markingDutyUserId');
    if (!userId) {
        userId = 'User_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
        localStorage.setItem('markingDutyUserId', userId);
    }
    return userId;
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

// Debug function to test Firebase connection (run in browser console)
function testFirebaseConnection() {
    console.log('=== Firebase Connection Test ===');
    
    if (typeof firebase === 'undefined') {
        console.error('❌ Firebase SDK not loaded');
        return false;
    }
    
    if (!firebase.database) {
        console.error('❌ Firebase Database not available');
        return false;
    }
    
    console.log('✅ Firebase SDK loaded');
    console.log('✅ Firebase Database available');
    
    // Test database connection
    const testRef = firebase.database().ref('test');
    testRef.set({
        message: 'Connection test',
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        console.log('✅ Write test successful');
        return testRef.once('value');
    }).then((snapshot) => {
        console.log('✅ Read test successful:', snapshot.val());
        testRef.remove(); // Clean up
        console.log('🎉 Firebase connection is working!');
    }).catch((error) => {
        console.error('❌ Firebase test failed:', error);
    });
    
    return true;
}

// Make test function globally available
window.testFirebaseConnection = testFirebaseConnection;

// Auto-load data when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, checking Firebase availability...');
    
    // Check if Firebase is available
    if (typeof firebase !== 'undefined' && firebase.database) {
        console.log('Firebase is available, setting up real-time sync...');
        
        // Test Firebase connection
        firebase.database().ref('.info/connected').on('value', function(snapshot) {
            if (snapshot.val() === true) {
                console.log('✅ Connected to Firebase');
                showStatus('🔄 Connected to real-time sync', 'success');
            } else {
                console.log('❌ Disconnected from Firebase');
                showStatus('⚠️ Disconnected from sync server', 'error');
            }
        });
        
        setupRealTimeListener();
        showStatus('🔄 Connecting to real-time sync...', 'info');
        
        // Load initial data from Firebase
        setTimeout(() => {
            loadData();
        }, 1000);
    } else {
        // Fallback to localStorage if Firebase is not available
        console.warn('Firebase not available, using localStorage fallback');
        showStatus('⚠️ Real-time sync unavailable - using local storage', 'error');
        
        setTimeout(() => {
            const savedData = localStorage.getItem('markingDutyData');
            if (savedData) {
                const data = JSON.parse(savedData);
                counterData = data.counterData || counterData;
                assignmentData = data.assignmentData || assignmentData;
                
                // Ensure backward compatibility
                assignmentData.forEach(assignment => {
                    if (assignment.excel === undefined) assignment.excel = false;
                    if (assignment.portal === undefined) assignment.portal = false;
                    if (assignment.nsis === undefined) assignment.nsis = false;
                    if (assignment.mcqMarkerDone === undefined) assignment.mcqMarkerDone = false;
                    if (assignment.mcqReviewerDone === undefined) assignment.mcqReviewerDone = false;
                    if (assignment.frqMarkerDone === undefined) assignment.frqMarkerDone = false;
                    if (assignment.frqReviewerDone === undefined) assignment.frqReviewerDone = false;
                });
            }
            renderCounterTable();
            renderAssignmentTable();
            showStatus('Loaded from local storage (offline mode)', 'info');
        }, 100);
    }
});

// Debounce function for auto-save (prevents too many saves)
let autoSaveTimeout;
function debounceAutoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        if (typeof firebase !== 'undefined' && firebase.database) {
            autoSave();
        }
    }, 1000); // Wait 1 second after last change before auto-saving
}

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
