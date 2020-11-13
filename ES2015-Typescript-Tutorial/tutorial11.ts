var employee1 = {
    id: 1,
    greet: function(){
        setTimeout (() => {console.log(this.id)}, 1000);
    }
};

employee1.greet();