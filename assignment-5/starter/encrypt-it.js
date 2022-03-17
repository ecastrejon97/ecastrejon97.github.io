/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    console.log("Window loaded!");

    document.querySelector('#encrypt-it').onclick = encrypt;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function encrypt() {
    const plaintext = document.querySelector("#input-text").value;
    const ciphertext =  cipher(plaintext);

    document.querySelector('#result').textContent = ciphertext;
  }

  function cipher(plaintext) {
    let ciphertext = "";
    for(let i = 0; i < plaintext.length; ++i) {
      
      ciphertext += shift(plaintext[i], 1);
    }

    return ciphertext;
  }

  function shift(c, k) {
    if(isUpper(c)) {
      return String.fromCharCode(((c.charCodeAt(0) - 'A'.charCodeAt(0) + k) % 26) + 'A'.charCodeAt(0));
    } else if(isLower(c)) {
      return String.fromCharCode(((c.charCodeAt(0) - 'a'.charCodeAt(0) + k) % 26) + 'a'.charCodeAt(0));
    } else {
      return c;
    }
  }

  function isUpper(c) {
    return !/[a-z]/.test(c) && /[A-Z]/.test(c);
  }
  
  function isLower(c) {
    return /[a-z]/.test(c) && !/[A-Z]/.test(c);

  }
})();
