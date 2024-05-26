document.addEventListener('DOMContentLoaded', function() {

    const API_URL = 'https://chromeextension-firebase-api.onrender.com';


    fetch(`${API_URL}/read/test`).then((response) => {
        return response.json();
    }).then((data) => {          
        console.log(data);
    }).catch((error) => {        
        console.log(error);
    });

    document.getElementById('save-url').addEventListener('click', function() {
        // Get the current tab's URL
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            let currentTab = tabs[0]; // there will be only one in this array
            let currentUrl = currentTab.url;

            // Prepare the data to be sent to the API
            const data = { role: currentUrl };

            // Send the URL to the API
            fetch(`${API_URL}/create/test`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    });
}
)

