let domtoimage = require('dom-to-image');
require('./signa.css');
let data = require('./signa.json');
let signaTemp = require('./signa.hbs');
let signaImage = require('./nustya/main_template.png');

module.exports = function(container) {
    $(container).html(signaTemp(data));

    function base_url() {
        let arr = window.location.pathname.split('/');
        arr.pop();
        return arr.join('/');
    }

    let imagePath = signaImage;
    let fontPath = base_url() + '/fonts/Annabelle.ttf';
    let $signa = $('#signa');
    $signa.attr('src', imagePath);
    $('head').append('<style type="text/css">@font-face { font-family:"Custom"; src: url("' + fontPath + '") format("truetype"); }</style>');
    $('#downloader').bind('click', function(e) {
        let node = document.getElementById('signa-wrapper');
        domtoimage.toJpeg(node, {
            quality: 1,
            width: $signa.width(),
            height: $signa.height(),
            bgcolor: '#FF'
        }).then(function(dataUrl) {
            let link = document.createElement('a');
            let d = new Date();
            link.download = 'signa_' + d.getFullYear() + d.getMonth() + d.getDate() + '_' + (d.getTime() % (24 * 1000)) + '.jpg';
            link.href = dataUrl;
            link.click();
        });
    });
    $('.text-writer').bind('keyup', function(e) {
        let $this = $(this);
        let ids = $this.attr('id').split('-');
        ids.shift();
        ids = ids.join('-');
        let $textLayerBlock = $('#' + ids);
        let text = $this.val();
        $textLayerBlock.html(text);
    });

}
