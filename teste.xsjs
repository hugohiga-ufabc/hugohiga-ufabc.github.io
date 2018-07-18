var body = JSON.parse($.request.body.asString());
var conversationId = body.conversation.id;
var intents = body.nlp.intents;
var intent;

if (!intents[0]) {
	intent = "none";
} else {
	intent = intents[0].slug;
}

var serviceResponse = {};

switch (intent) {
	case "intent01":
	case "intent02":
		var product = body.conversation.memory.product.raw;
		core.upsertConversationTable(conversationId, "PRODUCT", product);
		break;
		
	case "intent03":
		var organization = body.conversation.memory.organization.raw;
		core.upsertConversationTable(conversationId, "ORGANIZATION", organization);
		break;
		
	case "kik-image-url":
	    var url = body.nlp.entities.url[0].raw;
	    var imageData = core.getKikImage(url);
		core.upsertConversationTable(conversationId, "ATTACHMENT", imageData);
		break;
		
	case "yes":
	    core.createTicket(conversationId);

        break;
	default:
		serviceResponse.replies = core.defaultErrorResponse();
		break;
}

$.response.contentType = "application/json";
$.response.setBody(serviceResponse);
