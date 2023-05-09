import { fetchUsers, getNewUsers } from "./api.js";

function init() {

  const mainDiv = document.getElementById("main");
   
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  const headerMenu = document.createElement("div");
  headerMenu.className = "header__menu"; 

  const content = document.createElement("div");
  content.id = "content";

  const leftPanel = document.createElement("div");
  leftPanel.id = "leftPanel";

  const rightPanel = document.createElement("div");
  rightPanel.id = "rightPanel";
   

  const leftPanelLoader = document.createElement("div");
  leftPanelLoader.className = "loader";

  const contentLoader = document.createElement("div");
  contentLoader.className = "loader";

  const rightPanelLoader = document.createElement("div");
  rightPanelLoader.className = "loader";

 
  const userRatingButton = document.createElement("button");
  userRatingButton.innerText = "User Rating";

  const newsButton = document.createElement("button");
  newsButton.innerText = "News";

  const contactsButton = document.createElement("button");
  contactsButton.innerText = "Contacts";

  const aboutButton = document.createElement("button"); 
  aboutButton.innerText = "About";

  
  const currentUsers = document.createElement("div");
  currentUsers.id = "currentUsers";

  const newUsers = document.createElement("div");  
  newUsers.id = "newUsers";
 
  
  const currentUsersCount = document.createElement("p");
  const newUsersList = document.createElement("ul");


  const getUsersBtn = document.createElement("button");
  getUsersBtn.id = "getUsers";
  getUsersBtn.innerText = "Get users";


  const searchItems = document.createElement("div");
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  searchButton.innerText = "Search";
  searchItems.id = "searchWrapper";
  searchInput.id = "searchInput";
  searchButton.id = "searchButton";


  const deleteColumn = document.createElement("th");
  const editCheckbox = document.createElement("input");
  const editLabel = document.createElement("label");
  deleteColumn.innerText = "Delete";
  editCheckbox.type = "checkbox";
  editCheckbox.id = "editTableCheckbox";
  editLabel.innerText = "Edit table";
  editLabel.classList.add("editor");
  
  editLabel.appendChild(editCheckbox);

  mainDiv.appendChild(header);
  mainDiv.appendChild(main);
  mainDiv.appendChild(footer);

  main.appendChild(leftPanel);
  main.appendChild(content);
  main.appendChild(rightPanel);

  content.appendChild(contentLoader);
  leftPanel.appendChild(leftPanelLoader);  
  rightPanel.appendChild(rightPanelLoader);

  header.appendChild(headerMenu);

  headerMenu.appendChild(userRatingButton);
  headerMenu.appendChild(newsButton);
  headerMenu.appendChild(contactsButton);
  headerMenu.appendChild(aboutButton);

  footer.appendChild(currentUsers);
  footer.appendChild(newUsers);

  currentUsers.appendChild(currentUsersCount);
  newUsers.appendChild(newUsersList);

  const contentTitle = document.createElement("h2");
  content.appendChild(contentTitle);


  userRatingButton.addEventListener("click", function () {
    contentLoader.style.display = "none";
    contentTitle.innerText = "User Rating";
  })

  newsButton.addEventListener("click", function () {
    contentLoader.style.display = "none";
    contentTitle.innerText = "News";
  })

  contactsButton.addEventListener("click", function () {
    contentLoader.style.display = "none";
    contentTitle.innerText = "Contacts";
  })

  aboutButton.addEventListener("click", function () {
    contentLoader.style.display = "none";
    contentTitle.innerText = "About";
  })

  
  setTimeout(() => {
    content.style.display = "block";
    contentLoader.style.display = "none";
    contentTitle.innerText = "No users";
    content.appendChild(getUsersBtn);
  }, 1000);

  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    currentUsersCount.innerText = "Current users: " + data.length;
    const latestUsers = data.slice(-5);
    const newUsersHeader = document.createElement("p");
    newUsersHeader.innerText = "New users:";
    newUsersList.appendChild(newUsersHeader);
    latestUsers.forEach(user => {
      let li = document.createElement("li");
      li.innerText = user.username;
      newUsersList.appendChild(li);
    });
  }); 



  
  getUsersBtn.addEventListener("click", () => {
    editCheckbox.checked = false;
    fetchUsers().then((users) => {
      contentTitle.style.display = "none";
      const table = document.createElement("table");
      const oldTable = content.querySelector("table");

      if (oldTable)
        content.removeChild(oldTable);

      const renderTable = () => {
        table.innerHTML = `
          <thead>
            <tr>
              <th>Ім'я</th>
              <th id="surname">Прізвище</th>
              <th>Бал</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(user => `
              <tr>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.score}</td>
              </tr>
          `).join("")}
          </tbody>
          `;
      };

      renderTable();
      content.appendChild(table);

      
      const surnameHeader = table.querySelector("#surname");
      surnameHeader.addEventListener("click", () => {
        users.sort((a, b) => a.lastname.localeCompare(b.lastname));
        renderTable();
        editCheckbox.checked = false;
      })
    });
  })

  
  setTimeout(() => {
    leftPanelLoader.style.display = "none";
    leftPanel.appendChild(searchItems);
    searchItems.appendChild(searchInput);
    searchItems.appendChild(searchButton);
  }, 1000);

 
  searchButton.addEventListener("click", () => {
    const searchText = searchInput.value.trim().toLowerCase();
    const tableRows = content.querySelectorAll("table tr");

    tableRows.forEach(row => {
      const rowCells = row.querySelectorAll("td");
      let rowFound = false;

      rowCells.forEach(cell => {
        const cellText = cell.textContent.trim().toLowerCase();

        if (cellText.includes(searchText)) {
          rowFound = true;
          cell.classList.add("green");
        } else {
          cell.classList.remove("green");
        }
      });
      if (rowFound)
        row.classList.add("green");
      else
        row.classList.remove("green");
    })
  })


  setTimeout(() => {
    fetchUsers().then((users) => {
      const totalScore = users.slice(0, 10).reduce((acc, curr) => acc + curr.score, 0);
      const totalScoreP = document.createElement("p");
      totalScoreP.innerText = `Сума балів: ${totalScore}`;
      totalScoreP.classList.add("scoreStyle");
      rightPanel.appendChild(totalScoreP);
      rightPanelLoader.style.display = "none";
      rightPanel.appendChild(editLabel);
    });
  }, 1000)

 
  function deleteButtonClick(event) {
    const row = event.target.closest("tr");
    if (row)
      row.remove();
  }
  
  editCheckbox.addEventListener("change", function (event) {
    const editMode = event.target.checked;
    const tableRows = document.querySelectorAll("#content tr");

    if (editMode) {
      tableRows.forEach((row, index) => {
        if (index === 0) {
          const th = document.createElement("th");
          row.appendChild(th);
        } else {
          const deleteButton = document.createElement("button");
          deleteButton.innerText = "Delete";
          deleteButton.addEventListener("click", deleteButtonClick);
          const td = document.createElement("td");
          td.appendChild(deleteButton);
          row.appendChild(td);
        }
      });
    } else {
      tableRows.forEach((row) => {
        row.lastElementChild.remove();
      });
    }
  });
}

init();