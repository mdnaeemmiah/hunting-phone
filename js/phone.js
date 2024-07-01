const loadPhone = async (searchText,isShowall) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    //  console.log(phones);
    displayphones(phones,isShowall)
}

const displayphones = (phones,isShowall) => {
    // console.log(phones)
    const phoneConainer = document.getElementById('phone-container');
    // clear data
    phoneConainer.textContent ='';

  //  more than more
  const showall = document.getElementById('show-all-conatiner')
  if(phones.length>12 && !isShowall){
    showall.classList.remove('hidden')
  }else{
    showall.classList.add('hidden');
  }

console.log('is show all',isShowall);

if(!isShowall){
  phones = phones.slice(0,12);
}






    phones.forEach(phone => {
        // console.log(phone)

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100  shadow-xl`;
        phoneCard.innerHTML = `
            <figure>
                      <img
                        src="${phone.image}" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p></p>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetails('${phone.slug}');
                       my_modal_5.showModal()"class="btn btn-primary">Show details </button>
                      </div>
                    </div>
        `;

        phoneConainer.appendChild(phoneCard);
});


// hide loading 

loadingTogle(false);

}

// 
const handleShowDetails = async (id) =>{
  //  console.log('naeem',id)
   const res = await fetch(' https://openapi.programming-hero.com/api/phone/apple_${id}');
   const data = await  res.json();

   const phone = data.data;
  
   showPhoneDetails(phone);

}

const  showPhoneDetails = (phone)=>{
  console.log(phone);

const phoneName = document.getElementById('phone-name');
  phoneName.innerText=phone.name;
   
  const showDetailsConainer = document.getElementById('show details container');
  showDetailsConainer.innerHTML= `
   <img src="${phone.image}" alt="">
  `;

   my_modal_5.showModal()
}





// handle search button 
const handleSEarch =(isShowall)=>{
    const searchField =document.getElementById('search-field');
    loadingTogle(true);
    const  searchText= searchField.value;
    console.log(searchText)
    loadPhone(searchText);
}


const anotherSearch =()=>{
  const anothers = document.getElementById('another');
 loadingTogle(true);
  const searchanother =anothers.value;
  console.log(searchanother);
  loadPhone(searchanother);

}



const loadingTogle = (isLoading)=>{
  const toggleLoading = document.getElementById('loding-spiner')
  if(isLoading){
     (toggleLoading.classList.remove('hidden'))

  }
 else{
  (toggleLoading.classList.add('hidden'))
 }
}


// handle show all
const handleShowAll = () =>{
  handleSEarch(true);
}




// loadPhone()

















// const loadPhone =async()=>{
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     const phones = data.data;
//     showData(phones);
// }

// const showData= phone=>{
//     // console.log(phone);
//     const phonesContaimer = document.getElementById('phone-container');
//     phone.forEach(mobile=>{
//         console.log(mobile);

//         const div = document.createElement('div')
//         div.classList = `card bg-gray-100 w-96 shadow-xl`;
//         div.innerHTML=`
//         <figure>
//                       <img
//                         src="${phone.image}" />
//                     </figure>
//                     <div class="card-body">
//                       <h2 class="card-title">${phone.phone_name}</h2>
//                       <p>${phone.slug}</p>                       
                   
                     
//                       </div>
//                     </div>
//         `;
//         phonesContaimer.appendChild(div);
//     })

// }

// loadPhone();



