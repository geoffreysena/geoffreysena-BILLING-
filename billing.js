function billingFunction() {

    // Check of the condition of the checkbox
  
    if (document.getElementById('same').checked) {
  
      // values of fields "billingName" & "billingZip" get values of fields "shippingName" and "shippingZip"
  
      document.getElementById('billingName').value = document.getElementById('shippingName').value;
      document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
  
    }
  
    // if checkbox unchecked then values of fields are erased
    else {
      document.getElementById('billingName').value = null;
      document.getElementById('billingZip').value = null;
    }
  
  }
  
  // END OF HOMEWORK