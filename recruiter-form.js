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
"The use of social media sites in the workplace (limited to, but not including Digg.com) should always be treated as gross misconduct.' Agree or disagree?"
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
			_gaq.push(['_trackEvent', 'form', 'data_entry', $(this).val()]);
		} 
	});

});
