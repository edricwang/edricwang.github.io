var profile = {
	en: "Yuqi Wang is a UX/UI designer based in New York. He studies at Parsons School of Design with a profound interest in language learning. He spent one semester at Universität der Künste Berlin for his study abroad program.",
	de: "Yuqi Wang ist ein UX/UI Designer, der in New York lebt und arbeitet. Er studiert an der Parsons School of Design. Seine Leidenschaft ist das Erlernen von Sprachen. Ein Austauschsemester verbrachte er an der Universität der Künste Berlin.",
	fr: "Yuqi Wang est un UX/UI designer basé à New York. Il étudie à la Parsons School of Design avec l’intérêt à l’apprentissage des langues et a passé un semestre à la Universität der Künste Berlin pour son programme d’échange universitaire."
};

var projects = {
	p01: {
		ttl: "Stress Management",
		img: ["17-12-stress management/01.png",
			  "17-12-stress management/02.png",
			  "17-12-stress management/03.png",
			  "17-12-stress management/04.png"],
		icon: "sketch/stress management.png",
		en: "Word stress in the English language oftentimes holds learners back from expressing themselves with sufficient confidence. This dictionary project offers an explicit visual solution to this pronunciation problem. Words are displayed in a curve along with audio pronunciations and text explanations.",
		de: "Die Wortbetonung der englischen Sprache hält Lernende oftmals zurück, sich selbstbewusst auszudrücken. Dieses Wörterbuch-Projekt stellt eine explizit visuelle Lösung für das Ausspracheproblem zur Verfügung. Die Betonung der Silben wird durch eine Kurve visualisiert und zusammen mit Erläuterungen zum Wort angezeigt.",
		fr: "L’accent tonique dans la langue anglaise empêche des apprenants de s’exprimer avec confiance suffisante en soi. Ce projet dictionnaire offre une solution explicite visuelle au problème de prononciation. Des mots sont affichés dans une courbe avec des prononciations audio et des explications textuelles."
	},
	p02: {
		ttl: "Cooper Hewitt",
		img: ["16-12-cooper hewitt/01.png",
			  "16-12-cooper hewitt/02.png",
			  "16-12-cooper hewitt/03.png"],
		icon: "sketch/cooper hewitt.png",
		en: "Cooper Hewitt interface project experiments with unconventional searching methods. The search box is designed as a miniature of the requested objects, integrated with resizing and color changing as the major approach. Playfulness as the focal concept embellishes the whole searching process.",
		de: "Das Cooper Hewitt Interface-Projekt experimentiert mit unkonventionellen Suchmethoden. Die Suchbox, die die Ansätze der Größen- und Farbenänderung in sich aufnimmt, entwirft sich als eine Miniatur der angeforderten Objekte. Verspieltheit ist das zentrale Konzept dieser Methode, Suchvorgänge schmuckreicher zu gestalten. ",
		fr: "Ce Cooper Hewitt interface projet teste des méthodes peu conventionnelles de recherche. La boîte de recherche est conçue comme une miniature des objets demandés, en intégrant l’approche du redimensionnement et du changement de couleur. L’enjouement comme le concept focal pimente le processus entier de recherche."
	},
	p03: {
		ttl: "Gute Nacht",
		img: ["17-05-gute nacht/01.png",
			  "17-05-gute nacht/02.png",
			  "17-05-gute nacht/03.png",
			  "17-05-gute nacht/04.png",
			  "17-05-gute nacht/05.png",
			  "17-05-gute nacht/06.png"],
		icon: "sketch/gute nacht.png",
		en: "Gute Nacht music visualization project interrogates the expressive possibilities of static and motional graphics, an exploratory mimicking of German modernity. With lighting design as major inspiration, this project seeks to set an economical prototype for real stage performance with appreciation for instrumental music.",
		de: "Das Musikvisualisierung-Projekt Gute Nacht untersucht Ausdrucksmöglichkeiten der statischen und beweglichen Grafik – eine erforschende Nachahmung der deutschen Modernität. Mit dem Licht-Design als Hauptinspiration versucht dieses Projekt, einen kostengünstigen Prototyp für echte Bühnen-Performances zu stellen und die Instrumentalmusik zu würdigen.",
		fr: "Ce projet de visualisation musique interroge les possibilités expressives des graphismes statiques et cinétiques, une imitation exploratoire de la modernité allemande. Avec l’inspiration du design d’éclairage et l’appréciation de la musique instrumentale , ce projet cherche à construire un prototype économique pour des performance sur scène."
	},
	p04: {
		ttl: "Striker",
		img: ["17-10-striker/01.png",
			  "17-10-striker/02.png",
			  "17-10-striker/03.png",
			  "17-10-striker/04.png",
			  "17-10-striker/05.png",
			  "17-10-striker/06.png"],
		icon: "sketch/striker.png",
		en: "This project tackles the problem of individual tasking inability. By posting well described tasks with expected monetary payback, users will be able to receive offers from their vicinity. At the touch of a button, the client role can be changed to the task taker’s and vice versa. With progress control and evaluation system built in, this app associates itself closely with reliability for long-term usability.",
		de: "Dieses Projekt beschäftigt sich mit dem Problem der Unlösbarkeit bestimmter Aufgaben für einzelne Individuen. Nachdem die Benutzer die beschriebenen Aufgaben mit erwartetem Bezahlungsvorschlag veröffentlichen, bekommen sie Angebote aus ihrer Nähe. Diese App ermöglicht den Rollenwechsel zwischen Auftraggeber und Auftragnehmer. Dank Fortschrittskontrolle und Evaluierungssystem ist sie auf eine langfristige Nutzung ausgerichtet.",
		fr: "Ce projet aborde le problème de l’incapacité individuelle au travail. En postant les tâches bien décrites avec le remboursement attendu, les utilisateurs reçoivent des offres dans les environs. On peut changer le rôle du client pour le preneur de la tâche et vice versa. Avec le contrôle de progrès et le système d’évaluation, cet app s’associe étroitement avec la fiabilité pour la convivialité à long terme."
	},
	p05: {
		ttl: "Three Days to See",
		img: ["15-09-three days to see/01.png",
			  "15-09-three days to see/02.png",
			  "15-09-three days to see/03.png",
			  "15-09-three days to see/04.png"],
		icon: "sketch/three days to see.png",
		en: "This zine presents visually impaired children’s interpretation of Helen Keller’s Three Days to See. Supported by a teacher working in a school for the blind, this project attempts to open up communication between both communities, with and without vision problems, for better mutual understanding.",
		de: "Diese Zine präsentiert eine Interpretation des Essays Drei Tage zum Sehen von Helen Keller aus der Perspektive sehbehinderter Kinder. Mit der Unterstützung einer Lehrerin, die in einer Blindenschule arbeitet, bemüht sich dieses Projekt, die Kommunikation zwischen Gemeinschaften mit und ohne visuellen Problemen zu eröffnen, um besseres gegenseitiges Verständnis zu ermöglichen.",
		fr: "Ce zine présente l’interprétation de l’essai d’Helen Keller, Trois Jours pour Voir, des enfants malvoyants. Avec le soutien d’une institutrice qui travaille dans une école pour aveugles, ce projet essaie d’ouvrir la communication entre les communautés, avec et sans des problèmes de vue, pour la meilleure compréhension mutuelle."
	},
	p06: {
		ttl: "How Should We Live",
		img: ["17-05-how should we live/01.jpg",
			  "17-05-how should we live/02.jpg",
			  "17-05-how should we live/03.jpg",
			  "17-05-how should we live/04.jpg"],
		icon: "sketch/how should we live.png",
		en: "This identity design project for the exhibition How Should We Live? held in MoMA revolves around artistic movements and transition. The ideological cohesion of simplicity, efficiency and efficacy is presented in the form of primary colors and line expression which outlines the interior layout and furniture ensemble.",
		de: "Dieses Identitätsdesign-Projekt für die Ausstellung How Should We Live? (Wie soll man leben?) im MoMA dreht sich um künstlerische Bewegungen und Übergänge. Der ideologische Zusammenhang der Simplizität, der Effizienz und der Wirksamkeit wird dargestellt durch Grundfarben und durch Linien, die den Aufstellungsplan und die Möbel skizzieren.",
		fr: "Ce projet d’identité visuelle pour l’exhibition How Should We Live ? (Comment doit-on vivre ?) à MoMA se focalise à des mouvements artistiques et à la transition entre eux. La cohésion idéologique de la simplicité et de l’efficace se présente dans la forme des couleurs primaires et de l’expression de la ligne en représentant le plan de niveau et des meubles ensemble."
	},
	p07: {
		ttl: "Get a Hold of Yourself",
		img: ["16-09-get a hold of yourself/01.jpg",
			  "16-09-get a hold of yourself/02.jpg",
			  "16-09-get a hold of yourself/03.jpg"],
		icon: "sketch/get a hold of yourself.png",
		en: "Linking up semantic textual significance to physical bag structure, this mantra project examines the opportunities of visualizing linguistic messages with a keen interest in wordplay. Centaur (bold) as the chosen typeface for the mantra carries out elegance and seriousness, meeting the practical need for the design.",
		de: "Durch die Verbindung zwischen semantisch-inhaltlicher Bedeutung und physischer Beutel-Struktur untersucht dieses Mantra-Projekt die Möglichkeiten zur Visualisierung sprachlicher Botschaften in Kombination mit Freude am Wortspiel. Centaur (bold) als die ausgewählte Schriftart für das Mantra unterstreicht die Eleganz und die Ernsthaftigkeit, um die praktischen Bedürfnisse des Designs zu erfüllen.",
		fr: "En reliant la signification sémantique textuelle avec la structure physique du sac, ce mantra projet examine les opportunités de visualiser des messages linguistiques avec un intérêt profond pour le jeu de mots. Centaur (bold), la police de caractère choisie, mène l’élégance et la sérieux à bien en correspondant au besoin pratique du design."
	}
};

