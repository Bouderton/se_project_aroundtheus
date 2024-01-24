!function(){"use strict";class e{constructor(e,t){this._form=t,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}_setEventListeners(){this._inputElements=[...this._form.querySelectorAll(this._inputSelector)],this.submitBtn=this._form.querySelector(this._submitButtonSelector),this._inputElements.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}_showInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._errorClass),t.textContent=e.validationMessage}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_isFormValid(){return this._inputElements.every((e=>e.validity.valid))}_toggleButtonState(){this._isFormValid()?(this.submitBtn.classList.remove(this._inactiveButtonClass),this.submitBtn.disabled=!1):(this.submitBtn.classList.add(this._inactiveButtonClass),this.submitBtn.disabled=!0)}enableValidation(){this._setEventListeners()}resetValidation(){this._toggleButtonState(),this._inputElements.forEach((e=>{this._hideInputError(e)}))}}class t{constructor(e,t,s){let{name:n,link:i}=e;this.name=n,this.link=i,this._cardTemplate=t,this._handleImageClick=s}_setEventListeners(){this._likeBtn.addEventListener("click",(()=>{this._handleLikeIcon()})),this._trashBtn.addEventListener("click",(()=>{this._handleDeleteCard()})),this._cardImageEl.addEventListener("click",(()=>{this._handleImageClick({name:this.name,link:this.link})}))}_handleLikeIcon(){this._likeBtn.classList.toggle("card__like-button_active")}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}getView(){return this._cardElement=document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0),this._likeBtn=this._cardElement.querySelector(".card__like-button"),this._trashBtn=this._cardElement.querySelector(".card__trash-button"),this._cardImageEl=this._cardElement.querySelector(".card__image"),this._cardTitleEl=this._cardElement.querySelector(".card__description-text"),this._cardTitleEl.textContent=this.name,this._cardImageEl.src=this.link,this._cardImageEl.alt=this.name+"Photo",this._setEventListeners(),this._cardElement}}class s{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("modal_opened")}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._popupElement.querySelector(".modal__close-button").addEventListener("click",(()=>{this.close()})),this._popupElement.addEventListener("click",(e=>{e.target.classList.contains("modal_opened")&&this.close()}))}}class n extends s{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=t}close(){this._popupForm.reset(),super.close()}_getInputValues(){const e=this._popupForm.querySelectorAll(".modal__form-input"),t={};return e.forEach((e=>t[e.name]=e.value)),t}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()}))}}const i=document.querySelector("#profile-title-input"),o=document.querySelector("#profile-subtitle-input"),r=document.forms["modal-form"],a=document.querySelector("#add-card-modal").querySelector("#add-card-form"),l=(document.querySelector("#card-title-input"),document.querySelector("#modal-url-input"),document.querySelector(".cards__list")),c=document.querySelector("#preview-modal"),d=c.querySelector(".modal__image"),u=(c.querySelector(".modal__caption"),document.querySelector("#profile-edit-button")),m=document.querySelector("#add-card-button");function _(e){S.open(e)}document.querySelectorAll(".modal__close-button"),m.addEventListener("click",(()=>{p.resetValidation(),g.open()})),u.addEventListener("click",(()=>{const{name:e,description:t}=v.getUserInfo();i.value=e,o.value=t,E.open()})),d.addEventListener("click",(()=>{S.open()}));const h={formSelector:".modal__form",inputSelector:".modal__form-input",submitButtonSelector:".modal__save-button",inactiveButtonClass:"modal__save-button_disabled",inputErrorClass:"modal__error",errorClass:"modal__form-input_type_error"},p=new e(h,a);p.enableValidation(),new e(h,r).enableValidation();const E=new n("#profile-edit-modal",(function(e){v.setUserInfo(e)}));E.setEventListeners();const v=new class{constructor(e){let{title:t,subtitle:s}=e;this._title=document.querySelector(t),this._subtitle=document.querySelector(s)}getUserInfo(){return{name:this._title.textContent,description:this._subtitle.textContent}}setUserInfo(e){let{name:t,description:s}=e;this._title.textContent=t,this._subtitle.textContent=s}}({title:".profile__title",subtitle:".profile__subtitle"}),g=new n("#add-card-modal",(function(e){let{title:t,subtitle:s}=e;k.addItem({name:t,link:s}),g.close()}));g.setEventListeners();const S=new class extends s{constructor(e){super({popupSelector:e}),this._modalImage=document.querySelector(".modal__image"),this._previewCaption=document.querySelector(".modal__caption")}open(e){let{name:t,link:s}=e;this._modalImage.src=s,this._modalImage.alt=t,this._previewCaption.textContent=t,super.open()}}("#preview-modal");S.setEventListeners();const k=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=t}renderItems(){this._items.forEach((e=>{this.addItem(e)}))}addItem(e){const t=this._renderer(e);this._container.prepend(t)}}({items:[{name:"Yosmite",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"},{name:"Mt Everest",link:"https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg"},{name:"Great Wall of China",link:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"},{name:"Grand Canyon",link:"https://www.amtrakvacations.com/sites/amtrak/files/styles/hero/public/media/images/grand-canyon_670151752-web.jpg?h=f790d5ec&itok=PmHMpYK5"}],renderer:function(e){return new t(e,"#card-template",_).getView()}},l);k.renderItems()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQsS0FBTSxzQkFDTkMsS0FBTSxvS0FFUixDQUNFRCxLQUFNLGVBQ05DLEtBQU0sK0lBdUdOd0UsU0ExREosU0FBb0JPLEdBRWxCLE9BRGEsSUFBSXBGLEVBQUtvRixFQUFVLGlCQUFrQmpGLEdBQ3RDWSxTQUNkLEdBeURFbUMsR0FHRnFCLEVBQWVVLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLW1haW4vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMtbWFpbi8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy1tYWluLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy1tYWluLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLW1haW4vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy1tYWluLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy1tYWluLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy1tYWluLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm0pIHtcclxuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5faW5wdXRFbGVtZW50cyA9IFsuLi50aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xyXG4gICAgdGhpcy5zdWJtaXRCdG4gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaXNGb3JtVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50cy5ldmVyeSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5faXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIC8vIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZSwgbGluayB9LCBjYXJkVGVtcGxhdGUsIGhhbmRsZUltYWdlQ2xpY2spIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxpbmsgPSBsaW5rO1xyXG4gICAgdGhpcy5fY2FyZFRlbXBsYXRlID0gY2FyZFRlbXBsYXRlO1xyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9saWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90cmFzaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHsgbmFtZTogdGhpcy5uYW1lLCBsaW5rOiB0aGlzLmxpbmsgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcclxuICAgIHRoaXMuX2xpa2VCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVEZWxldGVDYXJkKCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3KCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkVGVtcGxhdGUpXHJcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHRoaXMuX2xpa2VCdG4gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xyXG4gICAgdGhpcy5fdHJhc2hCdG4gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RyYXNoLWJ1dHRvblwiKTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX2NhcmRUaXRsZUVsID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY2FyZF9fZGVzY3JpcHRpb24tdGV4dFwiXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2NhcmRUaXRsZUVsLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlRWwuc3JjID0gdGhpcy5saW5rO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlRWwuYWx0ID0gdGhpcy5uYW1lICsgXCJQaG90b1wiO1xyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfb3BlbmVkXCIpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCkge1xyXG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5fcG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Zvcm0taW5wdXRcIik7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiAoaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSkpO1xyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuXHJcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiWW9zbWl0ZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNdCBFdmVyZXN0XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY2RuLmJyaXRhbm5pY2EuY29tLzE3LzgzODE3LTA1MC02N0M4MTRDRC9Nb3VudC1FdmVyZXN0LmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHcmVhdCBXYWxsIG9mIENoaW5hXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yMy9UaGVfR3JlYXRfV2FsbF9vZl9DaGluYV9hdF9KaW5zaGFubGluZy1lZGl0LmpwZy8xMjAwcHgtVGhlX0dyZWF0X1dhbGxfb2ZfQ2hpbmFfYXRfSmluc2hhbmxpbmctZWRpdC5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR3JhbmQgQ2FueW9uXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmFtdHJha3ZhY2F0aW9ucy5jb20vc2l0ZXMvYW10cmFrL2ZpbGVzL3N0eWxlcy9oZXJvL3B1YmxpYy9tZWRpYS9pbWFnZXMvZ3JhbmQtY2FueW9uXzY3MDE1MTc1Mi13ZWIuanBnP2g9Zjc5MGQ1ZWMmaXRvaz1QbUhNcFlLNVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyBQcm9maWxlIFZhcmlhYmxlc1xyXG5cclxuY29uc3QgcHJvZmlsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtdGl0bGUtaW5wdXRcIik7XHJcbmNvbnN0IHByb2ZpbGVTdWJ0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLXN1YnRpdGxlLWlucHV0XCIpO1xyXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmZvcm1zW1wibW9kYWwtZm9ybVwiXTtcclxuXHJcbi8vIENhcmQgVmFyaWFibGVzXHJcblxyXG5jb25zdCBhZGRDYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW1vZGFsXCIpO1xyXG5jb25zdCBhZGRDYXJkRm9ybSA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWZvcm1cIik7XHJcbmNvbnN0IGNhcmRUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRpdGxlLWlucHV0XCIpO1xyXG5jb25zdCBjYXJkVXJsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLXVybC1pbnB1dFwiKTtcclxuY29uc3QgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcclxuXHJcbi8vIFByZXZpZXcgSW1hZ2UgVmFyaWFibGVzXHJcblxyXG5jb25zdCBwcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XHJcbmNvbnN0IG1vZGFsSW1hZ2UgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XHJcbmNvbnN0IHByZXZpZXdDYXB0aW9uID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XHJcblxyXG4vLyBCdXR0b25zXHJcblxyXG5jb25zdCBwcm9maWxlRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgYWRkTmV3Q2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtYnV0dG9uXCIpO1xyXG5jb25zdCBjbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19jbG9zZS1idXR0b25cIik7XHJcblxyXG4vLyBGVU5DVElPTlNcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KGRhdGEpIHtcclxuICBwcm9maWxlVXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhcmRTdWJtaXQoeyB0aXRsZTogbmFtZSwgc3VidGl0bGU6IGxpbmsgfSkge1xyXG4gIG5ld0NhcmRTZWN0aW9uLmFkZEl0ZW0oeyBuYW1lLCBsaW5rIH0pO1xyXG4gIGFkZEltYWdlRm9ybS5jbG9zZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbWFnZUNsaWNrKGNhcmQpIHtcclxuICBwcmV2aWV3SW1hZ2VQb3B1cC5vcGVuKGNhcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNhcmREYXRhKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBcIiNjYXJkLXRlbXBsYXRlXCIsIGhhbmRsZUltYWdlQ2xpY2spO1xyXG4gIHJldHVybiBjYXJkLmdldFZpZXcoKTtcclxufVxyXG5cclxuLy8gRVZFTlQgTElTVEVORVJTXHJcblxyXG5hZGROZXdDYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYWRkQ2FyZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgYWRkSW1hZ2VGb3JtLm9wZW4oKTtcclxufSk7XHJcblxyXG5wcm9maWxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHByb2ZpbGVVc2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlID0gbmFtZTtcclxuICBwcm9maWxlU3VidGl0bGVJbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG4gIG5ld1BvcHVwRm9ybS5vcGVuKCk7XHJcbn0pO1xyXG5cclxubW9kYWxJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHByZXZpZXdJbWFnZVBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWlucHV0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zYXZlLWJ1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taW5wdXRfdHlwZV9lcnJvclwiLFxyXG59O1xyXG5cclxuY29uc3QgYWRkQ2FyZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGFkZENhcmRGb3JtKTtcclxuYWRkQ2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuY29uc3QgZWRpdFByb2ZpbGVGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwcm9maWxlRm9ybSk7XHJcbmVkaXRQcm9maWxlRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBuZXdQb3B1cEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBcIiNwcm9maWxlLWVkaXQtbW9kYWxcIixcclxuICBoYW5kbGVQcm9maWxlRWRpdFN1Ym1pdFxyXG4pO1xyXG5uZXdQb3B1cEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVVc2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgdGl0bGU6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXHJcbiAgc3VidGl0bGU6IFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgYWRkSW1hZ2VGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjYWRkLWNhcmQtbW9kYWxcIiwgaGFuZGxlQ2FyZFN1Ym1pdCk7XHJcbmFkZEltYWdlRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgcHJldmlld0ltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIjcHJldmlldy1tb2RhbFwiKTtcclxucHJldmlld0ltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IG5ld0NhcmRTZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcclxuICAgIHJlbmRlcmVyOiBjcmVhdGVDYXJkLFxyXG4gIH0sXHJcbiAgY2FyZHNXcmFwXHJcbik7XHJcblxyXG5uZXdDYXJkU2VjdGlvbi5yZW5kZXJJdGVtcygpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyB0aXRsZSwgc3VidGl0bGUgfSkge1xyXG4gICAgdGhpcy5fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlKTtcclxuICAgIHRoaXMuX3N1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdWJ0aXRsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX3RpdGxlLnRleHRDb250ZW50LFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5fc3VidGl0bGUudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyBuYW1lLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9zdWJ0aXRsZS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XHJcbiAgICB0aGlzLl9tb2RhbEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XHJcbiAgICB0aGlzLl9wcmV2aWV3Q2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKHsgbmFtZSwgbGluayB9KSB7XHJcbiAgICB0aGlzLl9tb2RhbEltYWdlLnNyYyA9IGxpbms7XHJcbiAgICB0aGlzLl9tb2RhbEltYWdlLmFsdCA9IG5hbWU7XHJcbiAgICB0aGlzLl9wcmV2aWV3Q2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfVxyXG59XHJcbi8vIERPIFRISVMgXl5eXlxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjc3NTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjc3NTZWxlY3RvcjtcclxuICB9XHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShkYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRJdGVtKGRhdGEpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcihkYXRhKTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRm9ybVZhbGlkYXRvciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwiZm9ybSIsInRoaXMiLCJfZm9ybSIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9pbnB1dEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInN1Ym1pdEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwiaW5wdXRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX3Nob3dJbnB1dEVycm9yIiwiZXJyb3JNZXNzYWdlRWwiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2lzRm9ybVZhbGlkIiwiZXZlcnkiLCJkaXNhYmxlZCIsImVuYWJsZVZhbGlkYXRpb24iLCJyZXNldFZhbGlkYXRpb24iLCJDYXJkIiwiX3JlZiIsImNhcmRUZW1wbGF0ZSIsImhhbmRsZUltYWdlQ2xpY2siLCJuYW1lIiwibGluayIsIl9jYXJkVGVtcGxhdGUiLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9saWtlQnRuIiwiX2hhbmRsZUxpa2VJY29uIiwiX3RyYXNoQnRuIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfY2FyZEltYWdlRWwiLCJ0b2dnbGUiLCJfY2FyZEVsZW1lbnQiLCJnZXRWaWV3IiwiZG9jdW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2NhcmRUaXRsZUVsIiwic3JjIiwiYWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIm9wZW4iLCJfaGFuZGxlRXNjQ2xvc2UiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJzZXRFdmVudExpc3RlbmVycyIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9wb3B1cEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsInJlc2V0IiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRzIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcm9maWxlVGl0bGVJbnB1dCIsInByb2ZpbGVTdWJ0aXRsZUlucHV0IiwicHJvZmlsZUZvcm0iLCJmb3JtcyIsImFkZENhcmRGb3JtIiwiY2FyZHNXcmFwIiwicHJldmlld01vZGFsIiwibW9kYWxJbWFnZSIsInByb2ZpbGVFZGl0QnRuIiwiYWRkTmV3Q2FyZEJ0biIsImNhcmQiLCJwcmV2aWV3SW1hZ2VQb3B1cCIsImFkZENhcmRGb3JtVmFsaWRhdG9yIiwiYWRkSW1hZ2VGb3JtIiwiZGVzY3JpcHRpb24iLCJwcm9maWxlVXNlckluZm8iLCJnZXRVc2VySW5mbyIsIm5ld1BvcHVwRm9ybSIsImZvcm1TZWxlY3RvciIsImRhdGEiLCJzZXRVc2VySW5mbyIsInRpdGxlIiwic3VidGl0bGUiLCJfdGl0bGUiLCJfc3VidGl0bGUiLCJfcmVmMiIsIm5ld0NhcmRTZWN0aW9uIiwiYWRkSXRlbSIsIl9tb2RhbEltYWdlIiwiX3ByZXZpZXdDYXB0aW9uIiwiY3NzU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiZWxlbWVudCIsInByZXBlbmQiLCJjYXJkRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=