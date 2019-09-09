/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 * DOM access and manipulation wrapper functions
 */

import Debug from './debug.js';
var DBG = Debug.setDBG(0); // level of debug traces; see ./debug.js for usage 
const PDBG = Debug.PDBG;

export function getId(id) {
  id = String(id);
  const result = document.getElementById(id);
  if (!result) {
    throw ReferenceError('Error: no element found with id = "' + id + '".');
  }
  return result;
}

export function listen(element, type, listener) {
  element.addEventListener(type, listener);
}

export function hasClass(element, className) {
  className = String(className);
  const classNames = String(element.className).split(' ');
  const result = classNames.some(name => name === className);
  return result;
}

export function addClass(element, className) {
  className = String(className);
  let classNames = element.className;
  if (!hasClass(element, className)) {
    classNames += (classNames.length ? ' ' : '') + className;
  }
  element.className = classNames;
}

export function removeClass(element, className) {
  className = String(className);
  let classNames = element.className.split(' ');
  classNames = classNames.filter(name => name !== className && name !== '');
  element.className = classNames.join(' ');
}

export function createElement(tagName, id, classNames, attributes) {
  const newElement = document.createElement(tagName);
  if (id) {
    newElement.setAttribute('id', id);
  }
  if (classNames) {
    newElement.setAttribute('class', classNames);
  }
  if (attributes && typeof attributes == 'object') {
    for(let attributeName in attributes) {
      newElement.setAttribute(attributeName, attributes[attributeName]);
    }
  }
  return newElement;
}

export function createElementIn(parentElement, tagName, id, classNames, attributes) {
  const newElement = createElement(tagName, id, classNames, attributes);
  if (parentElement) {
    parentElement.appendChild(newElement);
  }
  return newElement;
}

