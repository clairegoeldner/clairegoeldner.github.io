var outputScript = document.getElementById("outputScript");
var displayScript = document.getElementById("displayScript");

if (displayScript) {
	displayScript.addEventListener("click", displayScriptFunction);
}

//when the button is clicked, determine the form values and place them in a piece of text, then display it
function displayScriptFunction() {
	var name = document.getElementById("name").value;
	var benefit = document.getElementById("benefit").value;

	outputScript.innerHTML = "Hey, " + name + ", I found this school in Wisconsin. It's a free public school that any Wisconsin resident can open-enroll into. Plus, " + benefit + " I'd like to look into it with you. Will you go to ruralvirtual.org with me?";
}



//list of facts about RVA
var facts = [
	"I no longer am forced to follow the route everyone else does because my path is different.",
	"RVA lets me customize my course selections to what I am interested in. I can pick from a wide variety of classes, such as Gothic Literature, History of Rock 'n' Roll, and Forensic Science. I can also decide which core classes I can take, such as Physics or Chemistry.",
	"<h2>I can choose what kind of school I do.</h2>",
	"My younger sisters' school is book-based, like traditional homeschooling but with the support of a teacher. My school is online. I have courses to complete and Zoom meetings to attend, but I can do it mainly on my schedule.",
	"Zoom meetings only last half an hour, with 15-minute breaks in between every one. Also, I don't have to have a class every hour, so I get breaks. And if I keep my grades up, I only have to go to class on Mondays if I want.",
	"<h2>I can choose when I do school.</h2>",
	"If I don't have to go to a Zoom meeting, I can sleep in as late as I want. I can do school in the morning, evening, or even at midnight if I want. I could take every Tuesday off and spend it elsewhere, as long as I still do school.",
	"RVA's flexibility has also allowed my family to go on month-long road trips without worrying about missing out on school or too many crowds during normal break seasons.",
	"Click the button again to start over!"
]
var outputFact = document.getElementById("outputFact");
var displayFact = document.getElementById("displayFact");
var count = 0;

if (displayFact) {
	displayFact.addEventListener("click", displayFactFunction);
}

//when the button is clicked, display the next fact in the array
function displayFactFunction() {
	outputFact.innerHTML = facts[count];
	count++;
	if (count == facts.length) {
		count = 0;
	}
}
