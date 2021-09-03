(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[474],{4179:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},1697:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return v}});var a=n(2122),l=n(9756),r=n(7294),o=n(3905),i=n(4179);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(6010),c="tabItem_1uMI",d="tabItemActive_2DSg";var p=37,m=39;var h=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,l=e.values,o=e.groupId,i=e.className,h=s(),g=h.tabGroupChoices,f=h.setTabGroupChoices,k=(0,r.useState)(a),b=k[0],y=k[1],v=r.Children.toArray(e.children),w=[];if(null!=o){var N=g[o];null!=N&&N!==b&&l.some((function(e){return e.value===N}))&&y(N)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=l[n].value;y(a),null!=o&&(f(o,a),setTimeout((function(){var e,n,a,l,r,o,i,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,r=e.right,o=window,i=o.innerHeight,s=o.innerWidth,n>=0&&r<=s&&l<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case m:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case p:var l=w.indexOf(e.target)-1;n=w[l]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},i)},l.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};var g=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},f=["components"],k={description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from source, you will need to install some required dependencies.",image:"/img/logo/bee_logo.png",keywords:["nodes","setup","set up","windows","macOS","linux","Debian"]},b="Set Up a Node",y={unversionedId:"setup_a_node",id:"setup_a_node",isDocsHomePage:!1,title:"Set Up a Node",description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from source, you will need to install some required dependencies.",source:"@site/docs/setup_a_node.mdx",sourceDirName:".",slug:"/setup_a_node",permalink:"/setup_a_node",editUrl:"https://github.com/iotaledger/bee/tree/dev/documentation/docs/setup_a_node.mdx",version:"current",frontMatter:{description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from source, you will need to install some required dependencies.",image:"/img/logo/bee_logo.png",keywords:["nodes","setup","set up","windows","macOS","linux","Debian"]},sidebar:"mySidebar",previous:{title:"Configuration",permalink:"/configuration"},next:{title:"Overview",permalink:"/crate_overview"}},v=[{value:"Installing from Source",id:"installing-from-source",children:[{value:"Dependency Packages",id:"dependency-packages",children:[]},{value:"Installing Rust",id:"installing-rust",children:[]},{value:"Updating Rust",id:"updating-rust",children:[]}]},{value:"Compiling the Bee Node",id:"compiling-the-bee-node",children:[{value:"Download the Source",id:"download-the-source",children:[]},{value:"With Dashboard",id:"with-dashboard",children:[]},{value:"Without dashboard",id:"without-dashboard",children:[]},{value:"Running",id:"running",children:[]}]}],w={toc:v};function N(e){var t=e.components,n=(0,l.Z)(e,f);return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-a-node"},"Set Up a Node"),(0,o.kt)("p",null,"You can find the source code for Bee in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee"},"official Bee repository"),".  Before you can install Bee from source, you will need to install some required dependencies."),(0,o.kt)("h2",{id:"installing-from-source"},"Installing from Source"),(0,o.kt)("h3",{id:"dependency-packages"},"Dependency Packages"),(0,o.kt)("p",null,"Before starting the installation process, you should make sure your system has all the required dependencies. "),(0,o.kt)(h,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(g,{value:"debian",mdxType:"TabItem"},(0,o.kt)("p",null,"To run a Bee node in a Debian base system you will need to install the following packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/build-essential"},"build-essential")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/pkg-config"},"pkg-config")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/librocksdb-dev"},"librocksdb-dev")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apt.llvm.org/"},"llvm")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/search?keywords=clang"},"clang")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/unstable/libclang-dev"},"libclang-dev")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/jessie/libssl-dev"},"libssl-dev"))),(0,o.kt)("p",null,"To install all of these packages, you can run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\napt-get upgrade\napt-get install git npm build-essential cmake pkg-config librocksdb-dev llvm clang libclang-dev libssl-dev\n"))),(0,o.kt)(g,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"To run a Bee node in a macOS system, you will need to install the following packages using the ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew")," package manager:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm"))),(0,o.kt)("p",null,"You can run the following command to install brew:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,o.kt)("p",null,"After the installer finishes, you can use brew to install the required packages by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install cmake npm\n"))),(0,o.kt)(g,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"To run a Bee node in a Windows system, you will need to install the following packages using the\n",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"chocolatey")," package manager:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"nodejs-lts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"))),(0,o.kt)("p",null,"To install chocolatey, open Powershell and execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),(0,o.kt)("p",null,"After the installer finishes, you can use chocolatey to install the required packages by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"choco install git --params '/NoAutoCrlf' nodejs-lts cmake --installargs 'ADD_CMAKE_TO_PATH=System' llvm\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will need to restart Powershell for your changes to take effect."))))),(0,o.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,o.kt)("p",null,"You will need to install ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," in order to run a Bee node.  You should install version is ",(0,o.kt)("a",{parentName:"p",href:"https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html"},"1.51"),", or above."),(0,o.kt)(h,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(g,{value:"debian",mdxType:"TabItem"},(0,o.kt)("p",null,"You can install Rust in a Debian system by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\n"))),(0,o.kt)(g,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"You can install Rust in a macOS system by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\n"))),(0,o.kt)(g,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"You can find installation instructions for the Windows system ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"in the official Rust documentation"),"."))),(0,o.kt)("h3",{id:"updating-rust"},"Updating Rust"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," to update your Rust version by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")),(0,o.kt)("h2",{id:"compiling-the-bee-node"},"Compiling the Bee Node"),(0,o.kt)("h3",{id:"download-the-source"},"Download the Source"),(0,o.kt)("p",null,"Once you have installed all the required dependencies, you can start compiling the Bee Node.  To do so, you can simply clone the source code by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/bee.git --branch chrysalis-pt-2\n")),(0,o.kt)("h4",{id:"compiling"},"Compiling"),(0,o.kt)("p",null,"Before you start compiling Bee, you should change your current directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"bee/bee-node"),".  You can do so by running the following command from the same directory where you downloaded the source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bee/bee-node\n")),(0,o.kt)("p",null,"You can compile Bee in two manners:"),(0,o.kt)("h3",{id:"with-dashboard"},"With Dashboard"),(0,o.kt)("p",null,"If you want to build Bee with its Dashboard, you should run the following commands:"),(0,o.kt)(h,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(g,{value:"debian",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init\ncd src/plugins/dashboard/frontend\nnpm install\nnpm run build-bee\ncd -\ncargo build --release --features dashboard\n"))),(0,o.kt)(g,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init\ncd src/plugins/dashboard/frontend\nnpm install\nnpm run build-bee\ncd -\ncargo build --release --features dashboard\n"))),(0,o.kt)(g,{value:"win",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init\ncd src/plugins/dashboard/frontend\nnpm install\nnpm run build-bee\ncd ../../../../\ncargo build --release --features dashboard\n")))),(0,o.kt)("h3",{id:"without-dashboard"},"Without dashboard"),(0,o.kt)("p",null,"If you want to build Bee without its Dashboard, you should run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,o.kt)("h3",{id:"running"},"Running"),(0,o.kt)("p",null,"Once you have downloaded and compiled Bee, you should copy make a copy of the example config file.  Be sure to review and update your configuration.  You can find more information on configuring bee in the ",(0,o.kt)("a",{parentName:"p",href:"/configuration"},"configuration section"),"."),(0,o.kt)("p",null,"To copy the example configuration file, you should run the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp config.example.toml config.toml\n")),(0,o.kt)("p",null,"Once you have copied and updated the configuration, you can run your Bee node by executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"../target/release/bee\n")))}N.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);