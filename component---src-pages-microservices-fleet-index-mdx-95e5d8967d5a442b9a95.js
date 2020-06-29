(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{mKPe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),a=n("013z");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=l("PageDescription"),p=l("AnchorLinks"),b=l("AnchorLink"),s=l("InlineNotification"),m={_frontmatter:o},u=a.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(u,i({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},'This microservice is responsible to support simulation of fleet of container carrier vessels. It used for demonstration purpose, but it is still using an event-driven microservice implementation approach. It supports the event, actors, and commands discovered during the event storming workshop and illustrated by the following figure for the "ship actor".'),Object(r.b)(p,{mdxType:"AnchorLinks"},Object(r.b)(b,{mdxType:"AnchorLink"},"Overview"),Object(r.b)(b,{mdxType:"AnchorLink"},"Build"),Object(r.b)(b,{mdxType:"AnchorLink"},"Run"),Object(r.b)(b,{mdxType:"AnchorLink"},"Usage Details")),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Description:")," The service exposes simple a REST API to support acquiring ship and fleet information, while also providing simulation control to emulate ship movements and container metrics event generation. When a ship leaves or enters a port, it will also generate the events as listed in the ",Object(r.b)("a",i({parentName:"p"},{href:"/refarch-kc/implementation/event-storming-analysis/"}),"Event Storming Analysis")," and ",Object(r.b)("a",i({parentName:"p"},{href:"/refarch-kc/implementation/domain-driven-design/"}),"Domain-Driven Design")," results."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github repository:")," ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms"}),"refarch-kc-ms")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Folder:")," ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/tree/master/fleet-ms"}),"fleet-ms")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kafka topics consumed from:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#bluewater-container-topic"}),"Bluewater Container")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#bluewater-ship-topic"}),"Bluewater Ship")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#bluewater-problem-topic"}),"Bluewater Problem"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kafka topics produced to:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#bluewater-container-topic"}),"Bluewater Container")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#bluewater-ship-topic"}),"Bluewater Ship")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#bluewater-problem-topic"}),"Bluewater Problem"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Events reacted to:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-metric-event"}),"Container Metric Event")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#ship-position-event"}),"Ship Position Event")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#bluewater-problem-event"}),"Bluewater Problem Event"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Events produced:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-metric-event"}),"Container Metric Event")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#ship-position-event"}),"Ship Position Event"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"EDA Patterns implemented:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/implementation/consume-transform-produce/"}),"Consume-transform-produce Loop"))),Object(r.b)("h2",null,"Build"),Object(r.b)("p",null,"This microservice is built using the ",Object(r.b)("a",i({parentName:"p"},{href:"https://appsody.dev/"}),"Appsody")," development framework. The ",Object(r.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/installing/installing-appsody"}),"Appsody CLI")," is a required prerequisite for building the application locally."),Object(r.b)("p",null,"Appsody will build the application by pulling the contents of the Appsody Stack it is based on and then performing the local application build inside the containerized environment:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"appsody build -t <yournamespace>/kcontainer-fleet-ms[:tag] [--push]")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can optionally specify a container tag. If left blank, ",Object(r.b)("inlineCode",{parentName:"li"},"latest")," will be used."),Object(r.b)("li",{parentName:"ul"},"You can optionally supply the ",Object(r.b)("inlineCode",{parentName:"li"},"--push")," flag to automatically push the built image to specified remote repository.")),Object(r.b)("p",null,"Performing an Appsody build will update the ",Object(r.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file in the same directory with current information for the application image, labels, and annotations fields."),Object(r.b)("h2",null,"Run"),Object(r.b)("h3",null,"Deployment parameters"),Object(r.b)("p",null,"The following deployment parameters are defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"KAFKA_BROKERS"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Comma-separated list of Kafka brokers to connect to")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"KAFKA_APIKEY"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"API Key used to connect to SASL-secured Kafka brokers. This is required when connecting to IBM Event Streams clusters.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"TRUSTSTORE_ENABLED"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Required to be set to ",Object(r.b)("inlineCode",{parentName:"td"},"true")," when connecting to IBM Event Streams on the IBM Cloud Pak for Integration (CP4I).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"TRUSTSTORE_PATH"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"The local path to the required truststore file when connecting to IBM Event Streams on CP4I. See ",Object(r.b)("a",i({parentName:"td"},{href:"#volume-mounts"}),Object(r.b)("strong",{parentName:"a"},"Volume Mounts"))," below.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"TRUSTSTORE_PWD"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"The password for the truststore file used for IBM Event Streams server verification.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"KAFKA_SHIP_TOPIC_NAME"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"The topic name used for communication relating to the ship  entity.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"KAFKA_CONTAINER_TOPIC_NAME"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"The topic name used for communication relating to the containers entity.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"KAFKA_BW_PROBLEM_TOPIC_NAME"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"The topic name used for communication relating to the bluewater problems domain.")))),Object(r.b)("h3",null,"Volume Mounts"),Object(r.b)("p",null,"The Fleet Management microservice requires up to one file to be injected at runtime for proper operation. As noted in the ",Object(r.b)("inlineCode",{parentName:"p"},"TRUSTSTORE_PATH")," parameter above, these files are SSL-based certificates which are required to verfiy the identity of the external service when calling it. These files are provided as ",Object(r.b)("inlineCode",{parentName:"p"},'--docker-options "-v host-src:container-dest ..."')," when running the microservice locally and as a Volume Mount when running the microservice on a Kubernetes cluster."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"TRUSTSTORE_PATH")," parameter is documented in the ",Object(r.b)("strong",{parentName:"p"},"Event Streams Certificates")," section of the ",Object(r.b)("a",i({parentName:"p"},{href:"/refarch-kc/microservices/prereqs/#ibm-event-streams-on-redhat-openshift-container-platform"}),"Prerequisites")," page. The Appsody run command should include a parameter similar to ",Object(r.b)("inlineCode",{parentName:"p"},"-v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks")," in its ",Object(r.b)("inlineCode",{parentName:"p"},"--docker-options")," string to run this microservice locally."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ",Object(r.b)("inlineCode",{parentName:"p"},'appsody run --docker-options "-v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks " ...')),Object(r.b)("h3",null,"Running the microservice locally"),Object(r.b)("p",null,"When running the microservice locally, you must specify all the required ",Object(r.b)("a",i({parentName:"p"},{href:"#deployment-parameters"}),"deployment parameters")," from above as environment variables via the ",Object(r.b)("inlineCode",{parentName:"p"},"--docker-options")," flag being passed in from the Appsody CLI command."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ",Object(r.b)("inlineCode",{parentName:"p"},'appsody run --docker-options "-e KAFKA_BROKERS=remotebroker1:9092,remotebroker2:9092 -e KAFKA_SHIP_TOPIC_NAME=ships -e KAFKA_CONTAINER_TOPIC_NAME=containers -v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks" ...')),Object(r.b)("p",null,"For more details on running the microservice locally, consult the ",Object(r.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/using-appsody/local-development#appsody-local-development"}),"Appsody run documentation")," as well as the deployment information contained in the ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/blob/master/fleet-ms/app-deploy.yaml"}),Object(r.b)("inlineCode",{parentName:"a"},"app-deploy.yaml"))," file."),Object(r.b)("h3",null,"Running the microservice remotely"),Object(r.b)("p",null,"The ",Object(r.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/reference/appsody-operator/"}),"Appsody Operator")," is a required prerequisite for deploying the microservice to a remote Kubernetes or OpenShift cluster."),Object(r.b)("p",null,"To deploy the microservice to a remote cluster:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"appsody deploy <yournamespace>/kcontainer-fleet-ms[:tag] --no-build")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can omit the ",Object(r.b)("inlineCode",{parentName:"li"},"--no-build")," flag to have Appsody perform a build before deploying the application."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},Object(r.b)("strong",{parentName:"em"},"Note:"))," Performing a build at deploy time requires specifying the absolute container reference path, as well as the ",Object(r.b)("inlineCode",{parentName:"li"},"--push")," flag."),Object(r.b)("li",{parentName:"ul"},"The neccesary deployment parameter information will be read from the ",Object(r.b)("inlineCode",{parentName:"li"},"app-deploy.yaml")," file in the same directory.")),Object(r.b)("h2",null,"Usage Details"),Object(r.b)("h3",null,"REST APIs"),Object(r.b)(s,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("strong",null,"TODO")," REST APIs documentation via Swagger"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-fleet-index-mdx-95e5d8967d5a442b9a95.js.map