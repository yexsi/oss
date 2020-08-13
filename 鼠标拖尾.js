1 <!DOCTYPE html>
2 <html>
3     <head>
4         <meta charset="UTF-8">
5         <title>鼠标彩色拖尾小效果</title>
6         <meta name="author" content="郭菊锋/702004176@qq.com"/>
7         <style type="text/css">
8             *{margin: 0;padding: 0;}
9             body div{
10                 position: absolute;
11                 width: 10px;
12                 height: 10px;
13                 /*margin: 10px;*/
14                 /*background: rgb(255,255,255);*/
15             }
16         </style>
17         <script type="text/javascript">
18             window.onload = function(){
19                 function getColor(){
20                     var oMath = Math.floor(Math.random()*255);
21 //                    console.log(maTh)
22                     var rgb = "rgb("+
23                     Math.floor(Math.random()*255)+","+
24                     Math.floor(Math.random()*255)+","+
25                     Math.floor(Math.random()*255)+")";
26                     return rgb;
27                 }
28 //                    console.log(getColor())
29                 var oDiv = document.getElementsByTagName("div");
30                 
31                 window.onmousemove = function(ev){
32                     for(var i=0;i<oDiv.length;i++){
33                         oDiv[i].style.backgroundColor = getColor();
34                     }
35                     var ev = ev || window.event;
36                     var oScrollleft = document.documentElement.scrollleft || document.body.scrollLeft;
37                     var oScrolltop = document.documentElement.scrollTop || document.body.scrollTop;
38                     var oLeft = ev.clientX + oScrollleft + "px";
39                     var oTop = ev.clientY + oScrolltop + "px";
40 //                    for(var a = oDiv.length;a>0;a++){
41 //                        oDiv[a].style.top = oDiv[a-1].style.top;
42 //                        oDiv[a].style.left = oDiv[a-1].style.left;
43                     for(var a = oDiv.length-1;a>0;a--){
44                         oDiv[a].style.top = oDiv[a-1].offsetTop + "px";
45                         oDiv[a].style.left = oDiv[a-1].offsetLeft + "px";
46                     }
47                     oDiv[0].style.top = oTop;
48                     oDiv[0].style.left = oLeft;
49                 }
50 
51             }
52         </script>
53     </head>
54     <body>
55         <h3>鼠标移进来试试</h3>
56         <div></div>
57         <div></div>
58         <div></div>
59         <div></div>
60         <div></div>
61         <div></div>
62         <div></div>
63         <div></div>
64         <div></div>
65         <div></div>
66         <div></div>
67         <div></div>
68         <div></div>
69         <div></div>
70         <div></div>
71         <div></div>
72         <div></div>
73         <div></div>
74         <div></div>
75         <div></div>
76         <div></div>
77         <div></div>
78         <div></div>
79         <div></div>
80         <div></div>
81         <div></div>
82         <div></div>
83         <div></div>
84         <div></div>
85         <div></div>
86         <div></div>
87         <div></div>
88         <div></div>
89         <div></div>
90         <div></div>
91         <div></div>
92         <div></div>
93         <div></div>
94         <div></div>
95         <div></div>
96         <div></div>
97         <div></div>
98         <div></div>
99         <div></div>
100         <div></div>
101         <div></div>
102         <div></div>
103         <div></div>
104         <div></div>
105         <div></div>
106         <div></div>
107         <div></div>
108         <div></div>
109         <div></div>
110         <div></div>
111         <div></div>
112         <div></div>
113         <div></div>
114         <div></div>
115         <div></div>
116         <div></div>
117     </body>
118 </html>