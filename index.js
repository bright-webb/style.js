/*
Author: Bright Webb
Description: javascript package that allows you to write css in js
*/

export class Style {
    constructor() {
        this.style = document.createElement('style');
        this.style.appendChild(document.createTextNode(''));
        document.head.appendChild(this.style);
    }

    addRule(selector, rules, index) {
        if (typeof index === 'number') {
            this.style.sheet.insertRule(`${selector} { ${rules} }`, index);
        } else {
            this.style.sheet.insertRule(`${selector} { ${rules} }`);
        }
    }

    removeRule(index) {
        this.style.sheet.deleteRule(index);
    }

    color(color) {
        return `color: ${color};`;
    }

    backgroundColor(color) {
        return `background-color: ${color};`;
    }

    border(color) {
        return `border: ${color};`;
    }

    borderRadius(radius) {
        return `border-radius: ${radius};`;
    }

    boxShadow(color) {
        return `box-shadow: ${color};`;
    }

    padding(padding) {
        return `padding: ${padding};`;
    }

    margin(margin) {
        return `margin: ${margin};`;
    }

    width(width) {
        return `width: ${width};`;
    }

    height(height) {
        return `height: ${height};`;
    }

    display(display) {
        return `display: ${display};`;
    }

    position(position) {
        return `position: ${position};`;
    }

    top(top) {
        return `top: ${top};`;
    }

    left(left) {
        return `left: ${left};`;
    }

    right(right) {
        return `right: ${right};`;
    }

    bottom(bottom) {
        return `bottom: ${bottom};`;
    }

    zIndex(zIndex) {
        return `z-index: ${zIndex};`;
    }

    overflow(overflow) {
        return `overflow: ${overflow};`;
    }

    overflowX(overflowX) {
        return `overflow-x: ${overflowX};`;
    }

    overflowY(overflowY) {
        return `overflow-y: ${overflowY};`;
    }

    cursor(cursor) {
        return `cursor: ${cursor};`;
    }

    textAlign(textAlign) {
        return `text-align: ${textAlign};`;
    }

    fontSize(fontSize) {
        return `font-size: ${fontSize};`;
    }

    fontWeight(fontWeight) {
        return `font-weight: ${fontWeight};`;
    }

    fontFamily(fontFamily) {
        return `font-family: ${fontFamily};`;
    }

    lineHeight(lineHeight) {
        return `line-height: ${lineHeight};`;
    }

    letterSpacing(letterSpacing) {
        return `letter-spacing: ${letterSpacing};`;
    }

    textTransform(textTransform) {
        return `text-transform: ${textTransform};`;
    }

    textOverflow(textOverflow) {
        return `text-overflow: ${textOverflow};`;
    }

    whiteSpace(whiteSpace) {
        return `white-space: ${whiteSpace};`;
    }

    wordBreak(wordBreak) {
        return `word-break: ${wordBreak};`;
    }

    wordWrap(wordWrap) {
        return `word-wrap: ${wordWrap};`;
    }

    transition(transition) {
        return `transition: ${transition};`;
    }

    transform(transform) {
        return `transform: ${transform};`;
    }

    transformOrigin(transformOrigin) {
        return `transform-origin: ${transformOrigin};`;
    }

    animation(animation) {
        return `animation: ${animation};`;
    }

    animationName(animationName) {
        return `animation-name: ${animationName};`;
    }

    animationDuration(animationDuration) {
        return `animation-duration: ${animationDuration};`;
    }

    animationTimingFunction(animationTimingFunction) {
        return `animation-timing-function: ${animationTimingFunction};`;
    }

    animationDelay(animationDelay) {
        return `animation-delay: ${animationDelay};`;
    }

    animationIterationCount(animationIterationCount) {
        return `animation-iteration-count: ${animationIterationCount};`;
    }

    animationDirection(animationDirection) {
        return `animation-direction: ${animationDirection};`;
    }

    animationFillMode(animationFillMode) {
        return `animation-fill-mode: ${animationFillMode};`;
    }

    animationPlayState(animationPlayState) {
        return `animation-play-state: ${animationPlayState};`;
    }

    animationDelay(animationDelay) {
        return `animation-delay: ${animationDelay};`;
    }

    flexDirection(flexDirection) {
        return `flex-direction: ${flexDirection};`;
    }

    flexWrap(flexWrap) {
        return `flex-wrap: ${flexWrap};`;
    }

    justifyContent(justifyContent) {
        return `justify-content: ${justifyContent};`;
    }

    alignItems(alignItems) {
        return `align-items: ${alignItems};`;
    }

    alignContent(alignContent) {
        return `align-content: ${alignContent};`;
    }

    flex(flex) {
        return `flex: ${flex};`;
    }

    flexGrow(flexGrow) {
        return `flex-grow: ${flexGrow};`;
    }

    flexShrink(flexShrink) {
        return `flex-shrink: ${flexShrink};`;
    }

    flexBasis(flexBasis) {
        return `flex-basis: ${flexBasis};`;
    }

    order(order) {
        return `order: ${order};`;
    }

    alignSelf(alignSelf) {
        return `align-self: ${alignSelf};`;
    }

    flexFlow(flexFlow) {
        return `flex-flow: ${flexFlow};`;
    }

