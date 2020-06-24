function toggleDropDown() {
    var ul = document.querySelector('header>div:nth-child(2)');
    if (ul.classList.contains('hidden')) {
      ul.classList.remove('hidden');
      ul.classList.add('block')
    } else {
      ul.classList.remove('block');
      ul.classList.add('hidden')
    }
  }
