'use strict';



//---------------------------------------------------------------------------------------------
// original ---

//   const textAnimation = document.querySelectorAll('.textAnimation');
  
//   for (let i = 0; i < textAnimation.length; i++) {
//     const animationTarget = textAnimation[i];
//     const texts = animationTarget.textContent;
//     animationTarget.textContent = '';
    
//     for (let j = 0; j < texts.length; j++) {
//       if(texts[j] === ' ') {
//         animationTarget.innerHTML += ' ';
//       } else {
//         animationTarget.innerHTML += 
//         '<span style="animation-delay: ' + ((j * .1) + .3) + 's;">' + texts[j] + '</span>';
//       }
//     }
//     console.log(animationTarget);
//   }
  
//   window.addEventListener('click', () => {
//     const span = document.querySelectorAll('span');
//     for (let k = 0; k < span.length; k++) {
//       span[k].classList.toggle('green');
//     }
//   });

//   // window.addEventListener('click', () => {
//   //   const span = document.querySelectorAll('span');
//   //   for (let k = 0; k < span.length; k++) {
//   //     span[k].classList.add('red');
//   //   }
//   // });


//---------------------------------------------------------------------------------------------




//---------------------------------------------------------------------------------------------
// originals

const $body = document.querySelector('body');
  const unit = document.querySelector('.unit');
    const $treigger = document.querySelector('.btn-circle');
      const action = document.getElementById('js-action');
        const alertText = document.querySelector('.alert-text');
      const alertTextSystem = document.querySelector('.alertText-system');
    const alertTextBroken = document.querySelector('.alertText-broken');
  const alertSkullIcon = document.querySelectorAll('.alert-skull-icon');
const countUpNumber = document.querySelector('.countDown-number');

$treigger.addEventListener('click', function (event) {
  event.preventDefault();
    setTimeout(() => {
      unit.classList.add('js_displayNone');
      $body.classList.add('js_bgColor');
      alertText.classList.add('js_displayBlock');
        let count = 4;
        const timer = setInterval(() => {
          countUpNumber.textContent = count;
          count--;
          setTimeout(() => {
            clearInterval(timer)
          }, 5000); 
        }, 1000);
    }, 1000);
  
  setTimeout(() => {
    action.classList.add('js_displayBlock');
    animationAction();
      setTimeout(() => {
        alertTextSystem.classList.add('js_displayBlock'); 
          alertTextBroken.textContent = '! 破壊されました！'; 
            countUpNumber.textContent = ''; 
              action.classList.add('js_flash');
          setTimeout(() => {
            $body.classList.add('js_bgColorFlash');
              alertText.classList.add('fontWeightBold');
                alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                  alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                    alertSkullIcon.forEach(element => {
                      element.classList.add('red');
                    });
            setTimeout(() => {
              $body.classList.remove('js_bgColorFlash');
                alertText.classList.remove('fontWeightBold');
                  alertTextSystem.classList.remove('red', 'fontLarge', 'fontWeightBold');
                    alertTextBroken.classList.remove('red', 'fontLarge', 'fontWeightBold');
                      alertSkullIcon.forEach(element => {
                        element.classList.remove('red');
                      });
              setTimeout(() => {
                $body.classList.add('js_bgColorFlash');
                  alertText.classList.add('fontWeightBold');
                    alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                      alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                        alertSkullIcon.forEach(element => {
                          element.classList.add('red');
                        });
                setTimeout(() => {
                  $body.classList.remove('js_bgColorFlash');
                    alertText.classList.remove('fontWeightBold');
                      alertTextSystem.classList.remove('red', 'fontWeightBold');
                    alertTextBroken.classList.remove('red', 'fontWeightBold');
                  alertSkullIcon.forEach(element => {
                    element.classList.remove('red');
                    element.classList.add('animationDone');
                  });
                }, 4000);
              }, 3000);
            }, 3000);
        }, 4000);
      }, 4000); //4000
  }, 6000); //6000
});