var langButton = document.querySelector("#lang");
var sketch = document.querySelector("#sketch");
var mainHome = document.querySelector("main.home");
var headerHome = document.querySelectorAll("span.home");
var banner = document.querySelector("#banner");
var index = document.querySelector("#index");
var aboutMe = document.querySelector("#aboutme");
var contact = document.querySelector("#contact");
var mainContent = document.querySelector("main.content");
var leftButton = document.querySelector("img.left");
var rightButton = document.querySelector("img.right");
var homeButton = document.querySelector("img.home");
var headerContent = document.querySelector("span.content");
var pic = document.querySelector("#pic");
var caption = document.querySelector("#caption");

//HTML Setup - Sketch, Index & AboutMe
for (var i = 0; i < Object.keys(projects).length; i ++) {
	var projectIcon = document.createElement("img");
	sketch.appendChild(projectIcon);
	projectIcon.classList.add("icon");
	projectIcon.src = "assets/media/" + projects[Object.keys(projects)[i]].icon;
	projectIcon.setAttribute("data-project", projects[Object.keys(projects)[i]].ttl);
};

iconPosition();

for (var i = 0; i < Object.keys(projects).length; i ++) {
	var projectTtl = document.createElement("li");
	index.appendChild(projectTtl);
	projectTtl.innerHTML = projects[Object.keys(projects)[i]].ttl;
};

