var currentsectionbutton = -1;
function sectionClick(button) {
	var sections = document.getElementsByClassName("sectioncontent");
	var contents = document.getElementsByClassName("contentdisplay");
	var sectionWidth = button == 'games' ? "1000" : button == 'blog' ? "1500" : button == 'contact' ? "52%" : "150%";
	for (var i=0, max=sections.length; i < max; i++)
	{
		sections[i].style.width=0;
	}
	for (var i=0, max=contents.length; i < max; i++)
	{
		contents[i].style.opacity = 0;
	}
	if (button != currentsectionbutton)
	{
		document.getElementById("container"+button).style.width=sectionWidth;
		document.getElementById("content"+button).style.opacity=1;
		currentsectionbutton = button;
	}
	else
	{
		currentsectionbutton = -1;
	}
}

function contactHover(onOrOff) {
	var hoverColor = onOrOff ? "#EAC435" : "#AFADCE";
	var coloredTitle = document.getElementsByClassName("contacttitlecolored");
	for (var i=0, max=coloredTitle.length; i < max; i++)
	{
		coloredTitle[i].style.color=hoverColor;
	}
	var coloredLine = document.getElementsByClassName("contactline");
	for (var i=0, max=coloredLine.length; i < max; i++)
	{
		coloredLine[i].style.backgroundColor=hoverColor;
	}
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function loadPage()
{
	var activeTab = getUrlParam("tab","none");
	if (activeTab != "none")
	{
		sectionClick(activeTab);
	}
}