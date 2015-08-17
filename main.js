//global vars
var totalRef;
var data = [{
  label: 'label',
  values: [{x:1,y:2}]
}];
window.onload = function() {
  totalRef = $('#totalRef').epoch({
    type: 'time.line',
    data: data,
    axes:["left","right","bottom"]
  });
};
