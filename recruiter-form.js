var myquestions = [
"Give examples of job roles in which you've recently successfully placed candidates.",
"Briefly describe the unique value proposition of your company.",
"Please give examples of companies in which you've recently placed candidates. (Where NDAs are in place, please give details of the company/organisation, and name them 'Company Z', 'Company Y', 'Company X', etc.)",
"Please estimate the average salary of candidates placed over the last 6 months. (Feel free to use the arithmetic mean OR the weighted mean.)",
"Describe your approach to recruitment process. Feel free to give examples from recent client projects.",
"Describe your approach to the consultant-recruitment relationship. Case studies or examples are not required.",
"Detail your agency's disability and equality procedures. (This question is not required for sole practitioners.)",
"Detail your drug-testing policy, if relevant.",
"This question intentionally left blank. Please ignore.",
"Please give an overview of the requests (regarding salary, working conditions, employment policy, etc) amongst your typical applicants.",
"Please list the following requirements by their priority amongst your typical applicants: flexible working hours, flexible dress code, flexible seating arrangements.",
"Has anyone really been far as decided to use even go want to do look more like?",
"Please indicate how technologically competent your typical clients are. (On a scale where 'a' is not-competent and '10' is highly-competent.)",
"Are your candidates the type of people who think the glass is half empty, or the glass is half full?",
"What about you?",
"If you are selected as one of our preferred recruitment agents, how far would you go to keep us happy? Would you fight a bear?",
"How do you promote synergy between applicants, companies, and your agency?",
"Given the option, would would you prefer to recommend a candidate who is a vegetarian or a luddite?",
"The use of social media sites in the workplace (limited to, but not including Digg.com) should always be treated as gross misconduct.' Agree or disagree?",
"Can you ensure that your maximum won't always outperform the most eager average?",
"You're in a desert, walking along in the sand, when all of a sudden you look down and see a tortoise. It's crawling toward you. You reach down and you flip the tortoise over on its back. The tortoise lays on its back, its belly baking in the hot sun, beating its legs trying to turn itself over, but it can't. Not without your help. But you're not helping. Why aren't you helping?",
"Do you agree with this statement? 'Recruitment is a art'",
"Would you require your candidates to have Microsoft Excel skills for a position in Database Architecture? Explain your answer.",
"Please enter the 2nd sentence from the 4th paragraph of the 6th chapter of the 2nd edition of 'Liar's poker' to prove you are not a robot.",
"You're waiting for a train, a train that will take you far away. You know where you hope this train will take you, but you don't know for sure. But it doesn't matter. How can it not matter to you where the train will take you?",
"In what instances would it be acceptable to recommend job to a lesser qualified candidate for a position?",
"Which describes you better? A) pathetic b) annoying",
"Please share a joke that you feel is appropriate for a job interview.",
"What is your opinion as to why one is unable to own a Canadian?",
"How high can your clientele raise their feet to the ground?"
];

function addFormField() {
	var id = document.getElementById("id").value;
	$("#divTxt").append('<label id="row'+ id + '">Q: ' + myquestions[((id - 4) % (myquestions.length))] + '</label><textarea></textarea>');
	$('#row' + id).highlightFade({speed:1000});
}

function condAddField() {
	var id = document.getElementById("id").value;
	if (id > 3){
		addFormField();
	}
	id = (id - 1) + 2;
	document.getElementById("id").value = id;
}

$(document).ready(function() {
	$('textarea').livequery('focus', (function(){
		condAddField();
	}));

	$('input').click(function(){
		alert("Please ensure you have answered all questions");
		condAddField();
		return false;
	});

	var currentPage = jQuery.url.attr("path");
	$(':input').blur(function () {
		if($(this).val().length > 0){
			_gaq.push(['_trackEvent', 'form', 'data_entry', $(this).val(), document.getElementById("id").value]);
		} 
	});

});
