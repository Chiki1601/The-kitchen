let timeline = new TimelineMax()
timeline.add('enter-kitchen')

/**
 * Animate wall tiles
 * each gets a unique shade of peach puff
 */
document.querySelectorAll('.wall .tile').forEach((tile) => {
  timeline.fromTo(tile, 2, {
    alpha: 0,
  }, {
    alpha: 0.5 + Math.random() * 0.5,
    delay: Math.random() * 2,
    ease: Back.easeOut,
  }, 'enter-kitchen+=0.1')
})

/**
 * Animate floor tiles
 */
document.querySelectorAll('.floor .tile').forEach((tile) => {
  timeline.to(tile, 1, {
    alpha: 1,
    ease: Power2.easeOut,
    delay: Math.random() * 1,
  }, 'enter-kitchen+=0.25')
})

/**
 * Animate window
 * crescent moon slides out as animation loads
 * this is synchronised with the clock animation
 */
timeline.from('.window', 1, {
  alpha: 0,
  y: -150,
  ease: Power2.easeOut,
}, 'enter-kitchen+=0.25')
  .to('.window .moon', 1, {
  alpha: 0,
  y: -100,
  ease: Back.easeIn,
}, 'enter-kitchen+=5')
  .from('.window .pane', 4, {
  fill: '#312CCF',
  ease: Power2.easeIn,
}, 'enter-kitchen+=3')
  .from('.window .highlight', 1, {
  opacity: 0,
  ease: Power2.easeIn,
}, 'enter-kitchen+=5')
  .from('.cactus', 1, {
  alpha: 0,
  y: 50,
  ease: Bounce.easeOut,
}, 'enter-kitchen+=6')

/**
 * Clock animation
 * fast-forward the time to indicate animation progress
 */
timeline.from('.clock', 0.5, {
  alpha: 0,
  y: -50,
  ease: Back.easeOut,
}, 'enter-kitchen+=0.5')
  .from('.clock .hours', 5, {
  rotation: -360,
  transformOrigin: '50% 91.1%',
  ease: Power2.easeIn,
}, 'enter-kitchen+=1')
  .from('.clock .minutes', 5, {
  rotation: -720,
  transformOrigin: '7.3% 50%',
  ease: Power2.easeIn,
}, 'enter-kitchen+=1')

/**
 * Animate cabinets into view
 * Stagger works nicely with the cabinet shapes
 */
timeline.staggerFrom('.cabinet .highlight, .cabinet .handle', 1, {
  alpha: 0,
  ease: SteppedEase.config(3),
}, 0.15, 'enter-kitchen+=0.5')

/**
 * Animate oven entry
 * turn oven light and fade in the pie
 */
timeline.from('.oven', 1, {
  alpha: 0,
  ease: Power2.easeOut,
}, 'enter-kitchen')
  .staggerFrom('.oven .switch', 1, {
  alpha: 0,
  ease: Power2.easeOut,
}, 0.2, 'enter-kitchen+=0.5')
  .from('.oven .light', 1, {
  alpha: 0,
  ease: Power2.easeOut,
}, 'enter-kitchen+=4')
  .from('.oven .pie', 1, {
  alpha: 0,
  x: 50,
  ease: Power2.easeOut,
}, 'enter-kitchen+=5')

/**
 * Fade-in the counter
 */
timeline.from('.counter', 1, {
  alpha: 0,
  ease: Power2.easeOut,
}, 'enter-kitchen+=0.15')

/**
 * Slide-in the sink and faucet
 */
timeline.staggerFrom('.sink .basin', 1, {
  alpha: 0,
  y: 75,
  ease: Power2.easeOut,
}, 0.5, 'enter-kitchen+=0.5')
  .from('.sink .faucet', 1, {
  alpha: 0,
  y: -25,
  ease: Power2.easeOut,
}, 'enter-kitchen+=1.5')

/**
 * Assemble the stove
 */
timeline.from('.stove', 1, {
  alpha: 0,
  ease: Power2.easeOut,
}, 'enter-kitchen+=0.25')
  .staggerFrom('.stove .rings path', 0.5, {
  alpha: 0,
  y: -50,
  ease: Power2.easeIn,
}, 0.1, 'enter-kitchen+=0.5')
  .staggerFrom('.stove .buttons path', 0.5, {
  alpha: 0,
  ease: Power2.easeOut,
}, 0.25, 'enter-kitchen+=1')

/**
 * Slide-in the hood
 */
timeline.from('.hood', 2, {
  alpha: 0,
  y: -500,
  ease: Power2.easeOut,
}, 'enter-kitchen+=3')
  .staggerFrom('.hood .buttons circle', 0.5, {
  alpha: 0,
  ease: Power2.easeOut,
}, 0.25, 'enter-kitchen+=4')

/**
 * Slide-in the cutting board
 */
timeline.from('.board-stacked', 1, {
  alpha: 0,
  x: 1920,
  ease: Back.easeOut,
}, 'enter-kitchen+=2')

/**
 * Slide-in cookie jar :3
 */
timeline.from('.jar', 1, {
  alpha: 0,
  x: 1000,
  ease: Power2.easeOut,
}, 'enter-kitchen+=3')

/**
 * Slide-in basil plant
 * grow the leaves on entry
 */
