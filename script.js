<script>
var topenable = "";


if (topenable == "on") {(function (window) {
var gn_ads_opts = window.gn_ads_opts || { },
size = ['230x90','237x90'];

if (!gn_ads_opts.block) { gn_ads_opts.block = []; }
if (!gn_ads_opts.is_blocked) {
gn_ads_opts.is_blocked = function(ads) {
ads = ads.split(',');

for (var i = 0; i < ads.length; i++) {
for (var j = 0; j < gn_ads_opts.block.length; j++) {
if (gn_ads_opts.block[j] == ads[i]) { return true; }
}
}

return false;
};
}

for (var i = 0; i < size.length; i++) {
gn_ads_opts.block.push(size[i]);
}

window.gn_ads_opts = gn_ads_opts;
}(window.top));
} 

(function(w) {
	// Set all variables
	var gutter_only="";
	var percentc="http://adclick.g.doubleclick.net/aclk%253Fsa%253Dl%2526ai%253DCL_lYNDDnUb7fCIeCkwSluYCACAEAexABILlgKARQwJmG3gWIAQGQAQDAAQLIAQngAgGoAwGqBFVP0MpPxzxq6-ORXZ2ak20538dLaD28xtQJcFf7ampp7ljaDz5bvxevaLvDPUis7SVEJTgmYGzzr24MDV6ySagtR6JAG5xB-J32s11Z1sx8rLSPOzYbuAQB%2526preview%253D%2526num%253D1%2526sig%253DAOD64_2ZW-12tNaXyDapn3OCGplBxOYG3Q%2526client%253Dca-gfp-rama1%2526adurl%253D";
	var clickmacro="http://adclick.g.doubleclick.net/aclk%253Fsa%253Dl%2526ai%253DCL_lYNDDnUb7fCIeCkwSluYCACAEAexABILlgKARQwJmG3gWIAQGQAQDAAQLIAQngAgGoAwGqBFVP0MpPxzxq6-ORXZ2ak20538dLaD28xtQJcFf7ampp7ljaDz5bvxevaLvDPUis7SVEJTgmYGzzr24MDV6ySagtR6JAG5xB-J32s11Z1sx8rLSPOzYbuAQB%2526preview%253D%2526num%253D1%2526sig%253DAOD64_2ZW-12tNaXyDapn3OCGplBxOYG3Q%2526client%253Dca-gfp-rama1%2526adurl%253Dhttp://??";
	var horiz="center";
	var vert="top";
	var attach="scroll";
	var repeat="no-repeat";
	var tracking="";
	var topad="";
	var toggle="";
	var sliver_push="";
	var sliver="" ;
	var aoClickUrl="http://adclick.g.doubleclick.net/aclk%253Fsa%253Dl%2526ai%253DCL_lYNDDnUb7fCIeCkwSluYCACAEAexABILlgKARQwJmG3gWIAQGQAQDAAQLIAQngAgGoAwGqBFVP0MpPxzxq6-ORXZ2ak20538dLaD28xtQJcFf7ampp7ljaDz5bvxevaLvDPUis7SVEJTgmYGzzr24MDV6ySagtR6JAG5xB-J32s11Z1sx8rLSPOzYbuAQB%2526preview%253D%2526num%253D1%2526sig%253DAOD64_2ZW-12tNaXyDapn3OCGplBxOYG3Q%2526client%253Dca-gfp-rama1%2526adurl%253Dhttp://www.goolge.com";
	var multirez="1024";
	var smallskin="";
	var scripting="";
	var php="";
	var reskin="http://cdn.assets.gorillanation.com/__canada/2_guns/test/loneranger_swto_v4a_test1.jpg";
	var bgcolor="#000";
	var pushdown="0";
	var windowBody = w.document.body;
	var aoTargetID = aoTargetID || "";
	var aoClickUrlEmpty = (aoClickUrl===""||aoClickUrl===0||aoClickUrl==="0"||aoClickUrl===null||aoClickUrl===false||aoClickUrl===undefined) ? true : false;
	var aoTargetIDEmpty = (aoTargetID===""||aoTargetID===0||aoTargetID==="0"||aoTargetID===null||aoTargetID===false||aoTargetID===undefined||aoTargetID === 'http://??') ? true : false;


	function Empty(o){
		var o = (o===""||o===0||o==="0"||o===null||o===false||o===undefined) ? true : false;
		return o;
	}
	
	windowBody.className += (gutter_only === "yes") ? ' ad_gutter_reskin' : "";

                          if (gutter_only == "no"){
 document.write('<style type=text/css>.gnuk {background:none !important; }</style>');}

	
	// Multirez checker, Toggle, 964 & SK Sliver settings
	var reskin_small = (!Empty(smallskin)) ? "" : "http://cdn.assets.gorillanation.com/__canada/2_guns/test/loneranger_swto_v4a_test1.jpg";
	var multirez = (!Empty(smallskin)) ? "" : "1024";
	var sliver_enabled = (sliver == "no") ? false : undefined;
	
	// Resolution Sniffer & Body Background setting
	windowBody.style.backgroundPosition = 'center top';				
	if (screen.width<=multirez) {
		windowBody.style.backgroundImage = "url("+reskin_small+")";
		windowBody.style.backgroundColor = bgcolor;
	} else {
		windowBody.style.backgroundImage = "url("+reskin+")";
		windowBody.style.backgroundColor = bgcolor;
	}
	
	// 3rd Party Javascript
	if(!Empty(scripting)){document.write('<script src="'+scripting+'" type="text/javascript"></scr'+'ipt>');}
	
	// 3rd Party PHP
	if(!Empty(php)){document.write('<div style="display:none"><img src="'+php+'?ord=1717100624" height="0" width="0" border="0"></div>');}
	
	
	// Tracking Pixel
	if(!Empty(tracking)){document.write('<div style="display:none"><iframe src="'+tracking+'" height="0" width="0"></iframe></div>');}

// Toggle, 964 & SK Sliver settings

if (topenable == "on"){
ad970_enabled = true;
ad963_enabled = true;
}

	
	// Main Reskin
	windowBody.style.backgroundRepeat = "no-repeat";
	windowBody.style.backgroundAttachment = "scroll";
	windowBody.style.margin = "0px !important";
	windowBody.style.backgroundRepeat = "no-repeat";

var clickActions = function(e) {console.log('in clickActions');
	var el = e.target || e.srcElement;
	if (el.nodeName === "BODY" || (aoTargetIDEmpty === false && el.id === aoTargetID)) {
		if (e.type === "click") {console.log('in clickActions click');
			//w.open(aoClickUrl);
		} else if (e.type === "mouseover") {
			el.style.cursor='pointer';
		} else if (e.type === "mouseout") {
			el.style.cursor='auto';
		}
	}
}


// event stuff
window.onload = function() {
if (aoClickUrlEmpty === false) {
var targetElement = (aoTargetIDEmpty === false) ? w.document.getElementById(aoTargetID) : windowBody;
if (targetElement.addEventListener){
targetElement.addEventListener('click', clickActions, false);
targetElement.addEventListener('mouseover', clickActions, false);
targetElement.addEventListener('mouseout', clickActions, false);
} else if (targetElement.attachEvent){
targetElement.attachEvent('onclick', clickActions);
targetElement.attachEvent('onmouseover', clickActions);
targetElement.attachEvent('onmouseout', clickActions);
}
}
}


})(window.top);

var bgcolor="#000";
</script>