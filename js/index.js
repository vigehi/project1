const btn = document.querySelector('#show');
const btnclose = document.querySelector('#hide');
const showMoreBtn = document.querySelector('#showmore');
const featuredSpeakersSect = document.querySelector('#dyna-bottom-section');


// To open the menu bar
function display() {
  document.getElementById('show').style.display = 'none';
  document.getElementById('hide').style.display = 'flex';
}

// To close the menu bar
function close() {
  document.getElementById('show').style.display = 'flex';
  document.getElementById('hide').style.display = 'none';
}

function toggle() {
  const button = document.getElementById('showmore');
  if (button.innerHTML === 'LESS') {
    button.innerHTML = 'MORE';
  } else {
    button.innerHTML = 'LESS';
  }
}

btn.addEventListener('click', display);
btnclose.addEventListener('click', close);
showMoreBtn.addEventListener('click', toggle);



const featuredSpeakers = [
  {
    name: 'Fredrick Kisa Adegu',
    description: 'Professor at Havard College of Tourism',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Beatrice Muzalika Adegu',
    description: 'The Managing Director, Travelport Services',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Enock Omollo Adegu',
    description: 'Independent Travel Consultant',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Moses Martin Adegu',
    description: 'The CEO, Kenya Airways Company',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Bathwell Ogore Adegu',
    description: 'Minister of Tourism, Seychelles',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Richard Adeli Adegu',
    description: 'President, Travel for Exploration Foundation',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Boaz Bosire Adegu',
    description: 'Professor at Havard College of Tourism',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Grace Kayinzira Adegu',
    description: 'The Managing Director, Travelport Services',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
];

featuredSpeakers.forEach((item) => {
  const content = `<div class="col-md-6 top-feature">
                      <div class="top-feature-1">
                        <img src="${item.image}">
                      </div>
                      <div class="top-feature-2">
                        <h4>${item.name}</h4>
                        <h6><em>${item.description}</em></h6>
                        <hr>
                        <p>${item.notes}</p>
                      </div>
                    </div>`;
  featuredSpeakersSect.innerHTML += content;
});
