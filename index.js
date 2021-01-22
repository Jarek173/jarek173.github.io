
const $ = (query) => document.querySelector(query);

const sphere = $('a-sphere');

var val = 0;

const animate = () => {
  val = val + 0.04;

  if(val >= 6.28)
  {
      val = 0;
  }

  const variation = Math.sin(val);
  const position = `0 ${2.25+variation/4} -2`;

  sphere.setAttribute('position', position);

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
