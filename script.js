const text = "FULL STACK DEVELOPER |";
    let index = 0;
    let forward = true; 
    const outputEl = document.getElementById("output");

    function typeWriter() {
      if (forward) {
        if (index <= text.length) {
          outputEl.textContent = text.substring(0, index);
          index++;
          setTimeout(typeWriter, 120);
        } else {
          forward = false;
          setTimeout(typeWriter, 1000); 
        }
      } else {
        if (index >= 0) {
          outputEl.textContent = text.substring(0, index);
          index--;
          setTimeout(typeWriter, 80);
        } else {
          forward = true;
          setTimeout(typeWriter, 500);
        }
      }
    }

    window.onload = typeWriter;