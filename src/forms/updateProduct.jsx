import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProduct, updateProduct } from "../actions/productActions";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const validationSchema = Yup.object().shape({
  title: Yup.string("Enter product's title").required("Title Required"),
  description: Yup.string("Enter product's description").required(
    "Description Required"
  ),
  quantity: Yup.string("Enter product's quantity").required(
    "Quantity Required"
  ),
  price: Yup.string("Enter product's price").required("Price Required"),
});

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);
  const [category, setCategory] = useState(product?.category);
  const [selectedFile, setSelectedFile] = useState(null);
  const { id: productId } = useParams();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [product, dispatch]);

  // useEffect(() => {
  // }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const categories = [
    "Freezed-Dried Meat",
    "Freezed-Dried Seafod",
    "Freezed-Dried Others",
    "Home Made Style Treats",
    "Bundled Gift Box",
    "Pet Suppliments",
    "Pet Toys",
  ];

  const formik = useFormik({
    initialValues: {
      title: product?.title,
      description: product?.description,
      quantity: product?.quantity,
      price: product?.price,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("category", category);
      formData.append("quantity", values.quantity);
      formData.append("price", values.price);

      dispatch(updateProduct(productId, formData));
      navigate('/list-products')
    },
  });

  return (
    <div>
      <Navbar />
      <div className="container cart-margin">
        <div className="row">
          <Grid justifyContent="center" alignItems="center">
            <div className="form-border">
              <div className="form-content">
                <h1
                  style={{ textAlign: "center" }}
                  className="head-style-driver"
                >
                  Add a New Product
                </h1>
                <br />
                <br />
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <TextField
                        className="text-field form-field-style"
                        id="title"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.title && Boolean(formik.errors.title)
                        }
                        helperText={formik.touched.title && formik.errors.title}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormControl fullWidth>
                        <InputLabel id="demo-select-small-label">
                          Category
                        </InputLabel>
                        <Select
                          className="text-field form-field-style"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={category}
                          name="Category"
                          label="Category"
                          onChange={handleCategoryChange}
                        >
                          <MenuItem value={""}>None</MenuItem>
                          {categories.map((category) => {
                            return (
                              <MenuItem value={category}>{category}</MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <TextField
                        className="text-field form-field-style"
                        id="price"
                        name="price"
                        label="Price"
                        type="number"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.price && Boolean(formik.errors.price)
                        }
                        helperText={formik.touched.price && formik.errors.price}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        className="text-field form-field-style"
                        id="quantity"
                        name="quantity"
                        label="Quantity"
                        type="number"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.quantity &&
                          Boolean(formik.errors.quantity)
                        }
                        helperText={
                          formik.touched.quantity && formik.errors.quantity
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <TextareaAutosize
                        className="text-field form-field-style"
                        id="description"
                        name="description"
                        label="Description"
                        type="email"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description &&
                          formik.errors.description
                        }
                        minRows={10}
                      />
                    </div>
                  </div>

                  <br />
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Picture
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileChange}
                    />
                  </Button>
                  <span className="mx-2">{selectedFile?.name}</span>
                  <br />
                  <Button
                    style={{ marginTop: "20px" }}
                    className="rounded-button"
                    size="large"
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Update Product
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
