/**
 * DO NOT EDIT: This file is part of the smartcontent-cdk
 *
 * JqueryCreative class
 */

import BaseCreative from './BaseCreative';
import jQuery from 'jquery';

export default class extends BaseCreative {
  constructor(window) {
    super(window);
  }

  $(selector) {
    return jQuery(selector, this.window.document);
  }
}