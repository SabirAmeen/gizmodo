 var scrollerImages = [{
         heading: "Mark Zuckerberg is ‘Deeply Disappointed’ SpaceX Blew Up His $95 Million Satellite",
         articleImage: "https://i.kinja-img.com/gawker-media/image/upload/s--7ebiZPtT--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/mqs6kxvqzzljfd3nmrno.jpg"
     }, {
         heading: "Apple’s App Store Is About to Get Soooooooo Much Better",
         articleImage: "https://i.kinja-img.com/gawker-media/image/upload/s--Wpin1LMR--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/nqps1tiaqfb9zn3borjf.jpg"
     }, {
         heading: "The First Reviews of Arrival Are In and They're Out of This World (Rimshot)",
         articleImage: "https://i.kinja-img.com/gawker-media/image/upload/s--w3lWVLTP--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/zcatqaexihnlr9lcm3za.jpg"
     },

 ];


 $("#scroller-content").tmpl(scrollerImages).appendTo(".article-scroller");

 $relOne = $('#related-one');
 $relTwo = $('#related-two');
 $relThree = $('#related-three');
 $artOne = $('#reel-one');
 $artTwo = $('#reel-two');
 $artThree = $('#reel-three');
 $reelDet = $('.reel-details');
 $relOne.mouseenter(function(){
 	$reelDet.hide();
 	$artOne.show();
 });
 $relTwo.mouseenter(function(){
 	$reelDet.hide();
 	$artTwo.show();
 });
 $relThree.mouseenter(function(){
 	$reelDet.hide();
 	$artThree.show();
 });
