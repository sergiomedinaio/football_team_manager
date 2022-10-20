var app = new Vue({
    el: '#app',
    data: {
      peopleList: [],
      showModal: false,
      peopleSelected: [],
      message: 'Hello Vue!'
    },
    methods: {
      selectPerson (person, index) {
        //person.gender = "male";
        this.peopleSelected.push(person);
        this.peopleList.splice(index,1);
        this.showModal = false;
      },
      async getFromRemote(){
        let response = await fetch("https://randomuser.me/api/?results=50")
        if(response.ok) { //200 y 299
          const {results} = await response.json();
          this.peopleList = results.filter(person => person.dob.age >= 18);
          this.showModal = true;
        }
      }
    }
  })
  