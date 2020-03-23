tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.dh-toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.dh-toc-content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h2, h3',
    headingsOffset: -340,
});


// url 클립보드 복사
var url = document.location.href;

new Clipboard('.copyurl', {
  text: function() {
    return url;
  }
});

function urlalert() {
    alert('URL이 클립보드에 복사되었습니다.');
}