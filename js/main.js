const template1 = '<div class="col"><a href="';
const template2 = '">';
const template3 = '</a></div>';

const issue = 'winter18';
const path= '/issues/' + issue + '/' + issue + 'html';

const htmlTemplate1 = '<!doctype html><html class="no-js" lang=""><head><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><title>';
const htmlTemplate2 = '</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="manifest" href="site.webmanifest"><link rel="favicon" href="icon.png"><link rel="stylesheet" href="/css/main.css"></head><body><div class="index-container"><div class="whitespace"><div class="row"><h-ws>Lorem Ipsum</h-ws> </div> </div> <div class="row"> <div class="col-1"></div> <div class="col-4"> <img src="/img/heading.gif" alt="heading"> </div> <div class="col" style="text-align: center;"> <a href="about.html">about</a> </div> <div class="col" style="text-align: center;"> <a href="current.html">current</a> </div> <div class="col" style="text-align: center;"> <a href="past.html">past</a> </div> <div class="col" style="text-align: center;"> <a href="submit.html">submit</a> </div> <div class="col" style="text-align: center;"> <a href="contact.html">contact</a> </div> <div class="col-1"></div> </div>';
const htmlTemplate3 = '<div class="row"><div class="col-1"></div><div class="col"><p>';
const htmlTemplate4 = '</p></div></div>';
const htmlTemplate5 = '<!-- go back button for testing purpose! --> <div class="row"> <div class="col-4"></div> <div class="col-4"> <a href="index.html">secret go back button!</a> </div> <div class="col-4"></div> </div> </div> <script src="js/vendor/modernizr-3.6.0.min.js"></script> <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script><script src="js/plugins.js"></script> <script src="js/main.js"></script><!-- Google Analytics: change UA-XXXXX-Y to be your site"s ID. --> <script> window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date; ga("create", "xx-xxxxxxxxx-x", "auto"); ga("send", "pageview") </script> <script src="https://www.google-analytics.com/analytics.js" async defer></script> <script src="//code.jquery.com/jquery-1.11.3.min.js"></script> </body></html>';

var clickTitle = new Array(23);

$(document).ready(function() {
  $.get('/issues/' + issue + '/' + issue + '.txt', function(data) {
    var lines = data.split('\n');
    /*
    for (j = 0; j < lines.length; j++) {
      
    }
    */     
    for (i = 0; i < lines.length; i++) {
      clickTitle[i] = lines[i];
      clickTitle[i] = clickTitle[i].replace(/\s+/g, '');
      $('#reader-container').append(template1 + path + template2 + lines[i] + template3);
    }
  })
})

/*
$(document).ready(function() {
  $.ajax({
    url: '/issues/winter18',
    success: function(data) {
      $(data).find('a.contains(.txt)').each(function() {
        var lines = $(this).split('\n');
          for (i = 0; i < lines.length; i++) {
            $('#reader-container').append(template1 + lines[i] + template2);
          }
      })
    }
  })
})
*/


//dynamically generate the poem page onclick
