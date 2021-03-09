var serchTerm = document.querySelector('#search-term');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var search = serchTerm.value.trim();
  
    if (search) {
      getUserRepos(search);
  
      repoContainerEl.textContent = '';
      serchTerm.value = '';
    } else {
      alert('Enter a search term');
    }
  };


var getInfo = function (language) {

    
    var apiUrl = "https://www.loc.gov/newspapers/?q="+ query +"&fo=json"


    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayRepos(data.items, language);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
  };

  var displayRepos = function (repos, searchTerm) {
    if (repos.length === 0) {
      repoContainerEl.textContent = 'No repositories found.';
      // What would happen if there was no `return;` here?
      // TODO: Write your answer here
      return;
    }
  
    repoSearchTerm.textContent = searchTerm;
  
    for (var i = 0; i < repos.length; i++) {
      // What is the result of this string concatenation?
      // TODO: Write your answer here
      var repoName = repos[i].owner.login + '/' + repos[i].name;
      console.log(repoName)
  
      var repoEl = document.createElement('div');
      repoEl.classList = 'list-item flex-row justify-space-between align-center';
  
      var titleEl = document.createElement('span');
      titleEl.textContent = repoName;
  
      repoEl.appendChild(titleEl);
  
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
  
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
          "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }
  
      repoEl.appendChild(statusEl);
  
      repoContainerEl.appendChild(repoEl);
    }
  };