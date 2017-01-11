import { h } from 'preact'; // eslint-disable-line

export default () => <div className="main-AddItem">
  <form className="main-AddItem_Form">
    <input
      className="main-AddItem_NameInput"
      type="text"
      placeholder="name"
    />
    <input
      className="main-AddItem_LinkInput"
      type="text"
      placeholder="link"
    />
    <input
      className="main-AddItem_AddButton"
      type="button"
      value="Add Product"
    />
  </form>
</div>;
