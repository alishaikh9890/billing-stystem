// snacks total and tax

let snack_nutella_elements = document.getElementsByClassName("snacks");

let nutella = 0;
let noodles = 0;
let lays = 0;
let oreo = 0;
let chocolate = 0;
let dairy = 0;
let numkeen =0;




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

let total_snack = document.getElementById("total-snack");

        total_snack.value = nutella*150 + noodles*10 + lays*10 + oreo*20 + chocolate*50 + dairy*60 + numkeen*15;

        document.getElementById("snacks-tax").value = total_snack.value * 118 / 100;

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
    });
}




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
            Atta = Atta + 1
        } else if(i==1){
            Paasta = Paasta + 1
        } else if(i==2){
            Rice = Rice + 1
        } else if(i==3){
            Oil = Oil + 1
        } else if(i==4){
            Sugar = Sugar + 1
         } else if(i==5){
            Daal = Daal + 1
        } else if(i==6){
            Tea = Tea + 1
        }

let total_snack = document.getElementById("total-grocery");

        total_snack.value = Atta * 60 + Paasta * 85 + Rice * 77 + Oil * 104 + Sugar * 52 + Daal * 60 + Tea * 15;

        document.getElementById("grocery-tax").value = total_snack.value * 118 / 100;

        products2 = [
            {
                title: "Aashirwaad Atta (1kg)",
                qty: Atta,
                price: Atta*150
            },
            {
                title: "Paasta (1kg)",
                qty: Paasta,
                price: Paasta*10
            },
            {
                title: "Basmathi Rice (1kg)",
                qty: Rice,
                price: Rice*10
            },
            {
                title: "Sunflower Oil (1ltr)",
                qty: Oil,
                price: Oil*20
            },
            {
                title: "Refined Sugar (1kg)",
                qty: Sugar,
                price: Sugar*50
            },
            {
                title: "Daal (1kg)",
                qty: Daal,
                price: Daal*60
            },
            {
                title: "Tea Powder (1kg))",
                qty: Tea,
                price: Tea*15
            }
        ]
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
            Soap = Soap + 1;
        } else if(i==1){
            Shampoo = Shampoo + 1;
        } else if(i==2){
            Lotion = Lotion + 1;
        } else if(i==3){
            Creame = Creame + 1;
        } else if(i==4){
            Foam = Foam + 1;
         } else if(i==5){
            Mask = Mask + 1;
        } else if(i==6){
            Sanitizer = Sanitizer + 1;
        }
        let total_snack = document.getElementById("total-Beauty");

        total_snack.value = Soap * 36 + Shampoo * 356 + Lotion * 260 + Creame * 130 + Foam * 87 + Mask * 60 + Sanitizer * 15;

        document.getElementById("Beauty-tax").value = total_snack.value * 118 / 100;

        products3 = [
            {
                title: "Bathing Soap",
                qty: Soap,
                price: Soap*150
            },
            {
                title: "Shampoo (1 ltr)",
                qty: Shampoo,
                price: Shampoo*10
            },
            {
                title: "Body Lotion (1 ltr)",
                qty: Lotion,
                price: Lotion*10
            },
            {
                title: "Face Creame",
                qty: Creame,
                price: Creame*20
            },
            {
                title: "Shaving Foam",
                qty: Foam,
                price: Foam*50
            },
            {
                title: "Face Mask (1peace)",
                qty: Mask,
                price: Mask*60
            },
            {
                title: "Hand Sanitizer (50ml)",
                qty: Sanitizer,
                price: Sanitizer*15
            }
        ]


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
document.getElementById("billing_prod");

// Iterate through the products and append each one to the table
products.forEach(ele => {
    if(ele.qty == 0) {

    }else {

  
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

}
});


products2.forEach(ele => {
    if(ele.qty == 0) {

    }else {

  
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

}
});

products3.forEach(ele => {
    if(ele.qty == 0) {

    }else {

  
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

}
});



})

