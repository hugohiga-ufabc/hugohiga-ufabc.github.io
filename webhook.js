var url = "/";
var text = " { replies: [{ type: 'text', content: 'Roger that' }], conversation: { memory: { key: 'value' }}}";

$.ajax({
    data: $.response.setBody(JSON.stringify(text)),
    dataType: 'json',
    processData: false,
    type: 'POST',
    url: url
});
