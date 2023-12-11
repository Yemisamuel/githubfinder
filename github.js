//Es6 class & constructor method
class Github{
  constructor(){
   this.client_id = '70ac3611c4b0a13df08d';
   this.client_secret = 'bbf0df26d977edc92e1903841c514c841eca8071';
   this.repos_count = 5;
   this.repos_sort = 'created: asc';
  }

  async getUser(users){
    const profileResponse = await fetch(`https://api.github.com/users/${users}
    ?client_id=${this.client_id}&client_secret= ${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${users}/repos?per_page=${this.repos_count}
    &sort=${this.repos_sort}
    ?client_id=${this.client_id}&client_secret= ${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return{
      profile,
      repos
    }
  }

 
}