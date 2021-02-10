var $studentType = document.querySelectorAll('.studentType')
var $eventBlock = document.querySelector('.events')
for (var i = 0; i < $studentType.length; i++) {
   $studentType[i].addEventListener('click', findSelected)
}

function findSelected() {
   for (var j = 0; j < $studentType.length; j++) {
      if ($studentType[j].checked) {
         addEventSection($studentType[j].value)
      }
   }
}

function addEventSection(type) {
   var fresherHtml = `<div class="eventsSpecified">
            <p>Please Select The Events</p>
            <input type="checkbox" id="Kyorugi" name="Kyorugi" value="Kyorugi" required>
            <label for="Kyorugi">Kyorugi</label><br>
         </div>`

   var otherHtml = ` <div class="eventsSpecified">
            <p>Please Select The Events</p>
            <input type="checkbox" id="Kyorugi" name="Kyorugi" value="Kyorugi" required>
            <label for="Kyorugi">Kyorugi</label><br>
            <input type="checkbox" id="Poomsae" name="Poomsae" value="Poomsae">
            <label for="Poomsae">Poomsae</label><br>
         </div>`

   if (type === 'Fresher') {
      $eventBlock.innerHTML = fresherHtml
   }
   else {
      $eventBlock.innerHTML = otherHtml
   }
}