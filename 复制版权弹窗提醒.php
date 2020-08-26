function zm_copyright_tips() {
 echo '<link rel="stylesheet" type="text/css" rel="external nofollow" target="_blank" href="https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.css"  >';
 echo '<script src="https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.js"></script>';
 echo '<script>document.body.oncopy = function() { swal("复制成功！", "转载请务必保留原文链接，申明来源，谢谢合作！！","success");};</script>';
}
add_action( 'wp_footer', 'zm_copyright_tips', 100 );

// 添加到当前主题模板函数functions.php文件最后即可