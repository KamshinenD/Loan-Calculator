//   listen for submit
 document.getElementById('form').addEventListener('submit',computeResults)

 function computeResults(e){
    e.preventDefault()
    const loanAmount = document.getElementById('input-amount').value
    const interestRate = document.getElementById('input-interest-rate').value
    const duration = document.getElementById('duration').value

      //calculate
    const principal = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interestRate)/100/12;
    const calculatedPayments = parseFloat(duration)*12;

    //calculate monthly   
    const x = Math.pow(1+ calculateInterest, calculatedPayments);
    const monthly = (principal * x * calculateInterest)/(x-1);
    const monthlyPayment = monthly.toLocaleString("en-US");

    //compute interest
    const totalInterest = (monthly * calculatedPayments - principal).toLocaleString("en-US")

    //Compute total payment

    const totalPayment =(monthly * calculatedPayments).toLocaleString("en-US");

    document.getElementById('monthlyPayment').innerHTML = "₦" +" " + monthlyPayment;
    document.getElementById('totalInterest').innerHTML = "₦" +" " + totalInterest;
    document.getElementById('totalPayment').innerHTML = "₦" +" " + totalPayment;

    console.log(monthlyPayment, totalInterest, totalPayment)
 }