(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1666],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},443:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={sidebar_position:1},c={unversionedId:"contribution/contribute_to_warp_docs/docsite_maintenance",id:"contribution/contribute_to_warp_docs/docsite_maintenance",isDocsHomePage:!1,title:"WARP Documentation Maintenance Guide",description:"This documentation site is built on top of the React-based  framework Docusaurus, so most of the recommended configuration can be found in the frameworks documentation.",source:"@site/docs/contribution/contribute_to_warp_docs/docsite_maintenance.md",sourceDirName:"contribution/contribute_to_warp_docs",slug:"/contribution/contribute_to_warp_docs/docsite_maintenance",permalink:"/warp/docs/contribution/contribute_to_warp_docs/docsite_maintenance",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/contribution/contribute_to_warp_docs/docsite_maintenance.md",version:"current",lastUpdatedBy:"Chengchen(Rex) Wang",lastUpdatedAt:1623770417,formattedLastUpdatedAt:"6/15/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Changelog Style Guide Overview",permalink:"/warp/docs/contribution/contribute_to_warp/changelog_style"},next:{title:"Documentation Style Guide",permalink:"/warp/docs/contribution/contribute_to_warp_docs/doc_style"}},s=[],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This documentation site is built on top of the ",(0,i.kt)("inlineCode",{parentName:"p"},"React"),"-based  framework ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),", so most of the recommended configuration can be found in the frameworks documentation."),(0,i.kt)("p",null,"Due to the nature of the frontend framework, most of the plugins this docsite is using can be deprecated or updated over the time. Github has the nice ",(0,i.kt)("inlineCode",{parentName:"p"},"dependabot")," feature which periodically scans this code base and finds the potential vulnerbilities. There are usually 2 types of updates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Major version nump"),(0,i.kt)("li",{parentName:"ul"},"Security patches")),(0,i.kt)("p",null,"The former one requires more human engagement and you should follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," instructions about how to upgrade the major version. This will happen when docusaurus is in GA phase, and perhaps when it has a major/minor version bump."),(0,i.kt)("p",null,"The latter one in most cases will be identified by ",(0,i.kt)("inlineCode",{parentName:"p"},"dependabot")," and only requires a human review + approval, before commentting ",(0,i.kt)("inlineCode",{parentName:"p"},"@dependabot merge")," on the PR. In rare cases, the PR opened by ",(0,i.kt)("inlineCode",{parentName:"p"},"dependabot")," will have merge conflicts against the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch. Developers will need to ",(0,i.kt)("inlineCode",{parentName:"p"},"cherry-pick")," the commit made by ",(0,i.kt)("inlineCode",{parentName:"p"},"dependabot"),", resolve the conflicts and open a separate PR for it."),(0,i.kt)("p",null,"When you want to test your changes to the docs, you can deploy the site locally.\nIf doing this for the first time, install the dev version of the site using the root of the repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn --cwd=website install\n")),(0,i.kt)("p",null,"Then deploy the dev version using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn --cwd=website start\n")),(0,i.kt)("p",null,"to spin up a local server to preview your changes."),(0,i.kt)("p",null,"For more details on deployment, check this ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment"},"page"),"."))}p.isMDXComponent=!0}}]);