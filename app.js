import data from "./data.json" with { type: "json" };;
const faqSection = document.querySelector(".faq-section");

data.map((e) => {
  faqSection.innerHTML += `
           <article class="">
          <div class="details" >
            <summary class="question">
             ${e.question}
<figure class="icon-container">
             <img class="plus-minus-icon" src="./assets/images/icon-plus.svg" alt="" />
</figure>
            </summary>
            <div class="faq-content">
              <p class="answer">
               ${e.answer}
              </p>
            </div>
          </div>
        </article>
   `;
});


const details = document.querySelectorAll(".details")

details.forEach((detail, idx) => {
   const content = document.querySelectorAll(".faq-content")
   const iconContainer = document.querySelectorAll(".icon-container")

if(content[0].clientHeight === 0){
   content[0].style.height = content[0].scrollHeight + 'px';
   content[0].style.overflow = "visible"
   iconContainer[0].innerHTML = `<img class="plus-minus-icon" src="./assets/images/icon-minus.svg" alt="" />`
}

   detail.addEventListener("click", () => {
      if(content[idx].clientHeight === 0){
         content[idx].style.height = content[idx].scrollHeight + 'px';
         content[idx].style.overflow = "visible"
         iconContainer[idx].innerHTML = `<img class="plus-minus-icon" src="./assets/images/icon-minus.svg" alt="" />`
      }else{
         content[idx].style.height = '0';
         content[idx].style.overflow = "hidden"
         iconContainer[idx].innerHTML = `<img class="plus-minus-icon" src="./assets/images/icon-plus.svg" alt="" />`
      }
   })
})