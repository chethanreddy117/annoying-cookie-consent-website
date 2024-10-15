const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')
const total=document.querySelector('.section-container')

setTimeout(function(){
    modal.style.display = 'inline'
    total.classList.toggle("container2") 
}, 3500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
    total.classList.remove("container2") 
}) 

declineBtn.addEventListener('mouseenter', function() {
    // Remove any movement classes before applying a new one
    declineBtn.classList.remove('move-right', 'move-left', 'move-up', 'move-down');

    // Trigger a reflow to reset the animation state
    void declineBtn.offsetWidth; // This forces a reflow

    const directions = ['move-right', 'move-left', 'move-up', 'move-down']; // Possible move directions
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]; // Randomly select one direction
    
    // Apply the randomly selected movement class
    declineBtn.classList.add(randomDirection);
});

// Reset the button position when the mouse leaves
declineBtn.addEventListener('mouseleave', function() {
    declineBtn.classList.remove('move-right', 'move-left', 'move-up', 'move-down');
});
 
// declineBtn.addEventListener('mouseenter', function(){
//     const directions = ['move-right', 'move-left', 'move-up', 'move-down']; // Possible move directions
//     const randomDirection = directions[Math.floor(Math.random() * directions.length)]; 
//     declineBtn.classList.remove('move-right', 'move-left', 'move-up', 'move-down');
//     declineBtn.classList.add(randomDirection);
//     // modalChoiceBtns.classList.toggle('modal-btns-reverse')
     
// }) 

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 3000)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2 style="padding:10px" >Thanks <span class="modal-display-name">${fullName}</span>, you fool! </h2>
      
        <p style="padding:10px">We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 7000)
  
}) 
