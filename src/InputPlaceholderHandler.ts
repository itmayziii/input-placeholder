import * as $ from 'jquery';

export class InputPlaceholderHandler {
    private labelPlaceholderClass = 'label-placeholder';

    public initialize(): void {
        const inputs = this.findLabelPlaceholderInputs();

        this.listenToFocus(inputs, this.respondToFocus);
        this.listenToBlur(inputs, this.respondToBlur);
    }

    private listenToFocus(labels: JQuery, onFocus: any): void {
        labels.focus(onFocus.bind(this));
    }

    private listenToBlur(labels: JQuery, onBlur: any): void {
        labels.blur(onBlur.bind(this));
    }

    private findLabelPlaceholderInputs(): JQuery{
        return $(`.${this.labelPlaceholderClass}`);
    }

    private respondToFocus(event: any): void {
        const inputId = this.getIdFromEventTarget(event);
        if (!inputId) {
            return;
        }

        const labelElement = this.findLabelById(inputId);
        if (!labelElement) {
            return;
        }

        labelElement.hide();
    }

    private respondToBlur(event: any): void {
        const inputValue = event.currentTarget.value;
        const inputId = event.currentTarget.getAttribute('id');
        const labelElement = this.findLabelById(inputId);

        if (!labelElement || inputValue !== '') {
            return;
        }

        labelElement.show();
    }

    private findLabelById(id: string): JQuery {
        const labelElement: JQuery = $(`[for=${id}]`);

        if (labelElement.length !== 1) {
            console.error(`InputPlaceholderHandler: No corresponding label for input with ID - ${id}`);
            return;
        }

        return labelElement;
    }

    private getIdFromEventTarget(event: any): string {
        const id: string = event.currentTarget.getAttribute('id');

        if (!id) {
            console.error(`InputPlaceholderHandler: Input with class - ${this.labelPlaceholderClass}`);
            return;
        }

        return id;
    }

}

$(document).ready(() => {
    new InputPlaceholderHandler().initialize();
});


// InputPlaceholderHandler.prototype.initialize = function () {
//     var inputs = this.findLabelPlaceholderInputs();
//     this.listenToFocus(inputs, this.respondToFocus);
//     this.listenToBlur(inputs, this.respondToBlur);
// };
//
// /**
//  * @returns {object[]}
//  */
// InputPlaceholderHandler.prototype.findLabelPlaceholderInputs = function() {
//     return $('.label-placeholder');
// };
//
// InputPlaceholderHandler.prototype.listenToFocus = function(labels, onFocus) {
//     labels.focus(onFocus.bind(this));
// };
//
// InputPlaceholderHandler.prototype.listenToBlur = function(labels, onBlur) {
//     labels.blur(onBlur.bind(this));
// };
//
// InputPlaceholderHandler.prototype.respondToFocus = function(event) {
//     var inputId = event.currentTarget.getAttribute('id');
//     var labelElement = this.findLabelById(inputId);
//
//     if (!labelElement) {
//         return;
//     }
//
//     labelElement.hide();
// };
//
// InputPlaceholderHandler.prototype.respondToBlur = function(event) {
//     var inputValue = event.currentTarget.value;
//     var inputId = event.currentTarget.getAttribute('id');
//     var labelElement = this.findLabelById(inputId);
//
//     if (!labelElement || inputValue !== '') {
//         return;
//     }
//
//     labelElement.show();
// };
//
// InputPlaceholderHandler.prototype.findLabelById = function(id) {
//     var labelElement = $('[for=' + id + ']');
//
//     if (labelElement.length !== 1) {
//         console.error('InputPlaceholderHandler: Could not find corresponding label for input with ID - ', id);
//         return false;
//     }
//
//     return labelElement;
// };