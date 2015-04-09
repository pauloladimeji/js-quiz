/*

Version 1

*/

//shorter getElementById();
function _(elem) {
	return document.getElementById(elem);
}

//Event Delegation Utility function
var EventUtil = {

	addHandler: function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		}
		else if(element.attachEvent) {
			element.attachEvent("on" + type, element, handler);
		} else {
			element["on" + type] = handler;
		}
	},

	removeHandler: function(element, type, handler) {
		if(element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		}
		else if(element.detachEvent) {
			element.detachEvent("on" + type, element, handler);
		} else {
			element["on" + type] = null;
		}
	},

	//handling IE events
	getEvent: function(event) {
		return event ? event : window.event; //window.event for IE events. also event = event || window.event;
	},

	getTarget: function(event) {
		return event.target || event.srcElement; 
	}
};


var Quiz = (function(){

	var allQuestions = [
		{
			question: "Who is the Prime Minister of the UK?",
			choices: ["Tony Blair", "David Cameron", "Barack Obama"],
			correctAnswer: 1
		},
		{
			question: "Who is the President of the US?",
			choices: ["Vladimir Putin", "Barack Obama", "George Bush"],
			correctAnswer: 1
		},
		{
			question: "Who is the Governor of Lagos State?",
			choices: ["Tunde Fashola", "Rauf Aregbesola", "Lola Bello"],
			correctAnswer: 0
		},
		{
			question: "Where is the Suez Canal?",
			choices: ["Cuba", "Australia", "Egypt"],
			correctAnswer: 2
		},
		{
			question: "What is the chemical symbol for Iron?",
			choices: ["Fe", "Ir", "Ca"],
			correctAnswer: 1
		}
	];

	function displaySingleQuestion(currentQuestion) {

		var questionTitle = currentQuestion.question;

		_("question-title").appendChild( document.createTextNode(questionTitle) );

		//display choices
		for (var j = 0; j < currentQuestion.choices.length; j++) {

			var displayed_choices = _("choices").appendChild( document.createElement("input") );
			displayed_choices.setAttribute("type", "radio");
			displayed_choices.setAttribute("name", "choices");

			displayed_choices.parentNode.insertBefore(document.createTextNode(currentQuestion.choices[j]), displayed_choices.nextSibling);

			//console.log(choices);
		}
	}

	

	//displaySingleQuestion(allQuestions[0]);


	
	window.addEventListener("load", displaySingleQuestion(allQuestions[0]), false);
	//EventUtil.addHandler(_("submit-button"), "click", displaySingleQuestion(allQuestions));

})();