aboutMe.innerHTML = profile.en;

//LangButton
langButton.addEventListener("click", function(e) {
	if (e.target.nodeName == "DIV") {
		for (var i = 0; i < langButton.children.length; i ++) {
			langButton.children[i].classList.remove("selected");
		};
		e.target.classList.add("selected");
		aboutMe.innerHTML = profile[e.target.innerHTML];
		captionGenerate();
	};
});

//Header
for (var i = 0; i < headerHome.length; i ++) {
	headerHome[i].addEventListener("mouseover", function() {
		addRule("span.home:before", {
			width: "100%"
		});
		banner.classList.toggle("ind");
	});

	headerHome[i].addEventListener("mouseout", function() {
		addRule("span.home:before", {
			width: "0"
		});
		banner.classList.toggle("ind");
	});

	headerHome[i].addEventListener("click", function() {
		for (var j = 0; j < headerHome.length; j ++) {
			headerHome[j].classList.toggle("aboutme");
		};
		iconPosition();
		contact.classList.toggle("hidden");
		index.classList.toggle("hidden");
		aboutMe.classList.toggle("hidden");
	});
};

//Index
index.addEventListener("mouseover", function(e) {
	if (e.target.nodeName == "LI" && !mainHome.classList.contains("hidden")) {
		for (var i = 0; i < sketch.children.length; i ++) {
			if (sketch.children[i].dataset.project == e.target.innerHTML) {
				sketch.children[i].style.height = "25%";
			};
		};
	};
});

