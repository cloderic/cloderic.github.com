(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"25dN":function(t,e,n){var a=n("XKFU");a(a.S,"Object",{is:n("g6HL")})},CyHz:function(t,e,n){var a=n("XKFU");a(a.S,"Math",{sign:n("lvtm")})},FLlr:function(t,e,n){var a=n("XKFU");a(a.P,"String",{repeat:n("l0Rn")})},fe0W:function(t,e,n){"use strict";var a=n("wTIg"),r=n("+e4l"),o=n("ExVU"),i=n("Bl7J"),c=n("iCNy"),l=n("PJDU"),s=(n("q1tI"),n("XNvW")),u=n("qKvR"),p=Object(a.a)("article",{target:"e1g54axm0"})("background:",s.BG_COLOR_1_GRADIENT,";z-index:10;",s.BOX_SHADOW,";p{line-height:1.7;font-size:1.1em;}h1,h2,h3,h4,h5,h6{font-weight:500;}h2,h3,hr,header.articleHeader{margin:2em 0;border:none;padding-bottom:0.5em;border-bottom:1px ",s.PRIMARY," solid;}"),d=Object(a.a)(r.a,{target:"e1g54axm1"})({name:"1jq247e",styles:"padding:2rem 0.5rem;"});e.a=function(t){var e=t.children,n=t.pageContext,a=t.location,r=n.frontmatter.date&&o.DateTime.fromISO(n.frontmatter.date),s=n.frontmatter.last_update&&o.DateTime.fromISO(n.frontmatter.last_update);return Object(u.d)(i.a,null,Object(u.d)(l.a,{title:n.frontmatter.title,publicationDate:r&&r.toJSDate(),path:a.pathname,updateDate:s&&s.toJSDate()}),Object(u.d)(p,null,Object(u.d)(d,null,Object(u.d)("header",{className:"articleHeader"},Object(u.d)(c.a,null),Object(u.d)("h1",null,n.frontmatter.title),r&&Object(u.d)("p",null,Object(u.d)("small",null,"Published on"," ",Object(u.d)("time",{dateTime:r.toISODate()},r.toFormat("yyyy/MM/dd")),"."))),e,Object(u.d)("footer",{className:"articleFooter"},Object(u.d)(c.a,null),s&&Object(u.d)("p",null,Object(u.d)("small",null,"Last updated on"," ",Object(u.d)("time",{dateTime:s.toISODate()},s.toFormat("yyyy/MM/dd")),"."))))))}},hLT2:function(t,e,n){var a=n("XKFU");a(a.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},iCNy:function(t,e,n){"use strict";n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0mN4");var a=n("wTIg"),r=n("wwW9"),o=n("Aw06"),i=n("q1tI"),c=n("9eSz"),l=n.n(c),s=n("IP2g"),u=n("wHSu"),p=n("qKvR");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object(a.a)(o.a,{target:"e1gx71j0"})({name:"1cpgv1a",styles:"display:inline-flex;& > .mars{margin-inline-start:0.2em;transition:transform 0.3s;}&:hover > .mars{transform:scale(1.2) rotate(-10deg);}"});e.a=function(){var t=r.data.mars,e=Object(i.useMemo)((function(){return m(m({},t.childImageSharp.fixed),{},{height:"1em",width:"1em"})}),[t]);return Object(p.d)(f,{href:"/",title:"Back to the home page"},Object(p.d)(s.a,{icon:u.a}),Object(p.d)(l.a,{fixed:e,className:"mars"}))}},lvtm:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},pFvj:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return c})),n.d(e,"_frontmatter",(function(){return l})),n.d(e,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("fe0W"),o=n("2C6Z");n("qKvR");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var c="1258002807",l={},s={pageQuery:c,_frontmatter:l},u=r.a;function p(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.mdx)(u,i({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Since the end of my master's internship I hadn't really followed what was going\non in the academic world about autonomous agent steering. I've done some catchup\nlately ; this post is a preamble to some article report I'm planning to do. Here\nit is, a few slides about the Minkowski sum, a fun geometric function used\nnotably in motion planning."),Object(a.mdx)(o.a,{title:"The Minkowski Sum (applied To 2d Geometry)",src:n.data.pdf.publicURL,href:"https://fr.slideshare.net/crowdscontrol/minkowski-sum-on-2d-geometry",mdxType:"Pdf"}))}p.isMDXComponent=!0},wwW9:function(t){t.exports=JSON.parse('{"data":{"mars":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFW0lEQVQ4y1WUe0zTVxTHf79fWxBKoU8pLS0U6IM+LM+W8ipUBiIywedEdBFkFpWNIWpwqIg6xRgSfOEjczpUVByKyswgZjr/UIgTcAPdFt18Ydyy/bclFHa/+7Wgcyc5uTf33vPJ99x7z6FGtxVQo+sdlNeebs6jQU0aAPr+xtm2ax9kuzuWZza0lWQ0nCtxuvsqcm3ePe+ZYNYvFGT65p3ZcdTZAidFjdam+ADPNrmYKRb1aL2rrL/CMdhbkoDuRfH4sjge5wpn4HSeGR05JtyYHTf4dVF62evz7TNtvtjPUkyTCy/qs30Lr/aXSp/Vpvb+uTYOA0vZwAVG8u18w3h/UYzndkGU50q2ZrwtJYJcS1HjmwwdLrvierqXL5D5oFkJk4Jebn3HJ/lVS4n0RY19+K9qC16uNnh++zB2YnSNiTypMJOfSo1koFhPvsrRkjMODTkap5poNYV5TsVH4myqaeTsonelXsbJrCSa2jsl+3mto/fvGgteVZvGft9oJaMbEvG42kYeVyWTnyuS8P1iC+4W6Ml3MyPIDbsCHRY5OaibPnbMpMTBRF0P9bY92pC14o8qK55XGjxP11jIi9okMrA6nYyszcCvVWl4sNKB/sXJGCk24mG+BgOZ4eRmfCjpMkjJCY3I06qTo96oKXvzmn3lyYN3FhrwQ6lh4seVVtwuSyXDa9LxpDoTD92Z6F+WgTsLbBiYa8ZIgRaDThVuJrLAWAnORIsm9qmEWKWQDFHmQpr6pS7Hdn6eFadydewDGMntpQmkc4kTw+509JW70F2Si6vznLhTlIShOSbcz4tBX4YKNxJDcSVWQtqjhKRJEYz3xAISyw9Ioe6VO9zHZ5nRlRM1fq9YR3rnxZOL89Nwa0k6js7NRfOcWWjOzcK53GQM52tx16nGzeQw9FpluGQQk7bIENIkF4wXBgdCyuO6qYsL7Q0HXCbstkV7umZqSe9sM9rzk3F5jg2fz0rDpy4nqlIzcTjdir6sSNxyhON6khxdJilORwlxRBWMeinfYwnwA0XTjVT7XHtDU5oR62ZEeQ7bY8hFpx4HMqw47oxDh8uKzmwLDjjMqLPGYqtZgxajAlfNMpzXi3FEHYwmeRBWCAM8IVwuW2T0dqq7KMXdbNdjrV49vsmkIc3x0eRQkhbHbDq02bU4b4vCpWQ1OuKUaNAqUBIux44IMU5GhqAxNIh8LA4giQF+4zTNgKHoSur6omzbQTa4JkZJPtKqyHp9BNkaq8YukxqtlnAcNSvREqvAFwYZzujE2KYSYel0IepCBfDCHIH+ZBqH41VHeAyTQv3DfpvODOPgCaMcO6NDJzbHhOGTKDmpjw5FQ/R0bNHI0BApxR61GHvZ79EgF2ClJAiLQwJJPt8fEh53goWx3YIeculCfVVHXXHFl11gU9uvlXkOR0lIK+stGgnZyaZWpxRhlVyIZbIQlEoEWCjkI08wqUzB4xI2TY8XyNB0+f+qZV+qoWePPgy7lMKxPREisj1ciM1KIdkkDyY1MgFKREGwC/hEHxhAwv39IOVyCIemx3zqaPq/0jvkMPpknnTFybZow0bqVWLUKISeytCQiVUyAamSBpFKUSBKgqchh+9PTP48IuAwbJqUZwr2gMPh+DoOw5oPusOs9k1q1RJpqUzQs0TER3FIIApZLwoOGM/h+3kS/HkeFZczLqBp8NiK5bBO01QPh8v4YCx4ErYvKcY3rtOGvWmw7N2Uh3E5QzIOAzHD4DWE8YJoivBoeoj31p0xUzAWSlG7LWqqRinybbyvENFvXat37m3nbtYbGZpq9KNp9zQOnWKIlrw5xzCvYRTFpk79C0CdTqEKIXTrAAAAAElFTkSuQmCC","width":100,"height":100,"src":"/static/9381c89176963851c7ecba1737a9acb8/65e33/mars.png","srcSet":"/static/9381c89176963851c7ecba1737a9acb8/65e33/mars.png 1x,\\n/static/9381c89176963851c7ecba1737a9acb8/6d161/mars.png 1.5x,\\n/static/9381c89176963851c7ecba1737a9acb8/69585/mars.png 2x"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-articles-2009-09-18-minkowski-sum-index-mdx-66186699efc3b383de28.js.map