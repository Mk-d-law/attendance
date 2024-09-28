document.addEventListener('DOMContentLoaded', () => {
    const studentEvents = [];
    const studentAttendanceList = [];

    const studentEventList = document.getElementById('studentEventList');
    const markAttendanceCard = document.getElementById('markAttendanceCard');
    const studentCurrentLocation = document.getElementById('studentCurrentLocation');
    const studentAttendanceTableBody = document.getElementById('studentAttendanceList');

    // Mock data for available events
    studentEvents.push(
        { id: 1, name: 'Math Seminar', date: '2024-09-30', time: '10:00 AM' },
        { id: 2, name: 'Physics Workshop', date: '2024-10-02', time: '11:00 AM' }
    );

    function renderStudentEvents() {
        studentEventList.innerHTML = '';
        if (studentEvents.length === 0) {
            studentEventList.innerHTML = '<p>No events available.</p>';
        } else {
            studentEvents.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.innerHTML = `
                    <h3>${event.name}</h3>
                    <p>${event.date} at ${event.time}</p>
                    <button class="button" onclick="markStudentAttendance(${event.id})">Mark Attendance</button>
                `;
                studentEventList.appendChild(eventDiv);
            });
        }
    }

    window.markStudentAttendance = function (eventId) {
        const event = studentEvents.find(e => e.id === eventId);
        studentCurrentLocation.textContent = `Location: ${event.name}`;
        
        // Mock attendance data
        studentAttendanceList.length = 0; // Clear previous attendance data
        studentAttendanceList.push(
            { id: 1, name: 'John Doe', regNumber: '2021001' },
            { id: 2, name: 'Jane Smith', regNumber: '2021002' }
        );
        
        renderStudentAttendance();
        markAttendanceCard.style.display = 'block';
    };

    function renderStudentAttendance() {
        studentAttendanceTableBody.innerHTML = '';
        studentAttendanceList.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.regNumber}</td>
                <td><button class="button">Present</button></td>
            `;
            studentAttendanceTableBody.appendChild(row);
        });
    }

    renderStudentEvents();
});
