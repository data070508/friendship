// Load JSON data
async function loadMemories() {
    try {
        const response = await fetch("data/memories.json");
        const data = await response.json();

        updateFriendshipCounter(data.website.friends_since);
        createTimeline(data.memories);
        createGallery(data.gallery.featured);
        createFriends(data.friends);
        createScrapbook(data.scrapbook);
        createCapsules(data.time_capsules);

    } catch (error) {
        console.log("Error loading memories:", error);
    }
}


// Friendship counter
function updateFriendshipCounter(startDate) {
    const start = new Date(startDate);
    const today = new Date();

    const diff = today - start;
    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    document.getElementById("days").innerText = days;
}


// Timeline cards
function createTimeline(memories) {

    const container =
        document.getElementById("memory-container");

    container.innerHTML = "";

    memories.forEach(memory => {

        const photos =
            memory.photos
            .map(img =>
                `<img src="${img}" alt="${memory.title}">`
            )
            .join("");


        container.innerHTML += `
            <div class="memory-card">

                ${photos}

                <div class="memory-content">

                    <h3>${memory.title}</h3>

                    <p class="date">
                        ${memory.date}
                        • ${memory.location}
                    </p>

                    <p>
                        ${memory.description}
                    </p>

                </div>

            </div>
        `;
    });
}


// Gallery section
function createGallery(images) {

    const gallery =
        document.getElementById("gallery-container");

    images.forEach(image => {

        gallery.innerHTML += `
            <div class="gallery">
                <img src="${image}">
            </div>
        `;

    });
}


// Friends wall
function createFriends(friends) {

    const container =
        document.getElementById("friends-container");


    friends.forEach(friend => {

        container.innerHTML += `
            <div class="friend-card">

                <img src="${friend.photo}">

                <h3>
                    ${friend.name}
                </h3>

                <p>
                    "${friend.quote}"
                </p>

            </div>
        `;

    });

}


// Scrapbook notes
function createScrapbook(notes) {

    const container =
        document.getElementById("scrapbook-container");


    notes.forEach(note => {

        container.innerHTML += `
            <div class="note"
            style="transform: rotate(${note.rotation})">

                ${note.message}

            </div>
        `;

    });

}


// Time Capsule
function createCapsules(capsules) {

    const container =
        document.getElementById("capsule-container");

    const today = new Date();


    capsules.forEach(capsule => {

        const unlockDate =
            new Date(capsule.unlock_date);


        const opened =
            today >= unlockDate;


        container.innerHTML += `
            <div class="capsule 
            ${opened ? "open" : "locked"}">

                <h3>
                    ${capsule.title}
                </h3>

                <br>

                ${
                    opened
                    ? `<p>${capsule.message}</p>`
                    : `
                    <p>
                    🔒 Opens on 
                    ${capsule.unlock_date}
                    </p>
                    `
                }

            </div>
        `;

    });

}


// Start website
loadMemories();
