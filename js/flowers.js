$(document).ready(function() {
    $('#flower-truck').load('/current.html #flower-storage', function(responseTxt, statusTxt, jqXHR) {
      if (statusTxt == 'success') {
        alert('flowers successfully loaded!')
          }
      if (statusTxt == 'error') {
        alert('Error: ' + jqXHR.status + ' ' + jqXHR.statusTxt)
      }
    })
})

