import "./admin.css";

const Admin = () => {
  return (
    <div className="admin-page">
      <h1> Manage your products</h1>);
      <div className="capture-product"></div>
      <div className="my-control">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="my-control">
        <label>Price</label>
        <input type="number" />
      </div>
      <div className="my-control">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="my-control">
        <label>Stock</label>
        <input type="text" />
      </div>
      <div className="my-control">
        <label>Image</label>
        <input type="text" />
      </div>
      <div className="my-control">
        <label>Catagory</label>
        <input type="text" />

        <div className="my-control">
          <label>Discount</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default Admin;
