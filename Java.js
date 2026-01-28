let currentTab = 0; 
showTab(currentTab);

function showTab(n) {
  let tabs = document.getElementsByClassName("tab");
  tabs[n].style.display = "block";

  // Döljer "Föregående" på första sidan
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  // Ändra "Nästa" till "Skicka" på sista sidan
  if (n == (tabs.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Skicka";
  } else {
    document.getElementById("nextBtn").innerHTML = "Nästa";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  let tabs = document.getElementsByClassName("tab");

  // Validera steg innan du går vidare
  if (n == 1 && !validateForm()) return false;

  tabs[currentTab].style.display = "none";
  currentTab = currentTab + n;

  // Skicka formulär när sista sidan är klar
  if (currentTab >= tabs.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  let valid = true;
  let inputs = document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputs[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let steps = document.getElementsByClassName("step");
  for (let i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" active", "");
  }
  steps[n].className += " active";
}

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

if (searchForm) {
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query !== '') {
      localStorage.setItem('searchQuery', query); // 🔸 spara sökningen
      window.location.href = 'search.html'; // 🔸 gå till söksidan
    }
  });
}

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


