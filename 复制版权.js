<script>
        let oDiv = document.querySelector('div');
        oDiv.oncopy = function(e) { // 复制事件
            e.preventDefault();
            let copyMsg = window .getSelection() + '商业转载请注明出处。'; // window .getSelection() 表示选择的内容
            e.clipboardData.setData("Text", copyMsg); // 将复制信息添加到剪切板
        }
</script>