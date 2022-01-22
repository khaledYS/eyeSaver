class Ay_events {

    /**
     * @param defaultHoverActiveClass = !optional , This is the default class that will be used to add, remove or toggle a class when clicking on an element 
     * @param defaultClickActiveClass = !optional , This is the default class that will be used to add, remove or toggle a class when hovering on an element
     */ 
    constructor(defaultHoverActiveClass, defaultClickActiveClass){

        // the default Active class
        this.defaultHoverActiveClass = defaultHoverActiveClass ? defaultHoverActiveClass : "hover"
        this.defaultClickActiveClass = defaultClickActiveClass ? defaultClickActiveClass : "click"


        console.log(this.defaultHoverActiveClass)
        /////////////////////////////////////////////   -click
        // on click - toggle
        const el_onclick_toggle = document.querySelectorAll('.ay-events-onclick-toggle')
        el_onclick_toggle.forEach(el => {
            el.addEventListener("click",()=>{
                el.classList.toggle(el.getAttribute("ay-events-onclick-toggle") ? el.getAttribute("ay-events-onclick-toggle") : this.defaultClickActiveClass)
            })
        });
        // on click - add
        const el_onclick_add = document.querySelectorAll('.ay-events-onclick-add')
        el_onclick_add.forEach(el => {
            el.addEventListener("click",()=>{
                el.classList.add(el.getAttribute("ay-events-onclick-add") ? el.getAttribute("ay-events-onclick-add") : this.defaultClickActiveClass)
            })
        });
        // on click - remove 
        const el_onclick_remove = document.querySelectorAll('.ay-events-onclick-remove')
        el_onclick_remove.forEach(el => {
            el.addEventListener("click",()=>{
                el.classList.remove(el.getAttribute("ay-events-onclick-remove") ? el.getAttribute("ay-events-onclick-remove") : this.defaultClickActiveClass)
            })
        });
        // on click -mouse -toggle 
        const el_onclick_mouseDown_toggle = document.querySelectorAll('.ay-events-onclick-mousedown-toggle')
        el_onclick_mouseDown_toggle.forEach(el => {
            el.addEventListener("mousedown",()=>{
                el.classList.add(el.getAttribute("ay-events-onclick-mousedown-toggle") ? el.getAttribute("ay-events-onclick-mousedown-toggle") : "mousedown")
            })
            el.addEventListener("mouseup",()=>{
                el.classList.remove(el.getAttribute("ay-events-onclick-mousedown-toggle") ? el.getAttribute("ay-events-onclick-mousedown-toggle") : "mousedown")
            })
        });

        /////////////////////////////////////////////   -Hover
        // on hover -enter -add
        const el_hover_enter_add = document.querySelectorAll('.ay-events-hover-enter-add')
        el_hover_enter_add.forEach(el => {
            el.addEventListener("mouseenter",()=>{
                el.classList.add(el.getAttribute("ay-events-hover-enter-add") ? el.getAttribute("ay-events-hover-enter-add") : this.defaultHoverActiveClass)
            })
        });
        // on hover -enter -remove
        const el_hover_enter_remove = document.querySelectorAll('.ay-events-hover-enter-remove')
        el_hover_enter_remove.forEach(el => {
            el.addEventListener("mouseenter",()=>{
                el.classList.remove(el.getAttribute("ay-events-hover-enter-remove") ? el.getAttribute("ay-events-hover-enter-remove") : this.defaultHoverActiveClass)
            })
        });
        // on hover -exit -add
        const el_hover_exit_add = document.querySelectorAll('.ay-events-hover-exit-add')
        el_hover_exit_add.forEach(el => {
            el.addEventListener("mouseleave",()=>{
                el.classList.add(el.getAttribute("ay-events-hover-exit-add") ? el.getAttribute("ay-events-hover-exit-add") : this.defaultHoverActiveClass)
            })
        });
        // on hover -exit -remove
        const el_hover_exit_remove = document.querySelectorAll('.ay-events-hover-exit-remove')
        el_hover_exit_remove.forEach(el => {
            el.addEventListener("mouseleave",()=>{
                el.classList.remove(el.getAttribute("ay-events-hover-exit-remove") ? el.getAttribute("ay-events-hover-exit-remove") : this.defaultHoverActiveClass)
            })
        });
        // on hover -toggle
        const el_hover_toggle = document.querySelectorAll('.ay-events-hover-toggle')
        el_hover_toggle.forEach(el => {
            el.addEventListener("mouseenter",()=>{
                el.classList.toggle(el.getAttribute("ay-events-hover-toggle") ? el.getAttribute("ay-events-hover-toggle") : this.defaultHoverActiveClass)
            })
            el.addEventListener("mouseleave",()=>{
                el.classList.toggle(el.getAttribute("ay-events-hover-toggle") ? el.getAttribute("ay-events-hover-toggle") : this.defaultHoverActiveClass)
            })
        });
    }
}