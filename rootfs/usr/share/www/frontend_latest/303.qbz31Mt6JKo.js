export const id=303;export const ids=[303];export const modules={3276:(e,i,a)=>{a.d(i,{l:()=>p});var o=a(6312),t=a(8689),l=a(4653),n=a(4599),d=a(5112),r=a(8857),s=a(9600);a(4169);const c=["button","ha-list-item"],p=(e,i)=>d.qy` <div class="header_title"> <span>${i}</span> <ha-icon-button .label="${e?.localize("ui.dialogs.generic.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> </div> `;(0,o.A)([(0,r.EM)("ha-dialog")],(function(e,i){class a extends i{constructor(...i){super(...i),e(this)}}return{F:a,d:[{kind:"field",key:s.Xr,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){this.contentElement?.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return d.qy`<slot name="heading"> ${(0,t.A)(a,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,t.A)(a,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,t.A)(a,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[n.R,d.AH`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-12px;top:-12px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),l.u)},5303:(e,i,a)=>{a.r(i);var o=a(6312),t=a(5112),l=a(8857),n=a(4897),d=a(3276);(0,o.A)([(0,l.EM)("app-dialog")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"localize",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this.localize=e.localize}},{kind:"method",key:"closeDialog",value:async function(){this.localize=void 0,(0,n.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this.localize?t.qy`<ha-dialog open hideActions @closed="${this.closeDialog}" .heading="${(0,d.l)(void 0,this.localize("ui.panel.page-onboarding.welcome.download_app")||"Click here to download the app")}"> <div> <div class="app-qr"> <a target="_blank" rel="noreferrer noopener" href="https://apps.apple.com/app/home-assistant/id1099568401?mt=8"> <img loading="lazy" src="/static/images/appstore.svg" alt="${this.localize("ui.panel.page-onboarding.welcome.appstore")}" class="icon"> <img loading="lazy" src="/static/images/qr-appstore.svg" alt="${this.localize("ui.panel.page-onboarding.welcome.appstore")}"> </a> <a target="_blank" rel="noreferrer noopener" href="https://play.google.com/store/apps/details?id=io.homeassistant.companion.android"> <img loading="lazy" src="/static/images/playstore.svg" alt="${this.localize("ui.panel.page-onboarding.welcome.playstore")}" class="icon"> <img loading="lazy" src="/static/images/qr-playstore.svg" alt="${this.localize("ui.panel.page-onboarding.welcome.playstore")}"> </a> </div> </div> </ha-dialog>`:t.s6}},{kind:"field",static:!0,key:"styles",value:()=>t.AH`ha-dialog{--mdc-dialog-min-width:min(500px, 90vw)}.app-qr{display:flex;justify-content:space-between;box-sizing:border-box;gap:32px;width:100%}.app-qr a,.app-qr img{flex:1;max-width:180px}`}]}}),t.WF)}};
//# sourceMappingURL=303.qbz31Mt6JKo.js.map