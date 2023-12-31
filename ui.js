class UI{
    constructor(){
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos')
    }

    // insert  profile value  on the html div 
    showProfile(user){
        this.profile.innerHTML = `
      <div class="card card-body mb-3">
         <div class="row">
           <div class="col-md-3 ">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn 
            btn-primary btn-block mb-2">View Profile</a>
         </div>

          <div class="col-md-9">
           <span class="badge badge-primary">Public Repos: 
           ${user.public_repos}
           </span>
           <span class="badge badge-secondary">Public gists: 
           ${user.public_gists}
           </span>
           <span class="badge badge-info">Followers: 
           ${user.followers}
           </span>
           <span class="badge badge-light">Following: 
           ${user.following}
           </span>

          <br></br>
          
          <ul class="list-group">
          <li class="list-group-item>Name: ${user.name} </li>
          <li class="list-group-item>Company: ${user.company} </li>
          <li class="list-group-item>Blog: ${user.blog} </li>
          <li class="list-group-item>Location: ${user.location} </li>
          <li class="list-group-item>Bio: ${user.bio} </li>
          <li class="list-group-item>Twitter: ${user.twitter_username} </li>
          <li class="list-group-item>Joined: ${user.created_at} </li>
          <li class="list-group-item>Event: ${user.events_url} </li>
          </ul>
        </div>
    </div>  
  </div>
  <h3>Repository List</h3>
     `
   
    }
    // insert  repos value  on the html div 
    showRepos(repos){
      let output = '';
      repos.forEach(function(repo){
        output += `
      
      <div class="card card-body mb-3">
      <div class="row"> 
      <div class="col-md-6">
      <a href="${repo.html_url} target="_blank">${repo.name}</a>
      </div>   
        <div class="col-md-6">   
        <ul class="list-group">
        <li class="list-group-item>Name: ${repo.followers_url} </li>
        <li class="list-group-item>Company: ${repo.organizations_url} </li>
        <li class="list-group-item>Blog: ${repo.gists_url} </li>
        <li class="list-group-item>Location: ${repo.type} </li>
        
        </ul>
            
         </div>
       </div>
      </div>
     `
     document.getElementById('repos').innerHTML = output;
    })
    }
    //Error alert
     showAlert(message, className){
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

       const container = document.querySelector('.searchContainer');
       const search = document.querySelector('.search');

        container.insertBefore(div, search)
        

      setTimeout(()=>{
        this.clearAlert();
      },2000)  

     }

     clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
     }

    clearProfile(){
        this.profile.innerHTML = '';
    }


}