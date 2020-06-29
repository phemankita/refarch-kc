(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{xSYV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=o("PageDescription"),b=o("AnchorLinks"),s=o("AnchorLink"),p=o("InlineNotification"),m={_frontmatter:c},d=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(d,i({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},"This microservice manages the container inventory. That is, this microservice will be in charge of keeping an inventory of all the containers registered in the system along with their status, size and location. When a new order is created and received, the container microservice will be in charge of assigning a container to this new shipping order based if a container is available that suits the order's quantity and source port. Otherwise, will emit a ContainerNotFound event for the interested parties in the overall Reefer Container Shipment solution."),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(s,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(s,{mdxType:"AnchorLink"},"Build"),Object(n.b)(s,{mdxType:"AnchorLink"},"Run"),Object(n.b)(s,{mdxType:"AnchorLink"},"Usage Details")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Description:")," This microservice manages the container inventory. That is, this microservice will be in charge of keeping an inventory of all the containers registered in the system along with their status, size and location. When a new order is created and received, the container microservice will be in charge of assigning a container to this new shipping order based if a container is available that suits the order’s quantity and source port. Otherwise, will emit a ContainerNotFound event for the interested parties in the overall Reefer Container Shipment solution."),Object(n.b)("p",null,"This microservice will also manage any container anomaly during the shipping of goods. That is, this microservice will monitoring ContainerAnomaly Events received for any particular container and in the case that these are received, it will mark the container for maintenance, send a OrderSpoilt Event so that any other microservice in the overall solution is aware that the fresh goods this container was carrying are now spoilt and will call a Business Process Manager (BPM) process in to automatically trigger the assignment of a field engineer to repair the container when it reaches the destination port."),Object(n.b)("p",null,"This microservice is implemented with Spring Framework and runs on Tomcat."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABc0lEQVQoz6VSu07DMBTNl8HCh7AwwsBPMDAw8QksLCAxISSGCiQEolIqKhBt04oUmrROXMeJ47e5SUOhVEycIbq2cl5X9twXrLXGWhhGUXF5H911E6ms0lYpq40zxillOJclF8bYBcVzPyB1dXtyFW7utXYO23lphKzINGcYZyjBWUYJyYRUv8kxYIpgiGbk8QW9vmEhuBCKc8FYwcEUYtSWSq85Y4xTPEcoCfq9PC/G47DT8SeTaDgc+b4fhuGSDC2+yVprEIbOUhkpJdSnhYCoNKfQEJzLshRCFIzDEZAXpVKqIQMzCAJCiDZ2Es0YV3lZRZshjNJssR2QhlZQmFIaRTFIwI3X7NkYEMMJ4iWr5SQkByNtDBgilKIkZaxKt8Tqtq197o26/Sks2Vkzz+ggxHHaEEzz/woasq7DHZ8HG7uto9MezP5gvrV/s33wMM9lrezW4S1fCHyfAnJx+9EdEpgR4Wet9+t2DG/D/QHP/QOfbQB1rBf4NxsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Container Management diagram",title:"Container Management diagram",src:"/refarch-kc/static/548be54ed1b2ca688669399c63109080/2faef/microservice-overview-container-management.png",srcSet:["/refarch-kc/static/548be54ed1b2ca688669399c63109080/7fc1e/microservice-overview-container-management.png 288w","/refarch-kc/static/548be54ed1b2ca688669399c63109080/a5df1/microservice-overview-container-management.png 576w","/refarch-kc/static/548be54ed1b2ca688669399c63109080/2faef/microservice-overview-container-management.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Github repository:")," ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-container-ms"}),"refarch-kc-container-ms")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Kafka topics consumed from:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#orders-topic"}),"Order Topic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#containers-topic"}),"Containers Topic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#container-anomaly-retry-topic"}),"Container Anomaly Retry Topic"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Kafka topics produced to:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#orders-topic"}),"Order Topic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#containers-topic"}),"Containers Topic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#container-anomaly-retry-topic"}),"Container Anomaly Retry Topic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/topic-details/#container-anomaly-dead-topic"}),"Container Anomaly Dead Topic"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Events reacted to:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#order-created-event"}),"Order Created Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#order-reject-event"}),"Order Reject Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#order-cancel-event"}),"Order Cancel Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-added-event"}),"Container Added Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-anomaly-event"}),"Container Anomaly Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-anomaly-retry-event"}),"Container Anomaly Retry Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-on-maintenance-event"}),"Container On Maintenance Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-off-maintenance-event"}),"Container Off Maintenance Event"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Events produced:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#order-spoilt-event"}),"Order Spoilt Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-allocated-event"}),"Container Allocated Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-not-found-event"}),"Container Not Found Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-assigned-event"}),"Container Assigned Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-anomaly-retry-event"}),"Container Anomaly Retry Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-anomaly-dead-event"}),"Container Anomaly Dead Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-on-maintenance-event"}),"Container On Maintenance Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/microservices/event-details/#container-off-maintenance-event"}),"Container Off Maintenance Event"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"EDA Patterns implemented:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/implementation/saga-patterns/"}),"SAGA")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/refarch-kc/implementation/dead-letter-queue/"}),"Dead Letter Queue (DLQ)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/implementation/container-anomaly/"}),"Anomalous Container Tracking"))),Object(n.b)("h2",null,"Build"),Object(n.b)("p",null,"This microservice is built using the ",Object(n.b)("a",i({parentName:"p"},{href:"https://appsody.dev/"}),"Appsody")," development framework. The ",Object(n.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/installing/installing-appsody"}),"Appsody CLI")," is a required prerequisite for building the application locally."),Object(n.b)("p",null,"Appsody will build the application by pulling the contents of the Appsody Stack it is based on and then performing the local application build inside the containerized environment:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"appsody build -t <yournamespace>/kcontainer-spring-container-ms[:tag] [--push]")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can optionally specify a container tag. If left blank, ",Object(n.b)("inlineCode",{parentName:"li"},"latest")," will be used."),Object(n.b)("li",{parentName:"ul"},"You can optionally supply the ",Object(n.b)("inlineCode",{parentName:"li"},"--push")," flag to automatically push the built image to specified remote repository.")),Object(n.b)("p",null,"Performing an Appsody build will update the ",Object(n.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file in the same directory with current information for the application image, labels, and annotations fields."),Object(n.b)("h2",null,"Run"),Object(n.b)("h3",null,"Deployment parameters"),Object(n.b)("p",null,"The following deployment parameters are defined in the ",Object(n.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Required"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"KAFKA_BROKERS"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Comma-separated list of Kafka brokers to connect to")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"KAFKA_APIKEY"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"API Key used to connect to SASL-secured Kafka brokers. This is required when connecting to IBM Event Streams clusters.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"TRUSTSTORE_ENABLED"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Required to be set to ",Object(n.b)("inlineCode",{parentName:"td"},"true")," when connecting to IBM Event Streams on the IBM Cloud Pak for Integration (CP4I).")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"TRUSTSTORE_PATH"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The local path to the required truststore file when connecting to IBM Event Streams on CP4I. See ",Object(n.b)("a",i({parentName:"td"},{href:"#volume-mounts"}),Object(n.b)("strong",{parentName:"a"},"Volume Mounts"))," below.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"TRUSTSTORE_PWD"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The password for the truststore file used for IBM Event Streams server verification.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"KCSOLUTION_CONTAINERS_TOPIC"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The topic name used for communication relating to the containers entity.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"KCSOLUTION_ORDERS_TOPIC"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The topic name used for communication relating to the orders entity.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"KCSOLUTION_CONTAINER_ANOMALY_RETRY_TOPIC"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The topic name used for communication relating to the container anomaly retry actions.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"KCSOLUTION_CONTAINER_ANOMALY_DEAD_TOPIC"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The topic name used for communication relating to the container anomaly dead letter actions.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"POSTGRESQL_URL"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The URL of the PostgreSQL database instance in the form of ",Object(n.b)("inlineCode",{parentName:"td"},"jdbc:postgresql://<hostname>:<port>/<database-name>?sslmode=verify-full&sslfactory=org.postgresql.ssl.NonValidatingFactory"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"POSTGRESQL_USER"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The username of the PostgreSQL database instance.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"POSTGRESQL_PWD"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"YES"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"The password of the PostgreSQL database instance.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"POSTGRESQL_CA_PEM"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Required when connecting to PostgreSQL instances that require SSL-based server verification, such as ",Object(n.b)("a",i({parentName:"td"},{href:"https://cloud.ibm.com/catalog/services/databases-for-postgresql"}),"Databases for PostgreSQL")," on IBM Cloud. See ",Object(n.b)("a",i({parentName:"td"},{href:"#volume-mounts"}),Object(n.b)("strong",{parentName:"a"},"Volume Mounts"))," below.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"ANOMALY_THRESHOLD"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"TBD")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"BPM_ANOMALY"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"TBD")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"BPM_ANOMALY_LOGIN"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"TBD")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"BPM_EXPIRATION"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"TBD")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"BPM_ANOMALY_USER"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"TBD")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"BPM_ANOMALY_PASSWORD"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"NO"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"TBD")))),Object(n.b)("h3",null,"Volume Mounts"),Object(n.b)("p",null,"The Container Management microservice requires up to two files to be injected at runtime for proper operation. As noted in the ",Object(n.b)("inlineCode",{parentName:"p"},"TRUSTSTORE_PATH")," and ",Object(n.b)("inlineCode",{parentName:"p"},"POSTGRESQL_CA_PEM")," parameters above, these files are SSL-based certificates which are required to verfiy the identity of the external service when calling it. These files are provided as ",Object(n.b)("inlineCode",{parentName:"p"},'--docker-options "-v host-src:container-dest ..."')," when running the microservice locally and as a Volume Mount when running the microservice on a Kubernetes cluster."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"TRUSTSTORE_PATH")," parameter is documented in the ",Object(n.b)("strong",{parentName:"p"},"Event Streams Certificates")," section of the ",Object(n.b)("a",i({parentName:"p"},{href:"/refarch-kc/microservices/prereqs/#ibm-event-streams-on-redhat-openshift-container-platform"}),"Prerequisites")," page. The Appsody run command should include a parameter similar to ",Object(n.b)("inlineCode",{parentName:"p"},"-v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks")," in its ",Object(n.b)("inlineCode",{parentName:"p"},"--docker-options")," string to run this microservice locally."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"POSTGRESQL_CA_PEM")," parameter is documented in the ",Object(n.b)("strong",{parentName:"p"},"Creating Postgresql credentials as Kubernetes Secrets")," section of the ",Object(n.b)("a",i({parentName:"p"},{href:"/refarch-kc/microservices/prereqs/#postgresql-on-ibm-cloud"}),"Prerequisites")," page. The Appsody run command should include a parameter similar to ",Object(n.b)("inlineCode",{parentName:"p"},"-v /Users/myuser/Downloads/postgresql.crt:/.postgresql/postgresql.crt -v /Users/myuser/Downloads/postgresql.crt:/root/.postgresql/postgresql.crt")," in its ",Object(n.b)("inlineCode",{parentName:"p"},"--docker-options")," string to run this microservice locally."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")," ",Object(n.b)("inlineCode",{parentName:"p"},'appsody run --docker-options "-v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks " ...')),Object(n.b)("h3",null,"Running the microservice locally"),Object(n.b)("p",null,"When running the microservice locally, you must specify all the required ",Object(n.b)("a",i({parentName:"p"},{href:"#deployment-parameters"}),"deployment parameters")," from above as environment variables via the ",Object(n.b)("inlineCode",{parentName:"p"},"--docker-options")," flag being passed in from the Appsody CLI command."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Example:")," ",Object(n.b)("inlineCode",{parentName:"p"},'appsody run --docker-options "-e KAFKA_BROKERS=remotebroker1:9092,remotebroker2:9092 -e KCSOLUTION_CONTAINERS_TOPIC=containers -e KCSOLUTION_ORDERS_TOPIC=orders -v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks" ...')),Object(n.b)("p",null,"For more details on running the microservice locally, consult the ",Object(n.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/using-appsody/local-development#appsody-local-development"}),"Appsody run documentation")," as well as the deployment information contained in the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-container-ms/blob/master/app-deploy.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"app-deploy.yaml"))," file."),Object(n.b)("h3",null,"Running the microservice remotely"),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://appsody.dev/docs/reference/appsody-operator/"}),"Appsody Operator")," is a required prerequisite for deploying the microservice to a remote Kubernetes or OpenShift cluster."),Object(n.b)("p",null,"To deploy the microservice to a remote cluster:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"appsody deploy <yournamespace>/kcontainer-spring-container-ms[:tag] --no-build")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can omit the ",Object(n.b)("inlineCode",{parentName:"li"},"--no-build")," flag to have Appsody perform a build before deploying the application."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},Object(n.b)("strong",{parentName:"em"},"Note:"))," Performing a build at deploy time requires specifying the absolute container reference path, as well as the ",Object(n.b)("inlineCode",{parentName:"li"},"--push")," flag."),Object(n.b)("li",{parentName:"ul"},"The neccesary deployment parameter information will be read from the ",Object(n.b)("inlineCode",{parentName:"li"},"app-deploy.yaml")," file in the same directory.")),Object(n.b)("h2",null,"Usage Details"),Object(n.b)("h3",null,"REST APIs"),Object(n.b)(p,{kind:"info",mdxType:"InlineNotification"},Object(n.b)("strong",null,"TODO")," REST APIs documentation via Swagger"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-container-management-index-mdx-2b639f0d8be1f9a9fc40.js.map