let htmlParentElement = $('#htmlCode > h3');
var getButton = $('#btn')

// // Get the HTML of the button element as a string
var buttonHTMLString = getButton.prop('outerHTML');
var divElement = $('<div> </div>');
divElement.text(buttonHTMLString);
htmlParentElement.after(divElement);

// ul
var ulElement = $('<ul></ul>');
divElement.append(ulElement);


$('ul > li').each(function () {
    var liElement = $('<li></li>');
    liElement.text($(this).prop('outerHTML'));
    ulElement.append(liElement);
});

var divElement1 = $('<div> </div>');
var divElement2 = $('<div> </div>');
divElement1.text(`<div draggable="true">Draggable True</div>`);
divElement2.text(`<div draggable="false">Draggable True</div>`);

ulElement.after(divElement1);
ulElement.after(divElement2);


const cssStyles = {
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'lightyellow',
    padding: '5px',
    border: '1px solid black',
    margin: '10px',
};

$('#cssSelector').change(function () {
    var selectedValue = this.value;
    console.log(selectedValue);

    $('*').css({
        color: '',
        fontSize: '',
        backgroundColor: '',
        padding: '',
        border: '',
        margin: '',
    })
    
    switch (selectedValue) {
        case 'none':
            console.log('none');
            // $('#renderedHTML > *').css(''); // Reset styles to default
            $('.output-css').text('').removeClass('output-css-addClass'); // Clear output and remove class
            break;

        case 'universal':
            $('#renderedHTML > *').css(cssStyles);
            $('.output-css').text(`#renderedHTML > * {\n${generateCSSString(cssStyles)}\n}`).addClass('output-css-addClass');
            break;

        case 'tagname':
            $('#renderedHTML > ul > li').css(cssStyles);
            $('.output-css').text(`#renderedHTML > ul > li {\n${generateCSSString(cssStyles)}\n}`).addClass('output-css-addClass');
            break;

        case 'class':
            $('.li-value').css(cssStyles);
            $('.output-css').text(`.li-value {\n${generateCSSString(cssStyles)}\n}`).addClass('output-css-addClass');
            break;

        case 'id':
            $('#btn').css(cssStyles);
            $('.output-css').text(`#btn {\n${generateCSSString(cssStyles)}\n}`).addClass('output-css-addClass');
            break;

        case 'attribute':
            $('div[draggable]').css(cssStyles);
            $('.output-css').text(`div[draggable] {\n${generateCSSString(cssStyles)}\n}`).addClass('output-css-addClass');
            break;

        case 'attribute[attr]':
            $('div[draggable=true]').css(cssStyles);
            $('.output-css').text(`div[draggable=true] {\n${generateCSSString(cssStyles)}\n}`).addClass('output-css-addClass');
            break;

        default:
            break;
    }
});

// Helper function to format CSS styles for display
function generateCSSString(styles) {
    return Object.entries(styles).map(([key, value]) => `${key}: ${value};`).join('\n');
}
