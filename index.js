var app = new Vue({
    el: '#app',
    data: {
      peopleList: [],
      showModal: false,
      peopleSelected: [],
      message: 'Hello Vue!'
    },
    created: function () {
      const prevList = JSON.parse(localStorage.getItem("peopleSelected"))
      this.peopleSelected = prevList ? prevList : [];
    },  
    methods: {
      selectPerson (person, index) {
        this.peopleSelected.push(person);
        this.peopleList.splice(index,1);
        this.showModal = false;
        localStorage.setItem("peopleSelected", JSON.stringify(this.peopleSelected))
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

