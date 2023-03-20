export function disableScroll(bool) {
// To get the scroll position of current webpage
let TopScroll = window.pageYOffset 
let LeftScroll = window.pageXOffset

// if scroll happens, set it to the previous value

    bool ? 
        window.onscroll = () => {window.scrollTo(LeftScroll, TopScroll) } 
        :
        window.onscroll = function() {};
}
