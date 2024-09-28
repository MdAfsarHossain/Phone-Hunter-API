// Load Phone data from the API
const loadPhoneData = async (searchItem, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchItem}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones, isShowAll);
}



// Display all Phone data
const displayPhone = (phones, isShowAll) => {
    // console.log(phones);

    const cardsContainer = document.getElementById('cards-container');
    const seeAll = document.getElementById('see-all-container');

    // See All cards
    if(phones.length > 10 && !isShowAll) {
        seeAll.classList.remove('hidden');
    } else {
        seeAll.classList.add('hidden');
    }

    // Clear previous cards`
    cardsContainer.textContent = '';

    // Display only 9 phones cards
    if(!isShowAll) {
        phones = phones.slice(0, 9);
    }

    phones.forEach(phone => {
        const div = document.createElement('div');
        
        div.innerHTML = `
                  <div
            class="card bg-base-100 shadow-xl px-5 py-5 border-t-2 hover:scale-105"
          >
            <figure class="px-10 py-5 pt-10 bg-[#0D6EFD0D] rounded-xl">
              <img
                src="${phone.image}"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="font-bold card-title">${phone.phone_name}</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered
              </p>
              <p class="text-xl"><span class="font-bold">Brand:</span> ${phone.brand}</p>
              <div class="card-actions mt-2">
                <button
                onclick="handleShowPhoneDetails('${phone.slug}')"
                  class="btn rounded bg-[#0D6EFD] text-white border-2 border-[#0D6EFD] hover:bg-transparent hover:border-[#0D6EFD] hover:text-[#0D6EFD]"
                >
                  Show Details
                </button>
              </div>
            </div>
          </div>
        `;

        cardsContainer.appendChild(div);
    });

    // Hide Loading Spinner
    toggleLoadingSpinner(false);
}


// Handle Phone Details 
const handleShowPhoneDetails = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    // console.log(phone);
    showPhoneDetaile(phone);
}


// Show the phone details modal 
const showPhoneDetaile = (phone) => {
    // console.log(phone);

    const showDetailContainer = document.getElementById('show-details-container');

    showDetailContainer.innerHTML = `
    <figure class="flex flex-col justify-center items-center  px-0 py-5 pt-5 bg-[#0D6EFD0D] rounded-xl">
        <img
        src="${phone.image}"
        alt="Shoes"
        class="rounded-xl"
        />
    </figure>
    <div class="mt-2">
        <h2 class="font-bold card-title">${phone.name}</h2>
        <p class="text-sm">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <p class="text-sm"><span class="font-bold">Storage : </span> ${phone.mainFeatures.storage}</p>
        <p class="text-sm"><span class="font-bold">Display Size : </span> ${phone.mainFeatures.displaySize}</p>
        <p class="text-sm"><span class="font-bold">Chipset : </span> ${phone.mainFeatures.chipSet}</p>
        <p class="text-sm"><span class="font-bold">Memory : </span> ${phone.mainFeatures.memory}</p>
        <p class="text-sm"><span class="font-bold">Slug : </span> ${phone.slug}</p>
        <p class="text-sm"><span class="font-bold">Release Date : </span> ${phone.releaseDate}</p>
        <p class="text-sm"><span class="font-bold">Brand : </span> ${phone.brand}</p>
        <p class="text-sm"><span class="font-bold">GPS : </span> ${phone.others?.GPS ? phone.others.GPS : "No GPS Available in this phone." }</p>
        
        <div class="modal-action">
            <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button
                class="btn rounded bg-[#DC3545] text-white border-2 border-[#DC3545] hover:bg-transparent hover:border-[#DC3545] hover:text-[#DC3545]"
            >
                Close
            </button>
            </form>
        </div>
    </div>
    
    `
    // </div>




    phone_details_modal.showModal();
}


// Phone Search
const searchPhone = (isShowAll) => {
    toggleLoadingSpinner(true)
    const searchInput = document.getElementById('search-input');
    const searchItem = searchInput.value;
    // console.log(searchItem);
    loadPhoneData(searchItem, isShowAll);
}


// See all Phones data
const seeAllPhone = () => {
    searchPhone(true);
}

// Toggle Loading Spinner 
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    
    if(isLoading) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}



// Initial load of Phone data with 'Apple' as search query
loadPhoneData('13');


/**
 * search-filed
 * loading-spinner
 * see-all
 * cards-container
 * 
 */

