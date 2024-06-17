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
            nutella = nutella + snack_nutella_elements[i].value * 150;
        } else if(i==1){
            noodles = noodles + snack_nutella_elements[i].value * 10;
        } else if(i==2){
            lays = lays + snack_nutella_elements[i].value * 10;
        } else if(i==3){
            oreo = oreo + snack_nutella_elements[i].value * 20;
        } else if(i==4){
            chocolate = chocolate + snack_nutella_elements[i].value * 50;
         } else if(i==5){
            dairy = dairy + snack_nutella_elements[i].value * 60;
        } else if(i==6){
            numkeen = numkeen + snack_nutella_elements[i].value * 15;
        }
let total_snack = document.getElementById("total-snack");

        total_snack.value = nutella + noodles + lays + oreo + chocolate + dairy + numkeen;

        document.getElementById("snacks-tax").value = total_snack.value * 118 / 100;
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


let c_name = document.getElementById("c-name")
let c_no = document.getElementById("c-no")
let b_no = document.getElementById("b-no")

document.getElementById("bill").innerHTML = `
<p class="m-0">WELCOME TO SUPER MARKET</p>
<p class="m-0">Phone No. 739275410</p>
<div class="col-12 text-start">
    <p>Bill No. : ${b_no}</p>
    <p>Customer Name : ${c_name}</p>
    <p>Phone No. : ${c_no}</p>
    <p>****************************</p>
    <table class="w-100">
        <tbody>
            <tr>
                <td>Product</td>
                <td>Qty</td>
                <td>Price</td>
            </tr>
        </tbody>
    </table>
    <p>****************************</p>
    <table class="w-100">
        <tbody>
            <tr>
                <td>Product</td>
                <td>Qty</td>
                <td>Price</td>
            </tr>
        </tbody>
    </table>
</div>
`;

