(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{uat7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return h}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=o("InlineNotification"),l=o("PageDescription"),m=o("AnchorLinks"),p=o("AnchorLink"),g={_frontmatter:s},b=i.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(b,r({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{kind:"warning",mdxType:"InlineNotification"},Object(a.b)("strong",null,"TODO")," UNDER CONSTRUCTION"),Object(a.b)(l,{mdxType:"PageDescription"},"The Anomalous Container Scoring microservice consumes telemetry events for reefer containers and applies a predictive scoring model to determine whether or not the specific shipping container is in need of maintenance or not. The scoring service uses an analytics scoring model build using machine learning techniques, and depending upon deployment options, can be serialized and loaded into memory."),Object(a.b)(m,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(a.b)(p,{mdxType:"AnchorLink"},"Build"),Object(a.b)(p,{mdxType:"AnchorLink"},"Run"),Object(a.b)(p,{mdxType:"AnchorLink"},"Usage Details")),Object(a.b)("h2",null,"Overview"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description:")," This microservice is responsible for listening to the ",Object(a.b)("a",r({parentName:"p"},{href:"#reefer-telemetry-topic"}),"Reefer Telemetry Topic")," topic where the IOT sensor devices of the Reefer Containers will be sending their telemetry data to. These telemetry events will be read and used to contact a container anomaly prediction service based on Watson Machine Learning, hosted on the IBM Cloud. Depending on whether the prediction service predicts a container anomaly, this Telemetry microservice will send a ",Object(a.b)("a",r({parentName:"p"},{href:"#container-anomaly-event"}),"Container Anomaly Event")," to the ",Object(a.b)("a",r({parentName:"p"},{href:"#containers-topic"}),"Containers Topic")," for the ",Object(a.b)("a",r({parentName:"p"},{href:"#containers"}),"Containers microservice")," to handle the shipping goods spoilage."),Object(a.b)("p",null,"This microservice has been implemented using the latest ",Object(a.b)("a",r({parentName:"p"},{href:"#reactive-messaging"}),"Reactive Messaging")," feature of MicroProfile 3.0. running on the OpenLiberty server."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAA90lEQVQoz5WSOw6CQBCGOZq9Z9ArWHoCz2JhYW+ihSY22llYEiVGUFEQln3Mzuq46yM+MPplQ9hh/tmfH7zTG8ZcrkFU9CbheLZTgKcSvPcS6Iu6MwgqjWG9NYlTSePcxG9iRFRKSQXUemRqvjguwtwYQ+OU5ZtYa51lGWMF4qsXZjHPBjynEUIAAFoRncy5QK3BLqLgkoy7zjtXMSl930+SxFg223h/SN1bENQXRRvyTI/wBp1EW8/G+6jaWyOl4JwDaCznQ9qkDPciWCd5zhBLP9JrYGjDoHirzXGtNV3H3Jn6SezaUqba/WV3tGJc34t//CS/cwbmXYKgADjNSgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Telemetry diagram",title:"Telemetry diagram",src:"/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/2faef/microservice-overview-scoring-mp.png",srcSet:["/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/7fc1e/microservice-overview-scoring-mp.png 288w","/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/a5df1/microservice-overview-scoring-mp.png 576w","/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/2faef/microservice-overview-scoring-mp.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Further details:")," ",Object(a.b)("a",r({parentName:"p"},{href:"/refarch-kc/microservices/scoring-mp"}),"Microservices Details > Anomalous Container Scoring")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Github repository:")," ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml"}),"refarch-reefer-ml")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Folder:")," ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/tree/master/scoring-mp"}),"scoring-mp")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics consumed from:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#reefer-telemetry-topic"}),"Reefer Telemetry Topic"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics produced to:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#containers-topic"}),"Containers Topic"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events reacted to:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#container-telemetry-event"}),"Container Telemetry Event"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events produced:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#container-anomaly-event"}),"Container Anomaly Event"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"EDA Patterns implemented:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#reactive-messaging"}),"Reactive Messaging"))),Object(a.b)("h2",null,"Build"),Object(a.b)(c,{kind:"info",mdxType:"InlineNotification"},Object(a.b)("strong",null,"TODO")," Build instructions for current scoring-mp"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Reference:")," ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md"}),"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md")),Object(a.b)("h2",null,"Run"),Object(a.b)(c,{kind:"info",mdxType:"InlineNotification"},Object(a.b)("strong",null,"TODO")," Run instructions for current scoring-mp"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Reference:")," ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md"}),"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md")),Object(a.b)("h2",null,"Usage Details"),Object(a.b)("h3",null,"REST APIs"),Object(a.b)(c,{kind:"info",mdxType:"InlineNotification"},Object(a.b)("strong",null,"TODO")," REST APIs documentation via Swagger"),Object(a.b)("h3",null,"Reactive Messaging"),Object(a.b)("p",null,"Reactive Systems provide an architecture style to deliver responsive systems. By infusing asynchronous messaging passing at the core of the system, applications enforcing the reactive system’s characteristics are inherently resilient and become more elastic by scaling up and down the number of message consumers. Microservices as part of reactive systems interact using messages. The MicroProfile Reactive Messaging specification aims to deliver applications embracing the characteristics of reactive systems."),Object(a.b)("p",null,"Reactive Systems provide an architecture style to deliver responsive systems. By infusing asynchronous messaging passing at the core of the system, applications enforcing the reactive system’s characteristics are inherently resilient and become more elastic by scaling up and down the number of message consumers."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"591px"}},"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACR0lEQVQ4y3VT/U/TUBTtX+wvJv6ERNDESIaMCSaGLYAMSATGohOIQEDlMwGZ24QBqx1t15YOtvW7bm7H997coBBuct7nuffl3ncu12q18JDVzGtoVxL0isKglkVYjnGPdzsG1znwPA+O48Bx2/BcH6s7CUTnX2F8YRDjCYJkCDs/1uB7f9pcAt/3u0EpWEB6kcvloGoqZFlGSSmhJCtIrr1HZOopBqM9CI/34u1sH75sLUIpqYwjSSLzo9ZsNW8Cuq6HS+3yXiqKfoGCmEP6eB8H2W22LlfUAEeS5MCec1wLVxUdv4VzuJ4Fur9rju2icl0LnNmOCdOu4ayQh0P8LNtA428D3ASpy2RyCLH5EKY+hZHanIZhGLAsi8w14mhDJKnxfIGUxoZpWrjUVSysxjCxOIjohwEyDzHfkl4E927uOUbj/Rie6EU08RJzK2MQRRGqqkIhddJ1Hfl8HplMhq1VVcN54RQzn99gdKYPr2M9GIk/Y76SxoM7OtnGQe47vu6v4OfpHs6K2XspG6aBcrkcOPtVOEQ6v4uN3SXmd3SyA8Outj/F9+pQFa1LbjabDMEaVgP3HRMvpOCn0IHWSy51futGpLx4zHS3ubuM9a0U9tIbkDXhtqQhFAUmF/pIVzZU1NlsltVOEAQG+vLH9TgGxp6gN/QILyKPEZ7sYTqURJkF4nm+q8OusDttQ19oNBr/UQfRKb4dLmE6FcFwrB9hgtnlEVZvanXCodxO+p043N1eDOiPaLJK+tmwKgx07fnOg71M5396Obkuyya+pQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"reactive systems",title:"reactive systems",src:"/refarch-kc/static/c7a190e35498ce9665defdaefaae53de/64794/reactive-systems.png",srcSet:["/refarch-kc/static/c7a190e35498ce9665defdaefaae53de/7fc1e/reactive-systems.png 288w","/refarch-kc/static/c7a190e35498ce9665defdaefaae53de/a5df1/reactive-systems.png 576w","/refarch-kc/static/c7a190e35498ce9665defdaefaae53de/64794/reactive-systems.png 591w"],sizes:"(max-width: 591px) 100vw, 591px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"Microservices as part of reactive systems interact using messages. The location and temporal decoupling, promoted by this interaction mechanism, enable numerous benefits such as:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Better failure handling as the temporal decoupling enables message brokers to resend or reroute messages in the case of remote service failures."),Object(a.b)("li",{parentName:"ul"},"Improved elasticity as under fluctuating load the system can decide to scale up and down some of the microservices."),Object(a.b)("li",{parentName:"ul"},"The ability to introduce new features more easily as components are more loosely coupled by receiving and publishing messages.")),Object(a.b)("h4",null,"Use Cases"),Object(a.b)("p",null,"MicroProfile Reactive Messaging aims to provide a way to connect event-driven microservices. The key characteristics of the specification make it versatile and suitable for building different types of architecture and applications."),Object(a.b)("p",null,"First, asynchronous interactions with different services and resources can be implemented using Reactive Messaging. Typically, asynchronous database drivers can be used in conjunction with Reactive Messaging to read and write into a data store in a non-blocking and asynchronous manner."),Object(a.b)("p",null,"When building microservices, the CQRS and event-sourcing patterns provide an answer to the data sharing between microservices. Reactive Messaging can also be used as the foundation to CQRS and Event-Sourcing mechanism, as these patterns embrace message-passing as core communication pattern."),Object(a.b)("p",null,"IOT applications, dealing with events from various devices, and data streaming applications can also be implemented using Reactive Messaging. The application receives events or messages, process them, transform them, and may forward them to another microservices. It allows for more fluid architecture for building data-centric applications."),Object(a.b)("h4",null,"MicroProfile Reactive Messaging"),Object(a.b)("p",null,"MicroProfile Reactive Messaging provides a very easy-to-use way to send, receive, and process messages and is well-suited to writing applications that process streams of events. With MicroProfile Reactive Messaging, you annotate application beans’ methods and, under the covers, OpenLiberty (in our specific case) converts these to ",Object(a.b)("a",r({parentName:"p"},{href:"http://www.reactive-streams.org/"}),"reactive streams"),"-compatible publishers, subscribers and processors and connects them up to each other."),Object(a.b)("img",{src:"images/scoring-mp/image2.png",alt:"reactive messaging"}),Object(a.b)("p",null,"Although sending messages within our application is nice, it’s more useful to be able to send and receive messages from other systems. For this, MicroProfile Reactive Messaging also provides a Connector API to allow your methods to be connected to external messaging systems. Open Liberty includes the liberty-kafka connector for sending and receiving messages from an Apache Kafka broker."),Object(a.b)("p",null,"It is important to understand that ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/eclipse/microprofile-reactive-messaging"}),"MicroProfile Reactive Messaging")," does not contain an implementation itself but only provides the specified API, a TCK and documentation. It is down to application server or external libraries to provide such implementation. For instance, ",Object(a.b)("a",r({parentName:"p"},{href:"https://openliberty.io/blog/2019/09/13/microprofile-reactive-messaging-19009.html"}),"Open Liberty 19.0.0.9")," provides a full implementation of MicroProfile Reactive Messaging 1.0. OpenLiberty’s implementation of the MicroProfile Reactive Messaging capabilities is based on ",Object(a.b)("a",r({parentName:"p"},{href:"https://smallrye.io/smallrye-reactive-messaging/"}),"SmallRye Reactive Messaging"),"."),Object(a.b)("h3",null,"Implement"),Object(a.b)("p",null,"We have based our implementation on ",Object(a.b)("a",r({parentName:"p"},{href:"https://microprofile.io/"}),"MicroProfile")," as the standardization for building microservices-based applications. The application server we have chosen, that provides full MicroProfile support, is ",Object(a.b)("a",r({parentName:"p"},{href:"https://openliberty.io/"}),"OpenLiberty"),"."),Object(a.b)("p",null,"As already introduced, the scoring agent will react to a stream of data, in the form of messaging being sent from an IOT device in the Reefer Containers to Kafka (through an MQTT connector), which is used as our event backbone. The scoring agent will react to that stream of data being sent into a kafka topic through the MicroProfile Reactive Messaging feature that OpenLiberty implements and supports. It will do some computation for each of the messages coming as a stream of data, which in this case is to call the container anomaly predictive system, and send out a container anomaly message a to specific kafka topic where the Reefer Container EDA reference application listens to and will act in consequence."),Object(a.b)("p",null,"The main chunk of code that implements the scoring agent use case just described looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-Java"}),'@Incoming("reefer-telemetry")\n@Outgoing("containers")\n@Acknowledgment(Acknowledgment.Strategy.MANUAL)\npublic PublisherBuilder<Message<String>> processTelemetry(Message<String> message) {\n\n    // Get the message as String\n    String input = message.getPayload();\n\n    Gson g = new Gson();\n    // Parsing the message into a TelemetryEvent Java Object\n    TelemetryEvent te = g.fromJson(input, TelemetryEvent.class);\n    // Getting the Telemetry out of the event.\n    Telemetry t = new Telemetry(te.getPayload());\n\n    // Calling the Anomaly Scoring service\n    ScoringResult scoringResult = scoringClient.callAnomalyScoring(t);\n    // Getting the Scoring Prediction Results\n    ScoringPredictionValues result = scoringResult.getScoringPredictionValues();\n\n    Boolean anomaly = result.getPrediction().equalsIgnoreCase("Issue");\n\n    if (!anomaly){\n        System.out.println("No container anomaly");\n        message.ack(); // All processing of this message is done, ack it now\n        return ReactiveStreams.empty();\n    }\n    else{\n        System.out.println("A container anomaly has been predicted. Therefore, sending a ContainerAnomaly Event to the appropriate topic");\n        ContainerAnomalyEvent cae = new ContainerAnomalyEvent(te.getContainerID(), te.getTimestamp(), t);\n        System.out.println("ContainerAnomalyEvent object sent: " + cae.toString());\n\n        // This message will be sent on, create a new message which acknowledges the incoming message when it is acked\n        return ReactiveStreams.of(Message.of(cae.toString(), () -> message.ack()));\n    }\n}\n')),Object(a.b)("p",null,"We are consuming/producing the data from/to Kafka by simply annotating our method with ",Object(a.b)("strong",{parentName:"p"},"@Incoming")," and ",Object(a.b)("strong",{parentName:"p"},"@Outgoing")," and leaving the rest of the magic required to create the reactive streams to the MicroProfile Reactive Messaging implementation of the OpenLiberty server. Although there is certain magic in this process, there is still some configuration we need to provide OpenLiberty with in order for it to properly create the reactive streams."),Object(a.b)("p",null,"This configuration is provided in the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/scoring-mp/src/main/resources/META-INF/microprofile-config.properties"}),"microprofile-configuration.properties")," file:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-properties"}),"# Config specific to reefer-telemetry kafka topic\nmp.messaging.incoming.reefer-telemetry.connector=liberty-kafka\nmp.messaging.incoming.reefer-telemetry.group.id=reefer-telemetry-reactive\nmp.messaging.incoming.reefer-telemetry.topic=reefer-telemetry\nmp.messaging.incoming.reefer-telemetry.key.deserializer=org.apache.kafka.common.serialization.StringDeserializer\nmp.messaging.incoming.reefer-telemetry.value.deserializer=org.apache.kafka.common.serialization.StringDeserializer\n\n# Config specific to containers kafka topic\nmp.messaging.outgoing.containers.connector=liberty-kafka\nmp.messaging.outgoing.containers.group.id=containers-reactive\nmp.messaging.outgoing.containers.topic=containers\nmp.messaging.outgoing.containers.key.serializer=org.apache.kafka.common.serialization.StringSerializer\nmp.messaging.outgoing.containers.value.serializer=org.apache.kafka.common.serialization.StringSerializer\n\n#### Config shared between all kafka connections\n\n# bootstrap server is the only config needed for plain insecure local kafka instance\nmp.messaging.connector.liberty-kafka.bootstrap.servers=\n")),Object(a.b)("p",null,"We can see the configuration for each of the incoming and outgoing reactive streams based on their names (",Object(a.b)("em",{parentName:"p"},"reefer-telemetry")," and ",Object(a.b)("em",{parentName:"p"},"containers"),") that match with the Kafka topics these reactive streams will be consuming/producing from/to. We also specify the serializer/deserializer we want MicroProfile Reactive Messaging to apply to our reactive streams for data processing but more importantly is the fact that we are telling OpenLiberty that the connector to be used is the ",Object(a.b)("strong",{parentName:"p"},"liberty-kafka")," connector. Otherwise, OpenLiberty would not be able to interact with Kafka."),Object(a.b)("p",null,"Finally, we are providing to the liberty-kafka connector the appropriate configuration for OpenLiberty to successfully connect and consume/produce data to Kafka. In the example above we are providing the Kafka bootstrap server but there are other properties that can be set here ",Object(a.b)("em",{parentName:"p"},"(such as security)")," that can be found in the ",Object(a.b)("a",r({parentName:"p"},{href:"https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_supported_method_signatures"}),"MicroProfile Reactive Messaging Specification")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-scoring-mp-index-mdx-0a9de95a6285e875c7a7.js.map