function animationAction() {
  const textAnimation = document.querySelectorAll('.textAnimation');
    for (let i = 0; i < textAnimation.length; i++) {
      const animationTarget = textAnimation[i];
      const texts = animationTarget.textContent;
      animationTarget.textContent = '';
        
      for (let j = 0; j < texts.length; j++) {
        if(texts[j] === ' ') {
          animationTarget.innerHTML += ' ';
        } else {
          animationTarget.innerHTML += 
          '<span style="animation-delay: ' + ((j * .1) + .1) + 's;">' + texts[j] + '</span>';
        }
      }
      // console.log(animationTarget);
    }
  // setTimeout(() => {
  //   const span = document.querySelectorAll('span');
  //   for (let k = 0; k < span.length; k++) {
  //     span[k].classList.add('red');
  //   }
  //   setTimeout(() => {
  //     for (let k = 0; k < span.length; k++) {
  //       span[k].classList.remove('red');
  //     }
  //     setTimeout(() => {
  //       const timer = setInterval(() => {
  //         const span = document.querySelectorAll('span');
  //           for (let k = 0; k < span.length; k++) {
  //             span[k].classList.toggle('red');
  //           }
  //           setTimeout(() => {
  //             for (let k = 0; k < span.length; k++) {
  //               span[k].classList.remove('red');
  //               clearInterval(timer);
  //             }
  //           }, 18000);
  //       }, 1000);
  //     }, 1000);
  //   }, 200); 
  // }, 2000);
}

//---------------------------------------------------------------------------------------------


history.pushState(null, null, location.href);
window.addEventListener('popstate', (e) => {
  history.go(1);
});

  if (window.performance) {
    if (performance.navigation.type === 1) {
      // リロードされた
      unit.classList.add('js_displayNone');
        $body.classList.add('js_bgColor');
          alertText.classList.add('js_displayBlock');
            action.classList.add('js_displayBlock');
              animationAction();
        setTimeout(() => {
          alertTextSystem.classList.add('js_displayBlock'); 
            alertTextBroken.textContent = '! 破壊されました！';
              countUpNumber.textContent = ''; 
                action.classList.add('js_flash');
            setTimeout(() => {
              $body.classList.add('js_bgColorFlash');
                alertText.classList.add('fontWeightBold');
                  alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                    alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                      alertSkullIcon.forEach(element => {
                        element.classList.add('red');
                      });
              setTimeout(() => {
                $body.classList.remove('js_bgColorFlash');
                  alertText.classList.remove('fontWeightBold');
                    alertTextSystem.classList.remove('red', 'fontLarge', 'fontWeightBold');
                      alertTextBroken.classList.remove('red', 'fontLarge', 'fontWeightBold');
                        alertSkullIcon.forEach(element => {
                          element.classList.remove('red');
                        });
                setTimeout(() => {
                  $body.classList.add('js_bgColorFlash');
                    alertText.classList.add('fontWeightBold');
                      alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                        alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                          alertSkullIcon.forEach(element => {
                            element.classList.add('red');
                          });
                  setTimeout(() => {
                    $body.classList.remove('js_bgColorFlash');
                      alertText.classList.remove('fontWeightBold');
                        alertTextSystem.classList.remove('red', 'fontWeightBold');
                      alertTextBroken.classList.remove('red', 'fontWeightBold');
                    alertSkullIcon.forEach(element => {
                      element.classList.remove('red');
                      element.classList.add('animationDone');
                    });
                  }, 4000);
                }, 3000);
              }, 3000);
          }, 0); // 4000
        }, 0); //1000
    } else {
      // リロードされていない
      console.log('no');
    }
  }

  action.addEventListener('click', function () {
  window.open('https://cyber-ground.github.io/infinite-ja/');
});

//-------------------------------------------------------------------------------------------


// if (window.performance) {
//   if (performance.navigation.type === 0) {
//     // リロードされた
//     console.log('ok');
//   } else {
//     // リロードされていない
//     console.log('no');
//   }
// }

// window.addEventListener('beforeunload', (event) => {
//   // Cancel the event as stated by the standard.
//   event.preventDefault();
//   // Chrome requires returnValue to be set.
//   event.returnValue = '';
// });















