const checkList = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked; 

function handleClick (e) {
    
    let inBetween = false;
    //  Check to make sure shift key is pressed and the user is checking the item rather than unchecking it
    if (e.shiftKey && this.checked) {
        // Loop through each item and add flag
        checkList.forEach(item => {                
            if (item === this || item === lastChecked) {
                inBetween = !inBetween;
            }
            
            if (inBetween) {
                item.checked = true;
            }
        });
    }
    lastChecked = this;
};

checkList.forEach(item => item.addEventListener('click', handleClick));