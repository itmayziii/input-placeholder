# Input Placeholder

## Purpose
This library tries to help solve the problem that an input placeholder font size can not be larger than the font size
of the input element, otherwise the placeholder will be truncated vertically. Check out this 
[Stack Overflow](https://stackoverflow.com/questions/30916387/placeholder-font-size-bigger-than-16px) for a more complete
idea of the problem.

### How does this library help?
Instead of using the the standard [placeholder](https://www.w3schools.com/TAgs/att_input_placeholder.asp) attribute, 
this library helps use another HTML element, most likely a label as a placeholder. This library does not style the 
label at all, future support may be added in the future, instead it hide / shows the placeholder when appropriate.

## How to use

### Plain JS
1. Load this library via a script tag or use a module bundler.
2. Add the class _label-placeholder_ to the input element you are targeting.
3. Ensure that the label _for_ attribute matches the _id_ attribute of the input.
3. Once the DOM is ready run `new InputPlaceholderHandler.InputPlaceholderHandler.initialize();`

### Typescript
1. Import the library `import InputPlaceholderHandler from 'InputPlaceholderHandler';`
2. Add the class _label-placeholder_ to the input element you are targeting.
3. Ensure that the label _for_ attribute matches the _id_ attribute of the input.
4. Once the DOM is ready run `new InputPlaceholderHandler().initialize();`
