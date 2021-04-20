window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  function taby(a, b, c) {
    let tab = document.querySelectorAll(a), //class with tabs
      info = document.querySelector(b), //block with tabs
      tabContent = document.querySelectorAll(c) //tab content

    function hideTabContetn(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show')
        tabContent[i].classList.add('hide')
      }
    }

    hideTabContetn(1)

    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide')
        tabContent[b].classList.add('show')
      }
    }

    info.addEventListener('click', (event) => {
      let target = event.target
      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            hideTabContetn(0)
            showTabContent(i)
            break
          }
        }
      }
    })
  }
  taby('.info-header-tab', '.info-header', '.info-tabcontent')
})
