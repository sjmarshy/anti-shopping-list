import React from 'react';
import captureRefFactory from '../util/captureRefFactory';

export default React.createClass({
    render() {

        const captureRefFor = captureRefFactory(this);

        return (
        <div className="main-AddItem">
            <form className="main-AddItem_Form" onSubmit={onSubmit}>
                <input
                    className="main-AddItem_NameInput"
                    type="text"
                    ref={captureRefFor("name")}
                    placeholder="name"
                />
                <input
                    className="main-AddItem_LinkInput"
                    type='text'
                    ref={captureRefFor("link")}
                    placeholder='link'
                />
            </form>
        </div>);
    }
});
