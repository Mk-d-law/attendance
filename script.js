document.addEventListener('DOMContentLoaded', () => {
    const events = [];
    const attendanceList = [];

    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');
    const attendanceCard = document.getElementById('attendanceCard');
    const attendanceHeader = document.getElementById('attendanceHeader');
    const currentLocation = document.getElementById('currentLocation');
    const attendanceCount = document.getElementById('attendanceCount');
    const attendanceTableBody = document.getElementById('attendanceList');

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEvent = {
            id: Date.now(),
            name: eventForm.eventName.value,
            date: eventForm.eventDate.value,
            time: eventForm.eventTime.value,
            location: 'Current Location', // This should be dynamic in a real application
        };
        events.push(newEvent);
        renderEvents();
        eventForm.reset();
    });

    function renderEvents() {
        eventList.innerHTML = '';
        if (events.length === 0) {
            eventList.innerHTML = '<p>No upcoming events. Create one to get started.</p>';
        } else {
            events.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event-item';
                eventDiv.innerHTML = `
                    <h3>${event.name}</h3>
                    <p>${event.date} at ${event.time}</p>
                    <button class="button" onclick="startAttendance(${event.id})">Start Attendance</button>
                `;
                eventList.appendChild(eventDiv);
            });
        }
    }

    window.startAttendance = function (eventId) {
        const event = events.find(e => e.id === eventId);
        currentLocation.textContent = `Location: ${event.location}`;
        attendanceCount.textContent = `${attendanceList.length} students checked in`;
        attendanceHeader.querySelector('h2').textContent = `Current Attendance: ${event.name}`;
        
        // Mock attendance data
        attendanceList.length = 0; // Clear previous attendance data
        attendanceList.push(
            { id: 1, name: 'John Doe', regNumber: '2021001', verified: true },
            { id: 2, name: 'Jane Smith', regNumber: '2021002', verified: false }
        );
        
        renderAttendance();
        attendanceCard.style.display = 'block';
    };

    function renderAttendance() {
        attendanceTableBody.innerHTML = '';
        attendanceList.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.regNumber}</td>
                <td>${student.verified ? 'Verified' : 'Not Verified'}</td>
            `;
            attendanceTableBody.appendChild(row);
        });
    }
});
