// Get elements from the page
var userList = document.getElementById("userList");
var searchInput = document.getElementById("search");

var users = [];

// Get the users from the API
fetch("https://dummyjson.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        users = data.users;
        renderUsers(users);
    })
    .catch(function() {
        userList.innerHTML = "<li>Failed to load users.</li>";
    });

// Function to show the users in the list
function renderUsers(usersToShow) {
    if (usersToShow.length === 0) {
        userList.innerHTML = "<li>No users found.</li>";
        return;
    }

    var html = "";
    for (var i = 0; i < usersToShow.length; i++) {
        var user = usersToShow[i];
        html += '<li class="user-item">' +
                    '<img class="user-photo" src="' + user.image + '" alt="' + user.firstName + '">' +
                    '<div class="user-info">' +
                        '<span class="user-name">' + user.firstName + ' ' + user.lastName + '</span>' +
                        '<span class="user-contact">' + user.email + ' | ' + user.phone + '</span>' +
                    '</div>' +
                '</li>';
    }
    userList.innerHTML = html;
}

// Search for users when typing
searchInput.addEventListener("input", function(event) {
    var term = event.target.value.toLowerCase();

    var filtered = [];
    for (var i = 0; i < users.length; i++) {
        var fullName = (users[i].firstName + " " + users[i].lastName).toLowerCase();
        if (fullName.indexOf(term) !== -1) {
            filtered.push(users[i]);
        }
    }

    renderUsers(filtered);
});
