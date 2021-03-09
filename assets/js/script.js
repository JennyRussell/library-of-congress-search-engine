var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var serchTerm = document.querySelector('#searchTerm');

//these are for the div to display the data
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var search = serchTerm.value.trim();
  
    if (search) {
      getInfo(search);
  
      repoContainerEl.textContent = '';
      serchTerm.value = '';
    } else {
      alert('Enter a search term');
    }
  };


var getInfo = function (query) {

    
    var apiUrl = "https://www.loc.gov/search/?q="+ query +"&fo=json"


    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayRepos(data, query);
          console.log(data)
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
  };



  var displayRepos = function (Searches1, searchTerm) {

  
    repoSearchTerm.textContent = searchTerm;
  
    for (var i = 0; i < 7; i++){

      var searchResults = Searches1[i];
      console.log(searchResults)

      var serchTitleEl = document.createElement("h1");
      repoContainerEl.appendChild(serchTitleEl)
  
    //   var repoEl = document.createElement('div');
    //   repoEl.classList = 'list-item flex-row justify-space-between align-center';
  
    //   var titleEl = document.createElement('span');
    //   titleEl.textContent = searchName;
  
    //   repoEl.appendChild(titleEl);
  
    //   var statusEl = document.createElement('span');
    //   statusEl.classList = 'flex-row align-center';
  
    //   repoEl.appendChild(statusEl);
  
    //   repoContainerEl.appendChild(repoEl);
    }
  };






  userFormEl.addEventListener('submit', formSubmitHandler);