index.addEventListener("mouseout", function() {
	if (!mainHome.classList.contains("hidden")) {
		for (var i = 0; i < sketch.children.length; i ++) {
			sketch.children[i].style.height = "5%";
		};
	};
});

index.addEventListener("click", function(e) {
	if (e.target.nodeName == "LI") {
		mainHome.classList.add("hidden");
		mainContent.classList.remove("hidden");
		for (var i = 0; i < sketch.children.length; i ++) {
			sketch.children[i].style.animationPlayState = "paused";
			if (sketch.children[i].dataset.project == e.target.innerHTML) {
				sketch.children[i].classList.replace("icon", "sketch");
				sketch.children[i].style.height = "35%";
			} else {
				sketch.children[i].style.height = "0.1%"
			};
		};
		headerContent.innerHTML = e.target.innerHTML;
		headerContent.setAttribute("data-content", e.target.innerHTML.toUpperCase());
		captionGenerate();
		picGenerate();
		picPosition();
		buttonCheck();
	};
});

//HomeButton
homeButton.addEventListener("click", function() {
	mainContent.classList.add("hidden");
	mainHome.classList.remove("hidden");
	for (var i = 0; i < sketch.children.length; i ++) {
		if (sketch.children[i].classList.contains("sketch")) {
			sketch.children[i].classList.replace("sketch", "icon");
		};
		sketch.children[i].style.height = "5%";
		sketch.children[i].style.animationPlayState = "running";
	};
	headerReset();
});

//LeftButton
leftButton.addEventListener("click", function() {
	var current;

	for (var i = 0; i < sketch.children.length; i ++) {
		if (sketch.children[i].dataset.project == headerContent.innerHTML) {
			current = i;
		};
	};

	if (current > 0) {
		pageSwitch(current, current - 1);
	};
});

//RightButton
rightButton.addEventListener("click", function() {
	var current;

	for (var i = 0; i < sketch.children.length; i ++) {
		if (sketch.children[i].dataset.project == headerContent.innerHTML) {
			current = i;
		};
	};

	if (current < sketch.children.length - 1) {
		pageSwitch(current, current + 1);
	};
});

//Pic
pic.addEventListener("scroll", function() {
	var i = pic.scrollTop / (pic.scrollHeight - window.innerHeight) * 100;
	addRule("span.content:before", {
		width: i + "%"
	});
	headerContent.style.transform = "rotate(" + (10 + i * 0.15) + "deg) translateX(" + i * 0.1 + "%)";
});

var oriLeft;

pic.addEventListener("click", function(e) {
	if (e.target.classList.contains("pic")) {
		if (e.target.classList.contains("large")) {
			e.target.classList.remove("large");
			e.target.style.left = oriLeft;
		} else {
			for (var i = 0; i < pic.children.length; i ++) {
				if (pic.children[i].classList.contains("large")) {
					pic.children[i].classList.remove("large");
					pic.children[i].style.left = oriLeft;
				};
			};
			e.target.classList.add("large");
			oriLeft = e.target.style.left;
			e.target.style.left = "12vw";
		};
	};
});

//Before - Width Change
var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
            return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
})(document.createElement("style"));

//Nonoverlapping Position
var positions = [];

