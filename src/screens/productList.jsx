import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../actions/productActions";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products: allProducts } = useSelector((state) => state.products);
  const [open, setOpen] = React.useState(false);
  const [productId, setProductId] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {}, [allProducts]);

  return (
    <div>
      <Navbar />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Are you sure you want to delete?
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(deleteProduct(productId));
                handleClose();
                navigate('/list-products')
              }}
            >
              YES
            </Button>
            <Button
              className="mx-2"
              variant="outlined"
              color="error"
              onClick={handleClose}
            >
              NO
            </Button>
          </Box>
        </Fade>
      </Modal>
      <div className="container cart-margin" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allProducts?.map((product) => (
                  <tr>
                    <td>{product?.title}</td>
                    <td>{product?.price}</td>
                    <td>{product?.quantity}</td>
                    <td>
                      <Link
                        to={`/update-product/${product?._id}`}
                        className="btn btn-md rounded-circle bg-light border mt-4 mx-1"
                        // onClick={() => setProductId(product?._id)}
                      >
                        <i className="bi bi-pencil"></i>
                      </Link>
                      <button
                        className="btn btn-md rounded-circle bg-light border mt-4"
                        onClick={() => {
                          setProductId(product?._id)
                          handleOpen();
                        }}
                      >
                        <i className="fa fa-times text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
