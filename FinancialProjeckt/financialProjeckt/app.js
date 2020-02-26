var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp : 0,
            inc: 0
        }

    };
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //Create ID
            if (data.allItems[type].length > 0) {

                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            } else {
                ID = 0;
            }
            //Create new item inc ot exp
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }
            //Push it into data structure
            data.allItems[type].push(newItem);
            return newItem;

        },
        testing: function () {
            console.log(data);
        }
    }
    })();



var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list',

    };


    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                descriptipn: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };

        },
        addListItem: function (obj, type) {
            var html,newHtml;
            if (type==='inc') {
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">+%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>  </div>  </div>  </div>  ';
                Element = DOMstrings.incomeContainer;
            } else {
                Element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div></div';       

            }
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            document.querySelector(Element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
                fieldsArr[0].focus();
            });
        },



        getDOMstring: function () {
            return DOMstrings;
        }
    };




})();

//GlOBAL CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstring();


        document.querySelector(DOM.inputBtn).addEventListener('click', crtlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                crtlAddItem();


            }


        });

    };

    var crtlAddItem = function () {
        var input, newItem;
        //1.Get the filled data
        input = UICtrl.getInput();

        //2.Add item to the budger control
         newItem=budgetCtrl.addItem(input.type, input.descriptipn, input.value);
        //3.Add item to the UI
        UIController.addListItem(newItem, input.type);
        //4. Clear fields
        UIController.clearFields();
        //4.2.Calculate the Budget
        
        //5.Display the budget
    };
    return {
        init: function () {
            console.log('APP JUST STARTED------------------------------>>>IT WORK<<<-----------------------------------------');

            setupEventListeners();

        }
    };
})(budgetController, UIController);
controller.init();