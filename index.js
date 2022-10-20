var app = new Vue({
    el: '#app',
    data: {
      peopleList: [],
      message: 'Hello Vue!'
    },
    methods: {
      async getFromRemote(){
        let response = await fetch("https://randomuser.me/api/?results=50")
        if(response.ok) { //200 y 299
          const {results} = await response.json();
          this.peopleList = results;
        }
      }
    }
  })
  