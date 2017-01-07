import { h } from 'preact'; // eslint-disable-line
import { inspect } from 'util';
import { compose } from 'ramda';

import captureRefFactory from '../util/captureRefFactory';

const refs = {};

const log = x => console.log(x); // eslint-disable-line
const logClicked = log.bind(null, 'yo');
const logRefs = () => log.bind(null, inspect(refs, { depth: null }));

const preventDefault = e => e.preventDefault();

const preventDefaultAndLogClicked = compose(logClicked, preventDefault);
const onSubmit = preventDefaultAndLogClicked;

const captureRefFor = captureRefFactory(refs);

export default () => <div className="main-AddItem">
  <form className="main-AddItem_Form">
    <input
      className="main-AddItem_NameInput"
      type="text"
      ref={captureRefFor('name')}
      placeholder="name"
    />
    <input
      className="main-AddItem_LinkInput"
      type="text"
      ref={captureRefFor('link')}
      placeholder="link"
    />
    <input
      className="main-AddItem_AddButton"
      type="button"
      value="Add Product"
      onClick={onSubmit}
    />
  </form>
</div>;
