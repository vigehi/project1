const btn = document.querySelector('#show');
const btnclose = document.querySelector('#hide');
const showMoreBtn = document.querySelector('#showmore');
const featuredSpeakersSect = document.querySelector('#dyna-bottom-section');

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
    description: 'Professor Department of Mathematics and Science',
    notes: 'Great teacher of Mathematics and Physics and great counsellor Spiritual matters',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Beatrice Muzalika Adegu',
    description: 'The Managing Director, Kamagambo Adventist High School',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/ans.jpeg',
  },
  {
    name: 'Enock Omollo Adegu',
    description: 'Information Technology, Audio visuals manager',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/adg.jpeg',
  },
  {
    name: 'Moses Martin Adegu',
    description: 'Professor, Department of Mathematics and Statistics',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Bathwell Ogore Adegu',
    description: 'Head of School, Department of Mathematics and Chemical Sciences',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Richard Adeli Adegu',
    description: 'Chief Engineer, Wellhead Projects at KenGen Kenya',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/mose.jpg',
  },
  {
    name: 'Boaz Bosire Adegu',
    description: 'Chief Engineer, Masinga Projects at KenGen Kenya',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/bb.jpeg',
  },
  {
    name: 'Grace Kayinzira Adegu',
    description: 'Department of Mathemmatics and Biological sciences',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image: './images/speakers/index.jpeg',
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