function nonOverlappingPosition(num, xRange, yRange, w, h) {
	positions = [];

	var overlapping = false;
		protection = 0;

	while (positions.length < num) {
		var position = {
			x: Math.random() * xRange,
			y: Math.random() * yRange
		};

		var overlapping = false;

		for (var i = 0; i < positions.length; i ++) {
			var other = positions[i];
			var d = Math.sqrt(Math.pow(position.x - other.x, 2) + Math.pow(position.y - other.y, 2));
			if (d < Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2))) {
				overlapping = true;
			};
		};

		if (!overlapping) {
			positions.push(position);
		};

		protection ++;

		if (protection > 10000) {
			break;
		};
	};
};

function iconPosition() {
	var iconNumber = sketch.children.length;
	var iconHeight;

	for (var i = 0; i < sketch.children.length; i ++) {
		sketch.children[i].style.animationDelay = Math.random() * 3 + "s";
		iconHeight = sketch.children[i].offsetHeight;
	};

	nonOverlappingPosition(iconNumber, window.innerWidth - iconHeight * 3, window.innerHeight - iconHeight * 3, iconHeight, iconHeight);

	for (var i = 0; i < sketch.children.length; i ++) {
		sketch.children[i].style.left = positions[i].x / window.innerWidth * 100 + "%";
		sketch.children[i].style.top = positions[i].y / window.innerHeight * 100 + "%";
	};
};

function captionGenerate() {
	for (var i = 0; i < Object.keys(projects).length; i ++) {
		if (projects[Object.keys(projects)[i]].ttl == headerContent.innerHTML) {
			for (var j = 0; j < langButton.children.length; j ++) {
				if (langButton.children[j].classList.contains("selected")) {
					caption.innerHTML = projects[Object.keys(projects)[i]][langButton.children[j].innerHTML];
				};
			};
		};
	};
};

function picGenerate() {
	pic.innerHTML = "";

	for (var i = 0; i < Object.keys(projects).length; i ++) {
		if (projects[Object.keys(projects)[i]].ttl == headerContent.innerHTML) {
			var picNumber = projects[Object.keys(projects)[i]].img.length;
			var picWidth;

			for (var j = 0; j < picNumber; j ++) {
				var projectImg = document.createElement("img");
				pic.appendChild(projectImg);
				projectImg.classList.add("pic");
				projectImg.src = "assets/media/" + projects[Object.keys(projects)[i]].img[j];
				picWidth = projectImg.offsetWidth;
			};

			nonOverlappingPosition(picNumber, window.innerWidth - picWidth, window.innerHeight * 5 - picWidth, picWidth, picWidth);
		};
	};
};

function picPosition() {
	for (var i = 0; i < pic.children.length; i ++) {
		pic.children[i].style.left = positions[i].x / window.innerWidth * 100 + "%";
		pic.children[i].style.top = positions[i].y / window.innerHeight * 100 + "%";
	};
};

function headerReset() {
	addRule("span.content:before", {
		width: "0"
	});
	headerContent.style.transform = "rotate(10deg) translateX(0)";
};

function pageSwitch(current, next) {
	sketch.children[current].classList.replace("sketch", "icon");
	sketch.children[current].style.height = "0.1%";
	sketch.children[next].classList.replace("icon", "sketch");
	sketch.children[next].style.height = "35%";
	headerContent.innerHTML = sketch.children[next].dataset.project;
	headerContent.setAttribute("data-content", sketch.children[next].dataset.project.toUpperCase());
	captionGenerate();
	picGenerate();
	picPosition();
	pic.scrollTop = 0;
	headerReset();
	buttonCheck();
};

function buttonCheck() {
	for (var i = 0; i < Object.keys(projects).length; i ++) {
		if (projects[Object.keys(projects)[0]].ttl == headerContent.innerHTML) {
			leftButton.style.opacity = "0";
			setTimeout(function() {
				leftButton.style.display = "none";
			}, 1000);
		} else if (projects[Object.keys(projects)[Object.keys(projects).length - 1]].ttl == headerContent.innerHTML) {
			rightButton.style.opacity = "0";
			setTimeout(function() {
				rightButton.style.display = "none";
			}, 1000);
		} else {
			leftButton.style.display = "inline-block";
			rightButton.style.display = "inline-block";
			leftButton.style.opacity = "1";
			rightButton.style.opacity = "1";
		};
	};
};