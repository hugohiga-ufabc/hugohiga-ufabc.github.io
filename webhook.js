var url = "/";
var text = " { replies: [{ type: 'text', content: 'Roger that' }], conversation: { memory: { key: 'value' }}}";

$.ajax({
    data: JSON.stringify(text),
    dataType: 'json',
    processData: false,
    type: 'POST',
    url: url
});
