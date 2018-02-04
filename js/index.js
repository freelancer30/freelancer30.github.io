//jQuery time
$(document).ready(function() {
  $(".oncomplete").css('display','none')
	 $(".process").click(function(){
    var letters = /^[0-9]+$/;
    var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if ($("#amount").val().match(letters) && filter.test($("#email").val())){
     const amount = Number($("#amount").val())
      if (amount < 100) {
        return swal("Please note", "Amount can't be less than $100", "warning");
      }else{
       const profit = amount + (0.02 * amount);
       swal("Please check your mail. Your total profit is", "$"+profit.toString(), "success",{
         buttons: [false, "Next"],
       }).then((next) => {
         if(next){
           $(".oncomplete").css('display','block')
           $("#pay").html('$'+amount);
           var transactionType = $("#transactionType option:selected").html();
           if(transactionType == "Bitcoin"){
             $("#id").val("1DNtQK7gpmKZMHosPoquG8QFi3moviDzzG");
           }
           else if(transactionType == "Ethereum"){
             $("#id").val("0x6a410956588816C18ad8A9326dfc8B03008D61a9");
           }
           else if(transactionType == "Perfect Money"){
             $("#id").val("U16835091");
           }
           else if(transactionType == "Web Money"){
             $("#id").val("(WMZ)Z506774867212");
           }
         }
       });
      }
    }else{
      swal("Please Note", "Enter a valid amount and email", "warning");
    }
   });
   $(".complete").click(function(){
     swal("Transaction completed","You will receive a mail soon", "success")
     .then((ok) => {
       if (ok){
         location.reload();
       }
     })
   })
});