function exportArticle() {
    console.log('csdn exportArticle');
    var title = '# ' +  $('div.article-title-box h1').text();
    var content = $('div#article_content').html();
    var turndownService = new window.TurndownService();
    var markdown = turndownService.turndown(content);
    markdown = title + '\n' + markdown;
    $textarea_content = $('<textarea name="content" id="" cols="30" rows="10" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;">' + markdown + '</textarea>');
    $('div.article-title-box').append($textarea_content);
    $textarea_content.select();
    var isSuccess = document.execCommand('copy');
    if(isSuccess){
        alert('导出文章到粘贴板成功！！！');
    }else {
        alert('导出文章内容失败，请重试！！！');
    }
    console.log(markdown);


}