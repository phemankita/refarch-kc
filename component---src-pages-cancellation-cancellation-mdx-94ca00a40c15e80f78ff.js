(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{W9F5:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},c={_frontmatter:o},s=i.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This use case consist of giving the ability to the Reefer Container Shipment administrator/operator or a customer of its services to cancel an order. This could be because the customer wants to wait until they have more fresh goods to get them sent, the final client of those goods do not require these anymore, the Reefer Container Shipment have problems with containers, ships, workforce, etc. Whatever the reason might be, we want to offer all parties of our Event Driven solution the option to cancel an order."),Object(n.b)("p",null,"A new order successful request flow, implementing the ",Object(n.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/design-patterns/saga/"}),"SAGA pattern")," for long running transactions, looks like the following sequence diagram:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABx0lEQVQoz02SvY/UMBDF97+not0CSj4aGq6A5iQEoqBCLGI5XTa3yXK5ZJ114jjxRxzbYzNJThyj6CmW5jdv8pyN1vqQJKc8K4rieDymadq0LSGkruuyLJum6TmnNZmMCd4F8OBsAJg1hA2eD+/f3Lze8uq+KEtKL0II1nUDVt+7EPJPH3Yvn2fXV79fbfPrq5u3L44f3/3YPqP775sYgjyXJLlllPK+N5PVBm2cMVZpY30YSEXTRNUVOyaSVCxLxblobveGs02M0UIomdvftbu0O5zYzV317RfZZ/x0VqezLBrbSsC2EOeC8KQz7BxMFrKy+7orWG/Qb1Bu0F6N3kxwYePPQzPwjnO+NuPXOutx5RnGA0726o88f4kwAkRrrRCKdnqybpx8klMplXUYV/CL6aqPsIcIYO0k50EBYdcyfqqE1E4bL0eHq5nlqahUarwwhYH+g8OMAaxThZBCqrpFZ3A+jBNYF/AdtaJ4G4Iy3ff/wXMMi4YQldL9IDGtFVvVLIr5Y1dBBux5Wjt4vJ9+YaPSuuPDDBuPgNCYUnQLhv6o2QMn5PIII2CG+0v+GZzGJuexwDkPS+UPDH/Edal1R6GsUuovRmxvuh5wD3cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"saga",title:"saga",src:"/refarch-kc/static/031ac657323a3180f5aec4c7dcbb217c/2faef/Slide1.png",srcSet:["/refarch-kc/static/031ac657323a3180f5aec4c7dcbb217c/7fc1e/Slide1.png 288w","/refarch-kc/static/031ac657323a3180f5aec4c7dcbb217c/a5df1/Slide1.png 576w","/refarch-kc/static/031ac657323a3180f5aec4c7dcbb217c/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"At this point, if any of the interested parties cancels an order, a compensation process kicks off that looks like the following diagram:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABs0lEQVQoz21RTWvbQBD1L8xvyL/prZfQUAjxoSWnHuIUgkkLvZgcWkPi0jbFdiwHq7K1lq2PlbTfO9PdtdMmEPG0PM3w3ptZdRhjk/H4IYriOJ7NZtPpZLPdpmlKCEmSZLPZ0KrKCJFCgNFgjNUKrPUnQAesmfTOfr17k8cPi2SVZVtK6zwvqopWZaUsRF8uRyevo6vzu/fH88+9u7O3s8sPt8evsp83HQSol3G1mCvO63IlmrWSSodHCGkB2nWa34/b9bKYT5o0yaNpvVxkv3+IMu8gIiBa9yJSMqLpjSPGgofBUN53n3IbeBAD8LphVaXqGjgHpa1UVkjDOCqFUmplvMCZWWuUAb+yq0AQhxznUR4e5gcHoLXVxiP4otbN129MiBCDxrgDdRhgn2zChx4O9fW1Y4yLLVnTq09QFFjXekVACNu02LZaKmfgLJ6IzW4j3Nm7VMEFj/+AlC7Zdxmzo+98MFAXH9vBgPUusCiei611cEPs8WjmF5CSnffSoyN+2qX9ftPtIiEvJHuZdZfyv7gjdDgs+32RrPwitHHVZzv/G9v9Xo/H4q4Le47hwjz/C6n8bf0d1otBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cancellation",title:"cancellation",src:"/refarch-kc/static/4bb2377776bad4deeed8f897300c4ce2/2faef/Slide2.png",srcSet:["/refarch-kc/static/4bb2377776bad4deeed8f897300c4ce2/7fc1e/Slide2.png 288w","/refarch-kc/static/4bb2377776bad4deeed8f897300c4ce2/a5df1/Slide2.png 576w","/refarch-kc/static/4bb2377776bad4deeed8f897300c4ce2/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"where the Order Command microservice in charge of receiving such rejection request will:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Transition the order to ",Object(n.b)("strong",{parentName:"li"},"Cancelled")," state."),Object(n.b)("li",{parentName:"ol"},"Emit an ",Object(n.b)("strong",{parentName:"li"},"OrderCancelled")," event so that any other interested party in the overall application take the appropriate action. In our case, the Spring Containers and Voyages microservices will kick off a kind of compensation process whereby the container allocated to the order will get de-allocated and the voyage assigned to the order will get unassigned respectively. As a result, the container will become empty and available for a coming new order as well as the ship making the voyage will get the container’s capacity freed up.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cancellation-cancellation-mdx-94ca00a40c15e80f78ff.js.map