document.addEventListener('DOMContentLoaded', function() {
        var iframe = document.getElementById('qrz-iframe');
        var loader = document.getElementById('iframe-loader');
        iframe.onload = function() {
          loader.style.transition = 'opacity 0.5s';
          loader.style.opacity = '0';
          setTimeout(function() {
            loader.style.display = 'none';
            iframe.style.transition = 'opacity 0.5s';
            iframe.style.opacity = '1';
          }, 200);
        };
        // Ensure iframe is initially hidden
        iframe.style.opacity = '0';
      });