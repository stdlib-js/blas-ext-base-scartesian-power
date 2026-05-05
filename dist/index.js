"use strict";var j=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=j(function(Z,y){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),F=require('@stdlib/math-base-special-pow/dist');function T(e,r,n,l,q,u,a,t,o){var w,x,s,f,c,i,v,m,g;if(e<=0||r<=0)return u;if(w=F(e,r),C([a,t]))for(s=o,i=0;i<w;i++){for(g=i,v=r-1;v>=0;v--)m=g%e,g=(g-m)/e,f=q+m*l,x=s+v*t,u[x]=n[f];s+=a}else for(c=w,v=0;v<r;v++)for(c/=e,s=o+v*t,i=0;i<w;i++)m=(i-i%c)/c%e,f=q+m*l,u[s]=n[f],s+=a;return u}y.exports=T
});var b=j(function($,P){
var z=require('@stdlib/blas-base-assert-is-layout/dist'),A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/math-base-special-pow/dist'),E=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),G=p();function H(e,r,n,l,q,u,a){var t,o;if(!z(e))throw new TypeError(d('nullFx',e));if(A(e)){if(a<E(1,R(r,n)))throw new RangeError(d('nullGR',R(r,n),a));t=1,o=a}else{if(a<E(1,n))throw new RangeError(d('nullGR',n,a));t=a,o=1}return G(r,n,l,q,B(r,q),u,t,o,0)}P.exports=H
});var S=j(function(X,M){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=b(),J=p();I(V,"ndarray",J);M.exports=V
});var K=require("path").join,Q=require('@stdlib/utils-try-require/dist'),U=require('@stdlib/assert-is-error/dist'),W=S(),h,_=Q(K(__dirname,"./native.js"));U(_)?h=W:h=_;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
