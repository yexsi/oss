<!--粘贴自带版权信息-->
<script language="javascript" type="text/javascript">
jQuery(document).on('copy', function(e)
	{
	  var selected = window.getSelection();
	  var selectedText = selected.toString().replace(/n/g, '<br>');  // Solve the line breaks conversion issue
	  var copyFooter = '<br>---------------------<br>著作权归本站www.yexsi.com所有。<br>' 
	                        + '商业转载请联系本站获得授权，非商业转载请注明出处。<br>'
	                        + '作者：野肆　YExSi<br>源地址：' + document.location.href
	                        + '<br>来源：野　X　肆<br>© 版权声明：本文为本站原创文章，转载请附上原文链接！';
	  var copyHolder = $('<div>', {id: 'temp', html: selectedText + copyFooter, style: {position: 'absolute', left: '-99999px'}});
	    
	  $('body').append(copyHolder);
	  selected.selectAllChildren( copyHolder[0] );
	  window.setTimeout(function() {
	      copyHolder.remove();
	  },0);
	});
</script>