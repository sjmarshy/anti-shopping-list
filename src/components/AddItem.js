import { h } from 'preact'; // eslint-disable-line

const AddItem = ({
    onNameChange,
    onLinkChange,
    onSubmit,
}) => (
    <div className="main-AddItem">
        <form className="main-AddItem_Form" onSubmit={onSubmit}>
            <input
                className="main-AddItem_NameInput"
                type="text"
                placeholder="name"
                onChange={onNameChange}
            />
            <input
                className="main-AddItem_LinkInput"
                type="text"
                placeholder="link"
                onChange={onLinkChange}
            />
            <input
                className="main-AddItem_AddButton"
                type="button"
                value="Add Product"
            />
        </form>
    </div>
);

export default AddItem;