timeline.from('.plant', 1, {
  alpha: 0,
  x: 1920,
  ease: Back.easeOut,
}, 'enter-kitchen+=3')
document.querySelectorAll('.plant .leaf').forEach((leaf) => {
  timeline.fromTo(leaf, 2, {
    alpha: 0,
  }, {
    alpha: 1,
    delay: 1.25 + Math.random() * 3,
    ease: Back.easeOut,
  }, 'enter-kitchen+=3')
})

/**
 * Enter the knives
 */
timeline.from('.knives', 1, {
  alpha: 0,
}, 'enter-kitchen+=2')
  .staggerFrom('.knives g', 1, {
  alpha: 0,
  y: -100,
  ease: Back.easeOut,
}, 0.20, 'enter-kitchen+=2.5')

/**
 * Animate fruit bowl
 */
timeline.from('.fruit-bowl', 0.5, {
  alpha: 0,
  y: 100,
  ease: Bounce.easeOut,
}, 'enter-kitchen+=3')

/**
 * Animate salt shaker
 */
timeline.from('.salt-shaker', 0.5, {
  alpha: 0,
  y: 250,
  ease: Back.easeOut,
}, 'enter-kitchen+=3')

/**
 * Animate pepper shaker
 */
timeline.from('.pepper-shaker', 0.5, {
  alpha: 0,
  y: 250,
  ease: Back.easeOut,
}, 'enter-kitchen+=3.5')

/**
 * Slide-in kitchen-aid mixer
 */
timeline.from('.mixer', 1, {
  alpha: 0,
  x: 400,
  ease: Back.easeOut,
}, 'enter-kitchen+=1.75')

/**
 * Slide-in pestle and mortar
 */
timeline.from('.pestle', 1, {
  alpha: 0,
  x: 300,
  ease: Back.easeOut,
}, 'enter-kitchen+=5')

/**
 * Slide-in pepper mill
 */
timeline.from('.pepper', 1, {
  alpha: 0,
  x: 300,
  ease: Back.easeOut,
}, 'enter-kitchen+=6')

/**
 * Slide-in bottle of olive oil
 */
timeline.from('.bottle', 1, {
  alpha: 0,
  x: 250,
  ease: Back.easeOut,
}, 'enter-kitchen+=6.5')

/**
 * Slide-in bottle of sunflower oil
 */
timeline.from('.oil', 1, {
  alpha: 0,
  x: 200,
  ease: Back.easeOut,
}, 'enter-kitchen+=7')

/**
 * Slide-in pot on the stove
 */
timeline.from('.pot', 1, {
  alpha: 0,
  x: -150,
  ease: Power2.easeOut,
}, 'enter-kitchen+=7.5')

/**
 * Slide-in pot on the stove
 */
timeline.from('.espresso-maker', 1, {
  alpha: 0,
  x: 100,
  ease: Back.easeOut,
}, 'enter-kitchen+=8')
  .from('.espresso-maker .lid', 0.5, {
  alpha: 0,
  y: -50,
  ease: Bounce.easeOut,
}, 'enter-kitchen+=8.25')

/**
 * Animate cutting board
 * enter knife and sausage slices
 */
timeline.fromTo('.cutting-board .board', 1, {
  alpha: 0,
  x: 0,
  y: 10,
  rotation: -130,
  transformOrigin: '50% 50%',
  ease: Back.easeOut,
}, {
  alpha: 1,
  x: 50,
  transformOrigin: '50% 50%',
  ease: Back.easeOut,
}, 'enter-kitchen+=3')
  .from('.cutting-board .sausage', 0.5, {
  alpha: 0,
  x: 250,
  ease: Back.easeOut,
}, 'enter-kitchen+=4')
  .fromTo('.cutting-board .chefs-knife', 0.5, {
  alpha: 0,
  x: 0,
  y: 65,
  rotation: -215,
  transformOrigin: '50% 50%',
  ease: Back.easeOut,
}, {
  alpha: 1,
  x: 85,
  transformOrigin: '50% 50%',
  ease: Back.easeOut,
}, 'enter-kitchen+=4.5')
  .staggerFrom('.cutting-board .slice', 1, {
  alpha: 0,
  y: -100,
  ease: Bounce.easeOut,
}, 0.2, 'enter-kitchen+=4.75')

/**
 * Animate the chef for a quick glance
 * slide-in, blink, talk, slide-out
 */
timeline.fromTo('.chef', 1, {
  alpha: 0,
  x: 1920,
}, {
  alpha: 1,
  x: 1025,
  ease: Power2.easeOut,
}, 'enter-kitchen+=10')
timeline.to('.chef .head .left-eye, .chef .head .right-eye', 0.1, {
  scaleY: 0,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=12')
timeline.to('.chef .head .left-eye, .chef .head .right-eye', 0.1, {
  scaleY: 1,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=12.25')
timeline.to('.chef .head .mouth', 0.1, {
  scaleY: 0.5,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=12.5')
timeline.to('.chef .head .mouth', 0.1, {
  scaleY: 1,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=12.6')
timeline.to('.chef .head .mouth', 0.1, {
  scaleY: 0.5,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=12.7')
timeline.to('.chef .head .mouth', 0.1, {
  scaleY: 1,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=12.8')
timeline.to('.chef .head .mouth', 0.1, {
  scaleY: 0.5,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=12.9')
timeline.to('.chef .head .mouth', 0.1, {
  scaleY: 1,
  transformOrigin: '0% 50%',
  ease: Power2.easeOut,
}, 'enter-kitchen+=13')
timeline.to('.chef', 2, {
  alpha: 0,
  x: 1920,
  ease: Power2.easeOut,
}, 'enter-kitchen+=15')