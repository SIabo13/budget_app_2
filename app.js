const budgetApp = new Vue({
el:'#budget_app',
data:{
    description:'',
    value:0,
    budgetTotal:0,
   incomeDescription:"",
   incomeTotal:0,
   expenseDescription:"Paid Rent" ,
   expenseTotal:0,
   incomeItems: [],
   expenseItems: [],
   type:''
},
methods:{

    addItem: function(){  
        let incomeSum, expenseSum;   
        if(this.type == 'inc'){
            this.incomeItems.push({
                description:this.description,
                value: this.value
            })
          this.incomeTotal += parseInt(this.value);
          this.budgetTotal += parseInt(this.value);
        }
        
        else if(this.type == 'exp'){
            this.expenseItems.push({
                description:this.description,
                value: this.value
           
        })
       this.expenseTotal += parseInt(this.value);
       this.budgetTotal -= parseInt(this.value);
    }

    },

    removeItem:function(){
        
    }

}


});