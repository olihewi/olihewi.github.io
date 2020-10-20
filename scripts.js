var currentsectionbutton = -1;
function sectionClick(button) {
	var sections = document.getElementsByClassName("sectioncontent");
	var contents = document.getElementsByClassName("contentdisplay");
	var sectionWidth = button == 'about' ? "1200" : button == 'games' ? "1000" : button == 'blog' ? "800" : button == 'contact' ? "40%" : "75%";
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
var displayedblogs = "all";
function displayBlogPosts(category) {
	if (category == displayedblogs) { displayedblogs="all"; }
	else { displayedblogs=category; }
	
	if (displayedblogs == "uni" || displayedblogs == "gea" || displayedblogs == "gld" || displayedblogs == "pg" || displayedblogs == "mgic")
	{
		document.getElementById("unipostssubsection").style.display="flex";
	}
	else
	{
		document.getElementById("unipostssubsection").style.display="none";
	}
	
	var allcategorybuttons = document.getElementsByClassName("blogcategorybutton");
	for (var i=0, max=allcategorybuttons.length; i < max; i++)
	{
		allcategorybuttons[i].id=allcategorybuttons[i].id.replace("active","");
	}
	var allblogs = document.getElementsByClassName("blogpost");
	for (var i=0, max=allblogs.length; i < max; i++)
	{
		allblogs[i].style.display="none"
	}
	if (displayedblogs == "all")
	{
		for (var i=0, max=allblogs.length; i < max; i++)
		{
			allblogs[i].style.display="block"
		}
	}
	else
	{
		document.getElementById("blogcategory"+category).id = "blogcategory"+category+"active";
		var blogsofcategory = document.getElementsByClassName("blog"+displayedblogs)
		for (var j=0, num=blogsofcategory.length; j < num; j++)
		{
			blogsofcategory[j].style.display="block";
		}
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
function scrollAbout() {
	var aboutheader = document.getElementById("aboutimage");
	if (document.getElementById("containerabout").scrollTop > 1)
	{
		aboutheader.style.height = "150px";
		aboutheader.style.filter = "brightness(50%)";
	}
}
function loadPage()
{
	var activeTab = getUrlParam("tab","none");
	if (activeTab != "none")
	{
		sectionClick(activeTab);
	}
}