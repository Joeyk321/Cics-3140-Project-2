document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const welcomeHeading = document.getElementById('welcome-heading');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            
            welcomeHeading.classList.remove('active');
        });
    });

    welcomeHeading.addEventListener('click', function() {
        this.classList.add('active');
        window.scrollTo({
            top: document.getElementById('home').offsetTop,
            behavior: 'smooth'
        });

        
        navLinks.forEach(link => link.classList.remove('active'));
    }); 

    // Medal Rankings
    const medalRankings = [
        { country: "Japan", gold: 6, silver: 2, bronze: 4, total: 12 },
        { country: "France", gold: 5, silver: 8, bronze: 3, total: 16 },
        { country: "China", gold: 5, silver: 5, bronze: 2, total: 12 },
        { country: "Australia", gold: 5, silver: 6, bronze: 7, total: 18 },
        { country: "South Korea", gold: 5, silver: 3, bronze: 1, total: 9 },
        { country: "United States", gold: 3, silver: 8, bronze: 9, total: 20 },
        { country: "Great Britain", gold: 2, silver: 5, bronze: 3, total: 10 },
        { country: "Italy", gold: 2, silver: 3, bronze: 3, total: 8 },
        { country: "Canada", gold: 2, silver: 1, bronze: 2, total: 5 },
        { country: "Hong Kong", gold: 2, silver: 0, bronze: 1, total: 3 }
    ];

    window.showRankings = function(type) {
        const rankingList = document.getElementById('ranking-list');
        rankingList.innerHTML = '';
        const sortedRankings = [...medalRankings].sort((a, b) => b[type.toLowerCase()] - a[type.toLowerCase()]);

        sortedRankings.forEach(record => {
            const li = document.createElement('li');
            li.textContent = `${record.country}: ${type} - ${record[type.toLowerCase()]}`;
            rankingList.appendChild(li);
        });
    };

    window.resetRankings = function() {
        document.getElementById('ranking-list').innerHTML = '';
    };

    // Sports Schedule
    const sports = {
        "Basketball": ["Event 1: 10:00 AM - 07/31", "Event 2: 2:00 PM - -7/31"],
        "Baseball": ["Event 1: 11:00 AM - 08/01", "Event 2: 3:00 PM - 08/01"],
        "Volleyball": ["Event 1: 12:00 PM - 07/28", "Event 2: 4:00 PM - 07/28"],
        "Cricket": ["Event 1: 1:00 PM - 07/26", "Event 2: 5:00 PM - 07/26"],
        "Swimming": ["Event 1: 2:00 PM - 07/25", "Event 2: 6:00 PM - 07/25"]
    };
    

    document.querySelectorAll('.sport-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sport = this.getAttribute('data-sport');
            const schedule = sports[sport] || ["No schedule available"];
            const scheduleDiv = document.getElementById('schedule');
            
            
    
            scheduleDiv.innerHTML = `<h3>${sport} Schedule</h3><ul>${schedule.map(event => `<li>${event}</li>`).join('')}</ul>`;
        });
    
    });
    document.getElementById('reset-schedule').addEventListener('click', function() {
        document.getElementById('schedule').innerHTML = '';
    });

   
    const newsItems = [
        { title: "2024 Opening Olympics Ceremony", content: "<a href='https://olympics.com/en/paris-2024/the-games/ceremonies/opening-ceremony'>Click here</a>" },
        { title: "Live Updates", content: "<a href='https://olympics.com/en/paris-2024/live-updates/e7566ebb-4daa-4dfc-9cbd-4abf8638b4df'>Click here</a>" },
        { title: "Unexpected Winner", content: "<a href='https://dailyhive.com/vancouver/canada-surprise-olympic-medal-great-day-paris'>Click here</a>" }
    ];

    const newsList = document.getElementById('news-list');
    newsItems.forEach(news => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${news.title}</strong>: ${news.content}`;
        newsList.appendChild(li);
    });
});
