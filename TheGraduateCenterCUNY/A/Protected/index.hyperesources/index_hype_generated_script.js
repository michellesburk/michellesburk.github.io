//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),true==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"245"},{name:"StickyNav",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"246"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu2');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"250"},{name:"passwordValidator",source:"function(hypeDocument, element, event) {\t  var password = document.getElementById(\"password\").childNodes[1].value\n    \t\n    \t \n    if (password == \"CUNYOHOBarrel\"){\n    \n   hypeDocument.showSceneNamed('Homepage', hypeDocument.kSceneTransitionCrossfade, 1.1)\n    }\n\t\n}",identifier:"260"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"117":{p:1,n:"Map.png",g:"227",o:true,t:"@1x"},"72":{p:1,n:"Group%2030_2x.png",g:"81",o:true,t:"@2x"},"68":{p:1,n:"Group%2063_2x.png",g:"77",o:true,t:"@2x"},"121":{p:1,n:"Button%20Hover_2x.jpg",g:"233",o:true,t:"@2x"},"73":{p:1,n:"Group%2020.png",g:"83",o:true,t:"@1x"},"69":{p:1,n:"Group%2057.png",g:"79",o:true,t:"@1x"},"118":{p:1,n:"Map_2x.png",g:"227",o:true,t:"@2x"},"122":{p:1,n:"Desktop.png",g:"5",o:true,t:"@1x"},"74":{p:1,n:"Group%2020_2x.png",g:"83",o:true,t:"@2x"},"75":{p:1,n:"Upcoming%20Events.png",g:"88",o:true,t:"@1x"},"119":{p:1,n:"Featured%20Article.png",g:"230",t:"@1x"},"123":{p:1,n:"Desktop_2x.png",g:"5",o:true,t:"@2x"},"80":{p:1,n:"Group%2028%20Copy_2x.png",g:"96",o:true,t:"@2x"},"76":{p:1,n:"Upcoming%20Events_2x.png",g:"88",o:true,t:"@2x"},"81":{p:1,n:"Group%2028%20Copy%202.png",g:"98",o:true,t:"@1x"},"77":{p:1,n:"Group%2028.png",g:"94",o:true,t:"@1x"},"124":{p:1,n:"Academics%20Dropdown.png",g:"241",o:true,t:"@1x"},"82":{p:1,n:"Group%2028%20Copy%202_2x.png",g:"98",o:true,t:"@2x"},"78":{p:1,n:"Group%2028_2x.png",g:"94",o:true,t:"@2x"},"83":{p:1,n:"Group%2025.jpg",g:"100",o:true,t:"@1x"},"79":{p:1,n:"Group%2028%20Copy.png",g:"96",o:true,t:"@1x"},"125":{p:1,n:"Academics%20Dropdown_2x.png",g:"241",o:true,t:"@2x"},"84":{p:1,n:"Group%2025_2x.jpg",g:"100",o:true,t:"@2x"},"126":{p:1,n:"1440%20-%20Sticky%20Nav__2x.png",g:"243",t:"@2x"},"85":{p:1,n:"White.jpg",g:"102",o:true,t:"@1x"},"130":{p:1,n:"Footer_2x.jpg",g:"146",o:true,t:"@2x"},"86":{p:1,n:"White_2x.jpg",g:"102",o:true,t:"@2x"},"90":{p:1,n:"Desktop-2_2x.jpg",g:"137",o:true,t:"@2x"},"127":{p:1,n:"ExpandedStickyNav.png",g:"247",o:true,t:"@1x"},"131":{n:"Hero%20Video%20Concept%20A.mp4",g:"34",t:"video/mp4"},"87":{p:1,n:"Join%20Us.png",g:"135",o:true,t:"@1x"},"91":{p:1,n:"Desktop%20Copy%204.jpg",g:"139",o:true,t:"@1x"},"88":{p:1,n:"Join%20Us_2x.png",g:"135",o:true,t:"@2x"},"92":{p:1,n:"Desktop%20Copy%204_2x.jpg",g:"139",o:true,t:"@2x"},"10":{p:1,n:"Group%2042_2x.png",g:"26",o:true,t:"@2x"},"128":{p:1,n:"ExpandedStickyNav_2x.png",g:"247",o:true,t:"@2x"},"132":{p:1,n:"1440%20-%20Program%20Detail%20-%20Concept%20A__2x.jpg",g:"190",t:"@2x"},"89":{p:1,n:"Desktop-2.jpg",g:"137",o:true,t:"@1x"},"11":{p:1,n:"Group%2040.png",g:"28",o:true,t:"@1x"},"93":{p:1,n:"Desktop%20Copy%203.jpg",g:"141",o:true,t:"@1x"},"94":{p:1,n:"Desktop%20Copy%203_2x.jpg",g:"141",o:true,t:"@2x"},"12":{p:1,n:"Group%2040_2x.png",g:"28",o:true,t:"@2x"},"129":{p:1,n:"Footer.jpg",g:"146",o:true,t:"@1x"},"133":{p:1,n:"100%2B%20Programs%20Open%20t.png",g:"183",o:true,t:"@1x"},"95":{p:1,n:"%E2%80%93%20Plutarch.png",g:"50",o:true,t:"@1x"},"13":{p:1,n:"Group%2035.png",g:"30",o:true,t:"@1x"},"96":{p:1,n:"%E2%80%93%20Plutarch_2x.png",g:"50",o:true,t:"@2x"},"14":{p:1,n:"Group%2035_2x.png",g:"30",o:true,t:"@2x"},"134":{p:1,n:"100%2B%20Programs%20Open%20t_2x.png",g:"183",o:true,t:"@2x"},"97":{p:1,n:"Group%208.jpg",g:"216",o:true,t:"@1x"},"15":{p:1,n:"Desktop-1.jpg",g:"32",o:true,t:"@1x"},"135":{p:1,n:"Explore%20Events.png",g:"251",o:true,t:"@1x"},"98":{p:1,n:"Group%208_2x.jpg",g:"216",o:true,t:"@2x"},"16":{p:1,n:"Desktop-1_2x.jpg",g:"32",o:true,t:"@2x"},"20":{p:1,n:"HeroLine2_2x.png",g:"20",o:true,t:"@2x"},"99":{p:1,n:"Group%2022.jpg",g:"220",o:true,t:"@1x"},"17":{p:1,n:"HeroLine1.png",g:"18",o:true,t:"@1x"},"21":{p:1,n:"Line%2010.png",g:"42",o:true,t:"@1x"},"136":{p:1,n:"Explore%20Events_2x.png",g:"251",o:true,t:"@2x"},"18":{p:1,n:"HeroLine1_2x.png",g:"18",o:true,t:"@2x"},"22":{p:1,n:"Line%2010_2x.png",g:"42",o:true,t:"@2x"},"19":{p:1,n:"HeroLine2.png",g:"20",o:true,t:"@1x"},"23":{p:1,n:"Line%2010%20Copy.png",g:"44",o:true,t:"@1x"},"24":{p:1,n:"Line%2010%20Copy_2x.png",g:"44",o:true,t:"@2x"},"25":{p:1,n:"Line%2010%20Copy%202.png",g:"46",o:true,t:"@1x"},"30":{p:1,n:"Screen%20Shot%202020-04-15%20at%2011.23.19%20AM_2x.png",g:"69",o:true,t:"@2x"},"26":{p:1,n:"Line%2010%20Copy%202_2x.png",g:"46",o:true,t:"@2x"},"31":{p:1,n:"REAL%20WORLD%20IMPACT%20FR.png",g:"73",o:true,t:"@1x"},"27":{p:1,n:"Rectangle.jpg",g:"56",o:true,t:"@1x"},"32":{p:1,n:"REAL%20WORLD%20IMPACT%20FR_2x.png",g:"73",o:true,t:"@2x"},"28":{p:1,n:"Rectangle_2x.jpg",g:"56",o:true,t:"@2x"},"100":{p:1,n:"Group%2022_2x.jpg",g:"220",o:true,t:"@2x"},"33":{p:1,n:"Open%20to%20the%20Public.png",g:"90",o:true,t:"@1x"},"29":{p:1,n:"Screen%20Shot%202020-04-15%20at%2011.23.19%20AM.png",g:"69",o:true,t:"@1x"},"34":{p:1,n:"Open%20to%20the%20Public_2x.png",g:"90",o:true,t:"@2x"},"101":{p:1,n:"Group%2010.png",g:"224",o:true,t:"@1x"},"35":{p:1,n:"Group%2060.jpg",g:"92",o:true,t:"@1x"},"102":{p:1,n:"Group%2010_2x.png",g:"224",o:true,t:"@2x"},"40":{p:1,n:"Line%208%20Copy.png",g:"168",o:true,t:"@1x"},"36":{p:1,n:"Group%2060_2x.jpg",g:"92",o:true,t:"@2x"},"41":{p:1,n:"Line%208%20Copy_2x.png",g:"168",o:true,t:"@2x"},"37":{p:1,n:"We%20Believe%20That%20Know.png",g:"133",o:true,t:"@1x"},"103":{p:1,n:"White-1.jpg",g:"225",o:true,t:"@1x"},"42":{p:1,n:"thegraduatecenter_75566998_2326973477594794_5623016203109196247_n.png",g:"181",o:true,t:"@1x"},"38":{p:1,n:"We%20Believe%20That%20Know_2x.png",g:"133",o:true,t:"@2x"},"0":{p:1,n:"The%20Graduate%20Center.png",g:"11",o:true,t:"@1x"},"1":{p:1,n:"The%20Graduate%20Center_2x.png",g:"11",o:true,t:"@2x"},"43":{p:1,n:"thegraduatecenter_75566998_2326973477594794_5623016203109196247_n_2x.png",g:"181",o:true,t:"@2x"},"39":{p:1,n:"Line%208.png",g:"166",t:"@1x"},"2":{p:1,n:"APublicGradSchool.png",g:"13",o:true,t:"@1x"},"104":{p:1,n:"White-1_2x.jpg",g:"225",o:true,t:"@2x"},"3":{p:1,n:"APublicGradSchool_2x.png",g:"13",o:true,t:"@2x"},"44":{p:1,n:"Mask-3.png",g:"185",o:true,t:"@1x"},"4":{p:1,n:"REFERENCE.jpg",g:"15",t:"@1x"},"45":{p:1,n:"Mask-3_2x.png",g:"185",o:true,t:"@2x"},"5":{p:1,n:"How%20The%20Graduate%20Cen.png",g:"22",o:true,t:"@1x"},"105":{p:1,n:"www.arch2o.com-5523721933868545.jpg",g:"105",o:true,t:"@1x"},"6":{p:1,n:"How%20The%20Graduate%20Cen_2x.png",g:"22",o:true,t:"@2x"},"46":{p:1,n:"%E2%80%9C.png",g:"48",o:true,t:"@1x"},"50":{p:1,n:"Mask-4.jpg",g:"60",o:true,t:"@1x"},"7":{p:1,n:"Group%2047.png",g:"24",o:true,t:"@1x"},"8":{p:1,n:"Group%2047_2x.png",g:"24",o:true,t:"@2x"},"47":{p:1,n:"%E2%80%9C_2x.png",g:"48",o:true,t:"@2x"},"110":{p:1,n:"LOCATION_2x.png",g:"115",o:true,t:"@2x"},"106":{p:1,n:"www.arch2o.com-5523721933868545_2x.jpg",g:"105",o:true,t:"@2x"},"51":{p:1,n:"Mask-4_2x.jpg",g:"60",o:true,t:"@2x"},"9":{p:1,n:"Group%2042.png",g:"26",o:true,t:"@1x"},"48":{p:1,n:"The%20very%20spring%20and.png",g:"54",o:true,t:"@1x"},"52":{p:1,n:"Mask.jpg",g:"7",o:true,t:"@1x"},"111":{p:1,n:"The%20GC%20is%20located%20in.png",g:"107",o:true,t:"@1x"},"107":{p:1,n:"Living%20%26%20Learning%20in.png",g:"117",o:true,t:"@1x"},"49":{p:1,n:"The%20very%20spring%20and_2x.png",g:"54",o:true,t:"@2x"},"53":{p:1,n:"Rectangle-3.jpg",g:"71",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"54":{p:1,n:"Rectangle-3_2x.jpg",g:"71",o:true,t:"@2x"},"-2":{n:"blank.gif"},"112":{p:1,n:"The%20GC%20is%20located%20in_2x.png",g:"107",o:true,t:"@2x"},"55":{p:1,n:"Mask-1.jpg",g:"143",o:true,t:"@1x"},"108":{p:1,n:"Living%20%26%20Learning%20in_2x.png",g:"117",o:true,t:"@2x"},"56":{p:1,n:"Mask-1_2x.jpg",g:"143",o:true,t:"@2x"},"60":{p:1,n:"Rectangle%2012_2x.png",g:"124",o:true,t:"@2x"},"113":{p:1,n:"BG.jpg",g:"121",o:true,t:"@1x"},"109":{p:1,n:"LOCATION.png",g:"115",o:true,t:"@1x"},"57":{p:1,n:"PauseButton.png",g:"210",o:true,t:"@1x"},"61":{p:1,n:"Rectangle%2012%20Copy.png",g:"218",o:true,t:"@1x"},"58":{p:1,n:"PauseButton_2x.png",g:"210",o:true,t:"@2x"},"62":{p:1,n:"Rectangle%2012%20Copy_2x.png",g:"218",o:true,t:"@2x"},"114":{p:1,n:"BG_2x.jpg",g:"121",o:true,t:"@2x"},"59":{p:1,n:"Rectangle%2012.png",g:"124",o:true,t:"@1x"},"63":{p:1,n:"Who%20We%20Are.png",g:"9",o:true,t:"@1x"},"64":{p:1,n:"Who%20We%20Are_2x.png",g:"9",o:true,t:"@2x"},"115":{p:1,n:"The%20City%20is%20Our%20Camp.png",g:"109",o:true,t:"@1x"},"65":{p:1,n:"NEWS%20%26%20FINDINGS.png",g:"75",o:true,t:"@1x"},"116":{p:1,n:"The%20City%20is%20Our%20Camp_2x.png",g:"109",o:true,t:"@2x"},"70":{p:1,n:"Group%2057_2x.png",g:"79",o:true,t:"@2x"},"66":{p:1,n:"NEWS%20%26%20FINDINGS_2x.png",g:"75",o:true,t:"@2x"},"120":{p:1,n:"Button%20Hover.jpg",g:"233",o:true,t:"@1x"},"71":{p:1,n:"Group%2030.png",g:"81",o:true,t:"@1x"},"67":{p:1,n:"Group%2063.png",g:"77",o:true,t:"@1x"}},h,[],d,[{n:"Untitled Scene",o:"254",X:[0]},{n:"Homepage",o:"1",X:[1]},{n:"Program Detail",o:"39",X:[2]}],[{o:"256",p:"600px",cA:false,Y:1440,Z:840,L:[],c:"#FFFFFF",bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["262","261"],n:"Untitled Layout","_":0,v:{"261":{c:193,d:28,I:"None",J:"None",K:"None",L:"None",M:0,i:"PWForm",w:"<div id=\"password\" class=\"password\">\n  <input type=\"password\" id=\"answer\" class=\"textInput\" placeholder=\"Password\">\n \n</div>\n",N:0,A:"#9A9FA4",x:"visible",j:"absolute",B:"#9A9FA4",k:"div",O:0,C:"#9A9FA4",z:1,P:0,D:"#9A9FA4",a:620,b:407},"262":{b:404,z:2,K:"Solid",c:48,L:"Solid",d:14,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,aG:"Login",P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"260"}]},F:"center",G:"#000000",aP:"pointer",w:"Submit",x:"visible",I:"Solid",a:758,y:"preserve",J:"Solid"}}},{o:"3",p:"600px",cA:false,Y:1440,Z:8459,L:[],c:"#FFFFFF",bY:1,d:1440,U:{},T:{"156":{i:"156",n:"How The GC Stands Out",z:3.23,b:[],a:[{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"337"},{f:"c",y:1.08,z:1,i:"e",e:1,s:0,o:"335"},{f:"c",y:1.15,z:1,i:"e",e:1,s:0,o:"342"},{f:"c",y:1.24,z:1,i:"cQ",e:1.05,s:1,o:"340"},{f:"c",y:1.24,z:1,i:"cR",e:1.05,s:1,o:"340"},{f:"c",y:1.24,z:1,i:"e",e:1,s:0,o:"340"},{f:"c",y:2,z:1,i:"e",e:1,s:0,o:"343"},{f:"c",y:2,z:1,i:"e",e:1,s:0,o:"338"},{y:2,i:"e",s:1,z:0,o:"337",f:"c"},{f:"c",y:2.08,z:1,i:"e",e:1,s:0,o:"341"},{y:2.08,i:"e",s:1,z:0,o:"335",f:"c"},{y:2.15,i:"e",s:1,z:0,o:"342",f:"c"},{f:"c",y:2.19,z:1,i:"e",e:1,s:0,o:"339"},{y:2.24,i:"cQ",s:1.05,z:0,o:"340",f:"c"},{y:2.24,i:"cR",s:1.05,z:0,o:"340",f:"c"},{y:2.24,i:"e",s:1,z:0,o:"340",f:"c"},{y:3,i:"e",s:1,z:0,o:"343",f:"c"},{y:3,i:"e",s:1,z:0,o:"338",f:"c"},{y:3.08,i:"e",s:1,z:0,o:"341",f:"c"},{f:"c",y:3.13,z:0.1,i:"e",e:1,s:0,o:"336"},{y:3.19,i:"e",s:1,z:0,o:"339",f:"c"},{y:3.23,i:"e",s:1,z:0,o:"336",f:"c"}],f:30},"205":{i:"205",n:"Sticky Nav",z:0,b:[],a:[],f:30},"236":{i:"236",n:"Hover States 2",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"300"},{y:0.05,i:"e",s:1,z:0,o:"300",f:"c"}],f:30},"171":{i:"171",n:"Location Module",z:2.19,b:[],a:[{f:"c",y:0,z:1.15,i:"e",e:1,s:0,o:"313"},{f:"c",y:0,z:1.15,i:"cR",e:1.05,s:1,o:"313"},{f:"c",y:0,z:1.15,i:"cQ",e:1.05,s:1,o:"313"},{f:"c",y:0.1,z:1,i:"e",e:1,s:0,o:"309"},{f:"c",y:0.19,z:1,i:"e",e:1,s:0,o:"306"},{f:"c",y:0.29,z:1,i:"e",e:1,s:0,o:"308"},{f:"c",y:1.07,z:1,i:"e",e:1,s:0,o:"310"},{y:1.1,i:"e",s:1,z:0,o:"309",f:"c"},{y:1.15,i:"cR",s:1.05,z:0,o:"313",f:"c"},{y:1.15,i:"cQ",s:1.05,z:0,o:"313",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"313",f:"c"},{f:"c",y:1.19,z:0.3,i:"e",e:1,s:0,o:"311"},{y:1.19,i:"e",s:1,z:0,o:"306",f:"c"},{y:1.29,i:"e",s:1,z:0,o:"308",f:"c"},{y:2.07,i:"e",s:1,z:0,o:"310",f:"c"},{y:2.19,i:"e",s:1,z:0,o:"311",f:"c"}],f:30},"174":{i:"174",n:"Checkerboards Timeline",z:3.15,b:[],a:[{f:"c",y:1,z:1,i:"cR",e:1.05,s:1,o:"320"},{f:"c",y:1,z:1,i:"cQ",e:1.05,s:1,o:"320"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"320"},{f:"c",y:1.15,z:0.15,i:"e",e:1,s:0,o:"321"},{y:2,i:"cR",s:1.05,z:0,o:"320",f:"c"},{y:2,i:"cQ",s:1.05,z:0,o:"320",f:"c"},{y:2,i:"e",s:1,z:0,o:"321",f:"c"},{f:"c",y:2,z:1,i:"cR",e:1.05,s:1,o:"318"},{f:"c",y:2,z:1,i:"cQ",e:1.05,s:1,o:"318"},{y:2,i:"e",s:1,z:0,o:"320",f:"c"},{f:"c",y:2,z:1,i:"e",e:1,s:0,o:"318"},{y:3,i:"cR",s:1.05,z:0,o:"318",f:"c"},{y:3,i:"cQ",s:1.05,z:0,o:"318",f:"c"},{f:"c",y:3,z:0.15,i:"e",e:1,s:0,o:"316"},{y:3,i:"e",s:1,z:0,o:"318",f:"c"},{y:3.15,i:"e",s:1,z:0,o:"316",f:"c"}],f:30},"157":{i:"157",n:"Our Programs Timeline",z:2.15,b:[],a:[{f:"c",y:0.15,z:1,i:"cR",e:1.05,s:1,o:"363"},{f:"c",y:0.15,z:1,i:"cQ",e:1.05,s:1,o:"363"},{f:"c",y:0.15,z:1,i:"e",e:1,s:0,o:"363"},{f:"c",y:1,z:0.24,i:"e",e:1,s:0,o:"361"},{f:"c",y:1.11,z:0.24,i:"e",e:1,s:0,o:"357"},{f:"c",y:1.11,z:1.04,i:"e",e:1,s:0,o:"358"},{y:1.15,i:"cR",s:1.05,z:0,o:"363",f:"c"},{y:1.15,i:"cQ",s:1.05,z:0,o:"363",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"363",f:"c"},{f:"c",y:1.21,z:0.24,i:"e",e:1,s:0,o:"364"},{y:1.24,i:"e",s:1,z:0,o:"361",f:"c"},{y:2.05,i:"e",s:1,z:0,o:"357",f:"c"},{y:2.15,i:"e",s:1,z:0,o:"364",f:"c"},{y:2.15,i:"e",s:1,z:0,o:"358",f:"c"}],f:30},"152":{i:"152",n:"Who We Are Timeline",z:2.05,b:[],a:[{f:"c",y:0.15,z:1,i:"e",e:1,s:0,o:"285"},{f:"c",y:0.25,z:0.3,i:"e",e:1,s:0,o:"287"},{f:"c",y:1.05,z:1,i:"e",e:1,s:0,o:"283"},{y:1.15,i:"e",s:1,z:0,o:"285",f:"c"},{y:1.25,i:"e",s:1,z:0,o:"287",f:"c"},{y:2.05,i:"e",s:1,z:0,o:"283",f:"c"}],f:30},"38":{i:"38",n:"Hero Video",z:1.15,b:[],a:[{f:"c",y:0,z:1,i:"cQ",e:1.1000000000000001,s:1,o:"348"},{f:"c",y:0,z:1,i:"cR",e:1.1000000000000001,s:1,o:"348"},{f:"c",y:0.15,z:1,i:"e",e:1,s:0,o:"350"},{f:"c",y:0.15,z:1,i:"e",e:1,s:0,o:"352"},{y:1,i:"cR",s:1.1000000000000001,z:0,o:"348",f:"c"},{y:1,i:"cQ",s:1.1000000000000001,z:0,o:"348",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"352",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"350",f:"c"}],f:30},"177":{i:"177",n:"Sock Timeline",z:3,b:[],a:[{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"327"},{f:"c",y:1.12,z:1,i:"e",e:1,s:0,o:"325"},{f:"c",y:2,z:0.24,i:"e",e:1,s:0,o:"329"},{y:2,i:"e",s:1,z:0,o:"327",f:"c"},{f:"c",y:2.03,z:0.23,i:"e",e:1,s:0,o:"326"},{f:"c",y:2.06,z:0.24,i:"e",e:1,s:0,o:"324"},{y:2.12,i:"e",s:1,z:0,o:"325",f:"c"},{y:2.24,i:"e",s:1,z:0,o:"329",f:"c"},{y:2.26,i:"e",s:1,z:0,o:"326",f:"c"},{y:3,i:"e",s:1,z:0,o:"324",f:"c"}],f:30},"237":{i:"237",n:"Nav Hover State",z:0.03,b:[],a:[{f:"c",y:0,z:0.03,i:"e",e:1,s:0,o:"354"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[]},o:"237"},{y:0.03,i:"e",s:1,z:0,o:"354",f:"c"}],f:30},"161":{i:"161",n:"News Module",z:3.15,b:[],a:[{f:"c",y:0.15,z:1.15,i:"e",e:1,s:0,o:"296"},{f:"c",y:0.26,z:1.23,i:"e",e:1,s:0,o:"295"},{f:"c",y:1.02,z:0.28,i:"cQ",e:1.05,s:1,o:"302"},{f:"c",y:1.02,z:0.28,i:"cR",e:1.05,s:1,o:"302"},{f:"c",y:1.02,z:0.28,i:"e",e:1,s:0,o:"302"},{f:"c",y:1.09,z:0.28,i:"e",e:1,s:0,o:"292"},{f:"c",y:1.2,z:1,i:"e",e:1,s:0,o:"291"},{f:"c",y:1.28,z:1,i:"e",e:1,s:0,o:"298"},{y:2,i:"cR",s:1.05,z:0,o:"302",f:"c"},{y:2,i:"cQ",s:1.05,z:0,o:"302",f:"c"},{y:2,i:"e",s:1,z:0,o:"302",f:"c"},{y:2,i:"e",s:1,z:0,o:"296",f:"c"},{y:2.07,i:"e",s:1,z:0,o:"292",f:"c"},{f:"c",y:2.08,z:1,i:"e",e:1,s:0,o:"290"},{y:2.19,i:"e",s:1,z:0,o:"295",f:"c"},{y:2.2,i:"e",s:1,z:0,o:"291",f:"c"},{y:2.28,i:"e",s:1,z:0,o:"298",f:"c"},{f:"c",y:3,z:0.15,i:"e",e:1,s:0,o:"293"},{y:3.08,i:"e",s:1,z:0,o:"290",f:"c"},{y:3.15,i:"e",s:1,z:0,o:"293",f:"c"}],f:30},"229":{i:"229",n:"Hover States 1",z:0.02,b:[],a:[{f:"c",y:0,z:0.02,i:"e",e:1,s:0,o:"297"},{y:0.02,i:"e",s:1,z:0,o:"297",f:"c"}],f:30},"164":{i:"164",n:"Events Timeline",z:4.15,b:[],a:[{f:"c",y:1,z:1.13,i:"e",e:1,s:0,o:"270"},{f:"c",y:1.08,z:1.13,i:"e",e:1,s:0,o:"279"},{f:"c",y:1.24,z:0.27,i:"cQ",e:1.05,s:1,o:"278"},{f:"c",y:1.24,z:0.27,i:"cR",e:1.05,s:1,o:"278"},{f:"c",y:1.24,z:0.27,i:"e",e:1,s:0,o:"278"},{y:2.13,i:"e",s:1,z:0,o:"270",f:"c"},{f:"c",y:2.17,z:0.08,i:"e",e:1,s:0,o:"280"},{y:2.21,i:"cQ",s:1.05,z:0,o:"278",f:"c"},{y:2.21,i:"cR",s:1.05,z:0,o:"278",f:"c"},{y:2.21,i:"e",s:1,z:0,o:"279",f:"c"},{y:2.21,i:"e",s:1,z:0,o:"278",f:"c"},{y:2.25,i:"e",s:1,z:0,o:"280",f:"c"},{f:"c",y:3.06,z:0.3,i:"e",e:1,s:0,o:"271"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"269"},{y:4.06,i:"e",s:1,z:0,o:"271",f:"c"},{y:4.15,i:"e",s:1,z:0,o:"269",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:12.12,b:[],a:[{y:0,p:1,i:"Video Track",z:12.12,o:"348",f:"a"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"246"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["355","366","264","263","281","265","266","267","365","348","346","345","347","344","354","352","351","350","349","314","288","282","285","284","287","286","283","330","337","331","332","333","341","340","334","335","342","339","343","338","336","363","362","356","322","360","359","358","361","357","364","294","289","303","302","301","291","295","296","298","292","299","297","290","304","300","293","268","270","279","278","277","280","271","276","274","275","273","272","269","307","305","313","312","309","306","308","310","311","320","319","315","321","318","317","316","328","323","327","325","329","326","324","353"],n:"Untitled Layout","_":1,v:{"343":{h:"183",p:"no-repeat",x:"visible",a:655,q:"100% 100%",b:295,j:"absolute",dB:"img",z:7,k:"div",bF:"330",d:44,c:244,r:"inline",e:0},"264":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"263",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"328":{h:"143",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"323",z:1,k:"div",dB:"img",d:575,c:1440,r:"inline"},"351":{k:"div",x:"hidden",c:734,d:58,z:3,a:353,j:"absolute",bF:"345",b:363},"272":{h:"98",p:"no-repeat",x:"visible",a:904,q:"100% 100%",b:3,j:"absolute",bF:"271",z:3,k:"div",dB:"img",d:239,c:376,r:"inline"},"336":{h:"32",p:"no-repeat",x:"visible",a:501,q:"100% 100%",b:425,j:"absolute",dB:"img",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"39"}]},z:2,k:"div",d:50,bF:"330",c:220,e:0,aP:"pointer",r:"inline"},"280":{h:"100",p:"no-repeat",x:"visible",a:648,q:"100% 100%",b:256,j:"absolute",dB:"img",z:5,k:"div",bF:"268",d:374,c:644,r:"inline",e:0},"344":{c:121,d:38,I:"None",J:"None",K:"None",g:"rgba(232, 235, 237, 0.000)",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:31,P:0,D:"#D8DDE4",aC:{a:[{b:"237",p:3,z:true,symbolOid:"2"}]},a:531,aD:{a:[{b:"237",p:3,z:false,symbolOid:"2"}]},b:113},"265":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"263",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"329":{h:"137",p:"no-repeat",x:"visible",a:357,q:"100% 100%",b:345,j:"absolute",dB:"img",z:4,k:"div",bF:"323",d:50,c:220,r:"inline",e:0},"352":{h:"18",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"351",d:58,c:734,r:"inline",e:0},"273":{h:"166",p:"no-repeat",x:"visible",a:858,q:"100% 100%",b:2,j:"absolute",bF:"271",z:5,k:"div",dB:"img",d:244,c:3,r:"inline"},"337":{h:"22",p:"no-repeat",x:"visible",a:375,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"330",d:22,c:474,r:"inline",e:0},"360":{h:"56",p:"no-repeat",x:"visible",a:628,q:"100% 100%",b:0,j:"absolute",bF:"356",z:7,k:"div",dB:"img",d:720,c:812,r:"none"},"281":{h:"15",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:8419,r:"none",e:0.2707179588607595},"345":{x:"visible",k:"div",cW:{a:[{b:"38",p:3,z:false,symbolOid:"2"}]},c:1486,d:842,z:22,cX:{a:[{p:0}]},a:0,j:"absolute",b:84},"266":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"263",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"353":{h:"146",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:8023,j:"absolute",dB:"img",z:2,k:"div",c:1440,d:436,r:"inline"},"274":{h:"94",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:3,j:"absolute",bF:"271",z:1,k:"div",dB:"img",d:243,c:376,r:"inline"},"338":{h:"251",p:"no-repeat",x:"visible",a:715,q:"100% 100%",b:355,j:"absolute",dB:"img",z:6,k:"div",bF:"330",d:12,c:115,r:"inline",e:0},"361":{h:"48",p:"no-repeat",x:"visible",a:48,q:"100% 100%",b:541,j:"absolute",dB:"img",z:8,k:"div",bF:"356",d:12,c:16,r:"inline",e:0},"282":{x:"visible",k:"div",cW:{a:[{b:"152",p:3,z:false,symbolOid:"2"},{b:"205",p:3,z:false,symbolOid:"2"}]},c:1440,d:575,z:19,a:0,j:"absolute",b:926},"346":{k:"div",x:"hidden",c:1440,d:842,z:1,a:0,j:"absolute",bF:"345",b:0},"267":{b:7,z:7,K:"None",c:119,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"263",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"39"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Program Detail",x:"visible",I:"None",a:727,y:"preserve",J:"None"},"290":{h:"79",p:"no-repeat",x:"visible",a:845,q:"100% 100%",b:572,j:"absolute",dB:"img",z:5,k:"div",bF:"289",d:255,c:439,r:"inline",e:0},"354":{h:"241",p:"no-repeat",x:"visible",a:530,q:"100% 100%",b:114,j:"absolute",dB:"img",z:29,k:"div",c:324,d:282,r:"inline",e:0},"275":{h:"96",p:"no-repeat",x:"visible",a:452,q:"100% 100%",b:3,j:"absolute",bF:"271",z:2,k:"div",dB:"img",d:242,c:376,r:"inline"},"339":{h:"24",p:"no-repeat",x:"visible",a:978,q:"100% 100%",b:132,j:"absolute",dB:"img",z:3,k:"div",bF:"330",d:241,c:254,r:"inline",e:0},"362":{k:"div",x:"hidden",c:629,d:721,z:1,a:0,j:"absolute",bF:"356",b:0},"283":{h:"11",p:"no-repeat",x:"visible",a:427,q:"100% 100%",b:326,j:"absolute",dB:"img",z:7,k:"div",bF:"282",d:68,c:585,r:"inline",e:0},"347":{c:1438,d:838,I:"None",J:"None",K:"None",g:"rgba(0, 0, 0, 0.200)",L:"None",M:0,N:0,bF:"346",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:1,b:3},"268":{x:"visible",k:"div",cW:{a:[{b:"164",p:3,z:false,symbolOid:"2"}]},c:1292,d:1179,z:9,a:80,j:"absolute",b:4028},"291":{h:"81",p:"no-repeat",x:"visible",a:845,q:"100% 100%",b:103,j:"absolute",dB:"img",z:7,k:"div",bF:"289",d:201,c:437,r:"inline",e:0},"355":{h:"243",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-1103,a:0,j:"absolute",z:30,k:"div",dB:"img",d:120,c:1440,r:"inline"},"276":{h:"168",p:"no-repeat",x:"visible",a:420,q:"100% 100%",b:0,j:"absolute",bF:"271",z:6,k:"div",dB:"img",d:246,c:2,r:"inline"},"363":{h:"60",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"362",d:720,c:628,cQ:1,e:0,r:"inline",cR:1},"284":{k:"div",x:"hidden",c:90,d:12,z:2,a:675,j:"absolute",bF:"282",b:185},"348":{aR:"1",x:"visible",bE:"34",a:0,b:0,j:"absolute",bF:"346",z:1,k:"video",aO:"0",d:842,c:1486,cQ:1,cR:1,aQ:"1",aH:"1"},"269":{h:"102",p:"no-repeat",x:"visible",a:529,q:"100% 100%",b:1129,j:"absolute",dB:"img",z:7,k:"div",bF:"268",d:50,c:220,r:"inline",e:0},"292":{h:"83",p:"no-repeat",x:"visible",a:297,q:"100% 100%",b:479,j:"absolute",dB:"img",z:8,k:"div",bF:"289",d:262,c:459,r:"inline",e:0},"356":{x:"visible",k:"div",cW:{a:[{b:"157",p:3,z:false,symbolOid:"2"}]},c:1440,d:721,z:13,a:0,j:"absolute",b:2179},"277":{k:"div",x:"hidden",c:1022,d:620,z:3,a:2,j:"absolute",bF:"268",b:135},"364":{h:"50",p:"no-repeat",x:"visible",a:80,q:"100% 100%",b:658,j:"absolute",dB:"img",z:9,k:"div",bF:"356",d:12,c:85,r:"inline",e:0},"285":{h:"9",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"284",d:12,c:90,r:"inline",e:0},"349":{k:"div",x:"hidden",c:660,d:58,z:5,a:390,j:"absolute",bF:"345",b:445},"293":{h:"225",p:"no-repeat",x:"visible",a:608,q:"100% 100%",b:875,j:"absolute",dB:"img",z:2,k:"div",bF:"289",d:50,c:220,r:"inline",e:0},"357":{h:"54",p:"no-repeat",x:"visible",a:80,q:"100% 100%",b:541,j:"absolute",dB:"img",z:10,k:"div",bF:"356",d:91,c:324,r:"inline",e:0},"278":{h:"92",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"277",d:620,c:1022,cQ:0,e:0,r:"inline",cR:0},"365":{w:"",h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:25,k:"div",c:1440,d:262,r:"inline"},"286":{k:"div",x:"hidden",c:598,d:85,z:3,a:421,j:"absolute",bF:"282",b:219},"294":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"289",z:1,k:"div",dB:"img",d:1025,c:1440,r:"inline"},"358":{x:"visible",k:"div",c:459,d:287,z:11,e:0,a:806,j:"absolute",bF:"356",b:220},"279":{h:"90",p:"no-repeat",x:"visible",a:445,q:"100% 100%",b:34,j:"absolute",dB:"img",z:1,k:"div",bF:"268",d:35,c:388,r:"inline",e:0},"366":{h:"247",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-983,j:"absolute",dB:"img",z:32,k:"div",c:1440,d:690,r:"inline"},"287":{h:"13",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"286",d:85,c:598,r:"inline",e:0},"295":{h:"73",p:"no-repeat",x:"visible",a:114,q:"100% 100%",b:106,j:"absolute",dB:"img",z:13,k:"div",bF:"289",d:265,c:135,r:"inline",e:0},"359":{h:"224",p:"no-repeat",x:"visible",a:-4,q:"100% 100%",b:0,j:"absolute",bF:"358",z:3,k:"div",dB:"img",d:288,c:463,r:"inline"},"288":{h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"282",z:1,k:"div",dB:"img",d:575,c:1440,r:"inline"},"300":{h:"233",p:"no-repeat",x:"visible",a:608,q:"100% 100%",b:875,j:"absolute",dB:"img",z:3,k:"div",bF:"289",d:50,c:220,r:"inline",e:0},"296":{h:"75",p:"no-repeat",x:"visible",a:80,q:"100% 100%",b:245,j:"absolute",dB:"img",z:14,k:"div",bF:"289",d:126,c:11,r:"inline",e:0},"289":{x:"visible",k:"div",cW:{a:[{b:"161",p:3,z:false,symbolOid:"2"}]},c:1440,d:1025,z:10,a:2,j:"absolute",b:2901},"301":{x:"hidden",k:"div",c:473,d:355,z:9,e:1,a:295,j:"absolute",bF:"289",b:100},"297":{h:"230",p:"no-repeat",x:"visible",a:297,q:"100% 100%",b:508,j:"absolute",dB:"img",z:10,k:"div",bF:"289",d:96,c:432,r:"inline",e:0},"302":{x:"hidden",a:0,b:0,j:"absolute",bF:"301",c:473,k:"div",z:1,d:355,cQ:1,e:0,cR:1},"310":{h:"117",p:"no-repeat",x:"visible",a:306,q:"100% 100%",b:406,j:"absolute",dB:"img",z:4,k:"div",bF:"305",d:13,c:202,r:"inline",e:0},"298":{h:"77",p:"no-repeat",x:"visible",a:845,q:"100% 100%",b:325,j:"absolute",dB:"img",z:6,k:"div",bF:"289",d:226,c:438,r:"inline",e:0},"303":{h:"69",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"302",z:1,k:"div",dB:"img",d:355,c:473,r:"inline"},"311":{h:"227",p:"no-repeat",x:"visible",a:169,q:"100% 100%",b:448,j:"absolute",dB:"img",z:9,k:"div",bF:"305",d:142,c:476,r:"inline",e:0},"299":{c:430,d:107,I:"None",J:"None",K:"None",g:"rgba(232, 235, 237, 0.000)",L:"None",M:0,N:0,bF:"289",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:15,P:0,D:"#D8DDE4",aC:{a:[{b:"229",p:3,z:true,symbolOid:"2"}]},a:298,aD:{a:[{b:"229",p:3,z:false,symbolOid:"2"}]},b:502},"304":{c:218,d:49,I:"None",J:"None",K:"None",g:"rgba(232, 235, 237, 0.000)",L:"None",M:0,N:0,bF:"289",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,P:0,D:"#D8DDE4",aC:{a:[{b:"236",p:3,z:true,symbolOid:"2"}]},a:609,aD:{a:[{b:"236",p:3,z:false,symbolOid:"2"}]},b:875},"312":{k:"div",x:"hidden",c:628,d:720,z:2,a:815,j:"absolute",bF:"305",b:0},"320":{h:"124",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"319",d:560,c:731,cQ:1,e:0,r:"inline",cR:1},"305":{x:"visible",k:"div",cW:{a:[{b:"171",p:3,z:false,symbolOid:"2"}]},c:1443,d:720,z:7,a:0,j:"absolute",b:5306},"313":{h:"105",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"312",d:720,c:628,cQ:1.05,e:1,r:"inline",cR:1.05},"321":{h:"216",p:"no-repeat",x:"visible",a:641,q:"100% 100%",b:93,j:"absolute",dB:"img",z:8,k:"div",bF:"315",d:371,c:640,r:"inline",e:0},"306":{h:"109",p:"no-repeat",x:"visible",a:265,q:"100% 100%",b:191,j:"absolute",dB:"img",z:7,k:"div",bF:"305",d:22,c:285,r:"inline",e:0},"314":{h:"210",p:"no-repeat",x:"visible",a:1377,q:"100% 100%",b:854,j:"absolute",dB:"img",z:28,k:"div",c:14,d:22,r:"inline"},"322":{c:1440,d:721,I:"None",J:"None",K:"None",g:"#005DAA",L:"None",M:0,N:0,A:"#005DAA",x:"visible",j:"absolute",B:"#005DAA",P:0,k:"div",C:"#005DAA",z:12,O:0,D:"#005DAA",a:0,b:2179},"307":{h:"121",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"305",z:1,k:"div",dB:"img",d:721,c:1440,r:"inline"},"330":{x:"visible",k:"div",cW:{a:[{b:"156",p:3,z:false,symbolOid:"2"}]},c:1232,d:475,z:18,a:109,j:"absolute",b:1605},"315":{x:"visible",k:"div",cW:{a:[{b:"174",p:3,z:false,symbolOid:"2"}]},c:1281,d:1220,z:5,a:80,j:"absolute",b:6127},"323":{x:"visible",k:"div",cW:{a:[{b:"177",p:3,z:false,symbolOid:"2"}]},c:1440,d:575,z:3,a:0,j:"absolute",b:7448},"308":{h:"107",p:"no-repeat",x:"visible",a:212,q:"100% 100%",b:241,j:"absolute",dB:"img",z:5,k:"div",bF:"305",d:143,c:392,r:"inline",e:0},"331":{h:"185",p:"no-repeat",x:"visible",a:630,q:"100% 100%",b:66,j:"absolute",bF:"330",z:11,k:"div",dB:"img",d:207,c:294,r:"inline"},"316":{h:"220",p:"no-repeat",x:"visible",a:2,q:"100% 100%",b:754,j:"absolute",dB:"img",z:11,k:"div",bF:"315",d:371,c:640,r:"inline",e:0},"324":{h:"139",p:"no-repeat",x:"visible",a:861,q:"100% 100%",b:345,j:"absolute",dB:"img",z:6,k:"div",bF:"323",d:50,c:220,r:"inline",e:0},"309":{h:"115",p:"no-repeat",x:"visible",a:373,q:"100% 100%",b:158,j:"absolute",dB:"img",z:8,k:"div",bF:"305",d:13,c:68,r:"inline",e:0},"332":{h:"42",p:"no-repeat",x:"visible",a:283,q:"100% 100%",b:80,j:"absolute",bF:"330",z:17,k:"div",dB:"img",d:292,c:1,r:"inline"},"317":{x:"hidden",k:"div",c:731,d:560,z:9,e:1,a:550,j:"absolute",bF:"315",b:660},"340":{h:"181",p:"no-repeat",x:"visible",a:685,q:"100% 100%",b:82,j:"absolute",dB:"img",z:5,k:"div",bF:"330",d:183,c:183,cQ:1,e:0,r:"inline",cR:1},"325":{h:"133",p:"no-repeat",x:"visible",a:428,q:"100% 100%",b:229,j:"absolute",dB:"img",z:2,k:"div",bF:"323",d:85,c:579,r:"inline",e:0},"333":{h:"44",p:"no-repeat",x:"visible",a:609,q:"100% 100%",b:80,j:"absolute",bF:"330",z:18,k:"div",dB:"img",d:292,c:2,r:"inline"},"318":{h:"218",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"317",d:560,c:731,cQ:1,e:0,r:"inline",cR:1},"341":{h:"26",p:"no-repeat",x:"visible",a:655,q:"100% 100%",b:82,j:"absolute",dB:"img",z:4,k:"div",bF:"330",d:257,c:244,r:"none",e:0},"326":{h:"141",p:"no-repeat",x:"visible",a:609,q:"100% 100%",b:345,j:"absolute",dB:"img",z:5,k:"div",bF:"323",d:50,c:220,r:"inline",e:0},"270":{h:"88",p:"no-repeat",x:"visible",a:570,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"268",d:12,c:133,r:"inline",e:0},"334":{h:"46",p:"no-repeat",x:"visible",a:934,q:"100% 100%",b:80,j:"absolute",bF:"330",z:19,k:"div",dB:"img",d:292,c:2,r:"inline"},"319":{k:"div",x:"hidden",c:731,d:560,z:7,a:0,j:"absolute",bF:"315",b:-1},"342":{h:"28",p:"no-repeat",x:"visible",a:324,q:"100% 100%",b:130,j:"absolute",dB:"img",z:15,k:"div",bF:"330",d:243,c:254,r:"inline",e:0},"263":{x:"visible",k:"div",c:1440,d:40,z:27,e:1,a:0,j:"absolute",b:0},"327":{h:"135",p:"no-repeat",x:"visible",a:689,q:"100% 100%",b:195,j:"absolute",dB:"img",z:3,k:"div",bF:"323",d:13,c:60,r:"inline",e:0},"350":{h:"20",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"349",d:58,c:660,r:"inline",e:0},"271":{x:"visible",k:"div",c:1280,d:344,z:6,e:0,a:0,j:"absolute",bF:"268",b:835},"335":{h:"30",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:133,j:"absolute",dB:"img",z:16,k:"div",bF:"330",d:240,c:232,r:"inline",e:0}}},{o:"41",p:"600px",cA:false,Y:1440,Z:9901,L:[],c:"#FFFFFF",bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"250"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["373","369","367","368","371","370","372"],n:"Untitled Layout","_":2,v:{"369":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"367",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"372":{h:"190",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:9862,r:"inline"},"368":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"367",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"371":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"367",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"367":{x:"visible",k:"div",c:1440,d:40,z:2,e:1,a:0,j:"absolute",b:0},"370":{b:7,z:7,K:"None",c:119,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"367",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"39"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Program Detail",x:"visible",I:"None",a:727,y:"preserve",J:"None"},"373":{h:"243",p:"no-repeat",x:"visible",i:"menu2",q:"100% 100%",b:-183,a:0,j:"absolute",z:8,k:"div",dB:"img",d:120,c:1440,r:"inline"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
