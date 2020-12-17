document.addEventListener('DOMContentLoaded', () => {
    console.log("👋 HELLO!")

    // get our user submission from form
    let submitButton = document.querySelector("input[type=submit]")

    submitButton.addEventListener("click", (e) => {
        e.preventDefault()

        let res = document.getElementById("submitText").value

        // take user submited text and set as innerText to div id feedback
        document.getElementById("feedback").innerText = res
    })

   

})
   
