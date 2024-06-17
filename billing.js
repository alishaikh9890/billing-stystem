// snacks total and tax

let snack_nutella_elements = document.getElementsByClassName("snacks");

let nutella = 0;
let noodles = 0;
let lays = 0;
let oreo = 0;
let chocolate = 0;
let dairy = 0;
let numkeen =0;

let nutella1 = 1;
let noodles1= 1;
let lays1 = 1;
let oreo1 = 1;
let chocolate1 = 1;
let dairy1 = 1;
let numkeen1 =1;



for (let i = 0; i < snack_nutella_elements.length; i++) {
    snack_nutella_elements[i].addEventListener("change", function(){

        if(i==0){
            nutella = nutella + 1 ;
            //  nutella1 =nutella ;
           
        } else if(i==1){
            noodles = noodles + 1 ;
            // noodles1 = noodles ;
            
        } else if(i==2){
            lays = lays + 1 ;
            // lays1 = lays ;
            
        } else if(i==3){ 
            oreo = oreo + 1 ;
            // oreo1 = oreo ;
           
        } else if(i==4){
            chocolate = 1 ;
            // chocolate1 = chocolate ;
           
         } else if(i==5){
            dairy = dairy + 1 ;
            // dairy1 = dairy ;
           
        } else if(i==6){
            numkeen = numkeen + 1 ;
            // numkeen1 = numkeen ; 
        }


    });
}

let total_snack = document.getElementById("total-snack");

        total_snack.value = nutella*150 + noodles*10 + lays*10 + oreo*20 + chocolate*50 + dairy*60 + numkeen*15;

        document.getElementById("snacks-tax").value = total_snack.value * 118 / 100;
const 

products = [
    {
        title: "Nutella Choco Spread",
        qty: nutella,
        price: nutella*150
    },
    {
        title: "Noodles (1 pack)",
        qty: noodles,
        price: noodles*10
    },
    {
        title: "Lays (10 rs)",
        qty: lays,
        price: lays*10
    },
    {
        title: "Oreo (20Rs)",
        qty: oreo,
        price: oreo*20
    },
    {
        title: "Chocolate Muffins",
        qty: chocolate,
        price: chocolate*50
    },
    {
        title: "Dairy Milk Silk (60 Rs)",
        qty: dairy,
        price: dairy*60
    },
    {
        title: "Numkeen (15 Rs)",
        qty: numkeen,
        price: numkeen*15
    }
]

// Grocery total and tax

let grocery_elements = document.getElementsByClassName("grocery");

let Atta = 0;
let Paasta = 0;
let Rice = 0;
let Oil = 0;
let Sugar = 0;
let Daal = 0;
let Tea =0;

for (let i = 0; i < grocery_elements.length; i++) {
    grocery_elements[i].addEventListener("change", function(){

        if(i==0){
            Atta = Atta + grocery_elements[i].value * 60;
        } else if(i==1){
            Paasta = Paasta + grocery_elements[i].value * 85;
        } else if(i==2){
            Rice = Rice + grocery_elements[i].value * 77;
        } else if(i==3){
            Oil = Oil + grocery_elements[i].value * 104;
        } else if(i==4){
            Sugar = Sugar + grocery_elements[i].value * 52;
         } else if(i==5){
            Daal = Daal + grocery_elements[i].value * 60;
        } else if(i==6){
            Tea = Tea + grocery_elements[i].value * 15;
        }

let total_snack = document.getElementById("total-grocery");

        total_snack.value = Atta + Paasta + Rice + Oil + Sugar + Daal + Tea;

        document.getElementById("grocery-tax").value = total_snack.value * 118 / 100;
    });
}


// Beauty & Hygine total and tax

let Beauty_elements = document.getElementsByClassName("Beauty");

let Soap = 0;
let Shampoo = 0;
let Lotion = 0;
let Creame = 0;
let Foam = 0;
let Mask = 0;
let Sanitizer =0;

for (let i = 0; i < Beauty_elements.length; i++) {
    Beauty_elements[i].addEventListener("change", function(){

        if(i==0){
            Soap = Soap + Beauty_elements[i].value * 36;
        } else if(i==1){
            Shampoo = Shampoo + Beauty_elements[i].value * 356;
        } else if(i==2){
            Lotion = Lotion + Beauty_elements[i].value * 260;
        } else if(i==3){
            Creame = Creame + Beauty_elements[i].value * 130;
        } else if(i==4){
            Foam = Foam + Beauty_elements[i].value * 87;
         } else if(i==5){
            Mask = Mask + Beauty_elements[i].value * 60;
        } else if(i==6){
            Sanitizer = Sanitizer + Beauty_elements[i].value * 15;
        }
let total_snack = document.getElementById("total-Beauty");

        total_snack.value = Soap + Shampoo + Lotion + Creame + Foam + Mask + Sanitizer;

        document.getElementById("Beauty-tax").value = total_snack.value * 118 / 100;
    });
}


document.getElementById("totalBill").addEventListener("click", function(){ 
    
let c_name = document.getElementById("c_name");
let c_no = document.getElementById("c_no");
let b_no = document.getElementById("b_no");

document.getElementById("c_value").textContent = c_name.value;
document.getElementById("p_value").textContent = c_no.value;
document.getElementById("b_value").textContent = b_no.value;

// Clear the table before adding new rows
document.getElementById("billing_prod").innerHTML = "";

// Iterate through the products and append each one to the table
products.forEach(ele => {
    // Create a new row element
    const row = document.createElement("tr");

    // Create and append title cell
    const titleCell = document.createElement("td");
    titleCell.textContent = ele.title;
    row.appendChild(titleCell);

    // Create and append quantity cell
    const qtyCell = document.createElement("td");
    qtyCell.textContent = ele.qty;
    row.appendChild(qtyCell);

    // Create and append price cell
    const priceCell = document.createElement("td");
    priceCell.textContent = ele.price;
    row.appendChild(priceCell);

    // Append the row to the table body
    document.getElementById("billing_prod").appendChild(row);
});

})

console.log(products)