    background(background) {
        return `background: ${background};`;
    }

    backgroundImage(backgroundImage) {
        return `background-image: ${backgroundImage};`;
    }

    backgroundSize(backgroundSize) {
        return `background-size: ${backgroundSize};`;
    }

    backgroundPosition(backgroundPosition) {
        return `background-position: ${backgroundPosition};`;
    }

    backgroundRepeat(backgroundRepeat) {
        return `background-repeat: ${backgroundRepeat};`;
    }

    backgroundAttachment(backgroundAttachment) {
        return `background-attachment: ${backgroundAttachment};`;
    }

    backgroundOrigin(backgroundOrigin) {
        return `background-origin: ${backgroundOrigin};`;
    }

    backgroundClip(backgroundClip) {
        return `background-clip: ${backgroundClip};`;
    }

    backgroundColor(backgroundColor) {
        return `background-color: ${backgroundColor};`;
    }

    backgroundBlendMode(backgroundBlendMode) {
        return `background-blend-mode: ${backgroundBlendMode};`;
    }

    border(border) {
        return `border: ${border};`;
    }

    borderStyle(borderStyle) {
        return `border-style: ${borderStyle};`;
    }

    borderWidth(borderWidth) {
        return `border-width: ${borderWidth};`;
    }

    borderColor(borderColor) {
        return `border-color: ${borderColor};`;
    }

    borderTop(borderTop) {
        return `border-top: ${borderTop};`;
    }

    borderTopStyle(borderTopStyle) {
        return `border-top-style: ${borderTopStyle};`;
    }

    borderTopWidth(borderTopWidth) {
        return `border-top-width: ${borderTopWidth};`;
    }

    borderTopColor(borderTopColor) {
        return `border-top-color: ${borderTopColor};`;
    }

    borderRight(borderRight) {
        return `border-right: ${borderRight};`;
    }

    borderRightStyle(borderRightStyle) {
        return `border-right-style: ${borderRightStyle};`;
    }

    borderRightWidth(borderRightWidth) {
        return `border-right-width: ${borderRightWidth};`;
    }

    borderRightColor(borderRightColor) {
        return `border-right-color: ${borderRightColor};`;
    }

    borderBottom(borderBottom) {
        return `border-bottom: ${borderBottom};`;
    }

    borderBottomStyle(borderBottomStyle) {
        return `border-bottom-style: ${borderBottomStyle};`;
    }

    borderBottomWidth(borderBottomWidth) {
        return `border-bottom-width: ${borderBottomWidth};`;
    }

    borderBottomColor(borderBottomColor) {
        return `border-bottom-color: ${borderBottomColor};`;
    }

    borderLeft(borderLeft) {
        return `border-left: ${borderLeft};`;
    }

    borderLeftStyle(borderLeftStyle) {
        return `border-left-style: ${borderLeftStyle};`;
    }

    borderLeftWidth(borderLeftWidth) {
        return `border-left-width: ${borderLeftWidth};`;
    }

    borderLeftColor(borderLeftColor) {
        return `border-left-color: ${borderLeftColor};`;
    }

    borderRadius(borderRadius) {
        return `border-radius: ${borderRadius};`;
    }

    borderTopLeftRadius(borderTopLeftRadius) {
        return `border-top-left-radius: ${borderTopLeftRadius};`;
    }

    borderTopRightRadius(borderTopRightRadius) {
        return `border-top-right-radius: ${borderTopRightRadius};`;
    }

    borderBottomRightRadius(borderBottomRightRadius) {
        return `border-bottom-right-radius: ${borderBottomRightRadius};`;
    }

    borderBottomLeftRadius(borderBottomLeftRadius) {
        return `border-bottom-left-radius: ${borderBottomLeftRadius};`;
    }

    borderImage(borderImage) {
        return `border-image: ${borderImage};`;
    }

    borderImageSource(borderImageSource) {
        return `border-image-source: ${borderImageSource};`;
    }

    borderImageSlice(borderImageSlice) {
        return `border-image-slice: ${borderImageSlice};`;
    }

    borderImageWidth(borderImageWidth) {
        return `border-image-width: ${borderImageWidth};`;
    }

    borderImageOutset(borderImageOutset) {
        return `border-image-outset: ${borderImageOutset};`;
    }

    borderImageRepeat(borderImageRepeat) {
        return `border-image-repeat: ${borderImageRepeat};`;
    }

    outline(outline) {
        return `outline: ${outline};`;
    }

    outlineStyle(outlineStyle) {
        return `outline-style: ${outlineStyle};`;
    }

    outlineWidth(outlineWidth) {
        return `outline-width: ${outlineWidth};`;
    }

    outlineColor(outlineColor) {
        return `outline-color: ${outlineColor};`;
    }

    outlineOffset(outlineOffset) {
        return `outline-offset: ${outlineOffset};`;
    }

    boxShadow(boxShadow) {
        return `box-shadow: ${boxShadow};`;
    }

    opacity(opacity) {
        return `opacity: ${opacity};`;
    }



}




// usuage example
// const style = new Style();
// style.addRule('.my-class', style.color('red'));
// style.addRule('.my-class', style.backgroundColor('blue'));
// style.addRule('.my-class', style.border('1px solid red'));


// style.addRule('.my-class', 'background: black; color: white;');
