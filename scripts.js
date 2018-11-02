function calTips() {
        let totalBill = document.getElementById('price').value
        let partySize = document.getElementById('numPeople').value
        let tipAmount = document.getElementById('tipAmt').value

        if (totalBill ==="" || tipAmount == 0) {
            alert("Please enter an amount")
            return
        }
         
        if (partySize === "" || partySize <= 1) {
            partySize = 1
            document.getElementById('perSe').style.display="none"
        }else {
            document.getElementById('perSe').style.display="block"
        }
         
        let total = (totalBill * tipAmount) /partySize

        total = Math.round(total * 100) / 100
        total = total.toFixed(2)

        document.getElementById('display').style.display="block"
        document.getElementById('chkAmt').innerHTML= total

    }
    document.getElementById('display').style.display="none"
    document.getElementById('perSe').style.display="none"


    document.getElementById('calculate').onclick = function() {
        calTips();
    }; 
 
 
 
 
 
 

