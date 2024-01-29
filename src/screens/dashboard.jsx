import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";
import io from "socket.io-client";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getOrders } from "../actions/orderActions";
import Chip from '@mui/material/Chip';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import FlagIcon from '@mui/icons-material/Flag';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeliveryModal = ({data, heading}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Show</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h5>{heading}</h5>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Username" secondary={data.username} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AttachEmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Email" secondary={data.email} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FlagIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Country" secondary={data.country} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationCityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="City" secondary={data.city} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <HomeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Address" secondary={data.address} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SendIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Postal Code" secondary={data.postalCode} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ContactPhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Country Code" secondary={data.countryCode} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcCallIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Phone Number" secondary={data.phoneNumber} />
              </ListItem>
            </List>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const Dashboard = () => {
  const [ currentOrders, setOrders ] = useState([])
  const userLogin = useSelector((state) => state.userLogin);
  const allOrders = useSelector((state) => state.getOrder);
  const { orders } = allOrders
  const { loading, userInfo } = userLogin;

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const socket = io(`${process.env.REACT_APP_BACKEND_URL}`);
    
  useEffect(() => {
    dispatch(getOrders())
    orders && setOrders(orders)
    console.log('orders before : ', orders)
  }, [])

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.on("add-order", (data) => {
      setOrders(data)
      console.log(data);
      console.log('orders : ', currentOrders);
    });

    return () => {
      socket.disconnect();
    };
  }, [userInfo, navigate, socket, currentOrders]);
   
  const columns = [
    {
      field: 'contentDetails',
      headerName: 'Content Details',
      width: 150,
    },
    {
      field: 'packageDescription',
      headerName: 'Description',
      width: 150,
    },
    {
      field: 'packageWeight',
      headerName: 'Weight',
      width: 150,
    },
    {
      field: 'packageWidth',
      headerName: 'Width',
      width: 150,
    },
    {
      field: 'pacakageLength',
      headerName: 'Length',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => {
        return (
          <Chip label={params.row.status} color={params.row.status === "pending" ? "warning" : params.row.status === "approved" ? "success" : "primary"} variant="outlined" />
        )
      }
    },
    {
      field: 'deliveryDetails',
      headerName: 'Delivery Details',
      width: 150,
      renderCell: (params) => {
        const data = {
          username: params.row.deliveryUsername,
          email: params.row.deliveryEmail,
          address: params.row.deliveryAddress,
          country: params.row.deliveryCountry,
          city: params.row.deliveryCity,
          postalCode: params.row.deliveryPostalCode,
          countryCode: params.row.deliveryCountryCode,
          phoneNumber: params.row.deliveryPhoneNumber
        }
        return (
          <DeliveryModal data={data} heading={"Delivery Details"}/>
        )
      }
    },
    {
      field: 'pickupDetails',
      headerName: 'Pickup Details',
      width: 150,
      renderCell: (params) => {
        const data = {
          username: params.row.pickupUsername,
          email: params.row.pickupEmail,
          address: params.row.pickupAddress,
          country: params.row.pickupCountry,
          city: params.row.pickupCity,
          postalCode: params.row.pickupPostalCode,
          countryCode: params.row.pickupCountryCode,
          phoneNumber: params.row.pickupPhoneNumber
        }
        return (
          <DeliveryModal data={data} heading={"Pickup Details"}/>
        )
      }
    }
  ];
  
  const rowsAttributes = currentOrders.map((order, index) => {
    return {
      id: index,
      contentDetails: order.contentDetails,
      packageDescription: order.packageDescription,
      packageWeight: order.packageWeight,
      packageWidth: order.packageWidth,
      pacakageLength: order.pacakageLength,
      status: order.status,
      deliveryUsername: order.deliveryUsername,
      deliveryEmail: order.deliveryEmail,
      deliveryAddress: order.deliveryAddress,
      deliveryCountry: order.deliveryCountry,
      deliveryCity: order.deliveryCity,
      deliveryPostalCode: order.deliveryPostalCode,
      deliveryCountryCode: order.deliveryCountryCode, 
      deliveryPhoneNumber: order.deliveryPhoneNumber,
      pickupUsername: order.pickupUsername,
      pickupEmail: order.pickupEmail,
      pickupAddress: order.pickupAddress,
      pickupCountry: order.pickupCountry,
      pickupCity: order.pickupCity,
      pickupPostalCode: order.pickupPostalCode,
      pickupCountryCode: order.pickupCountryCode, 
      pickupPhoneNumber: order.pickupPhoneNumber,
    }
  })
  const rows = [
    ...rowsAttributes,

  ]


  return (
    <div>
      <Navbar />
      {loading && <Loader />}
      <Row>
        <Col>
          <Container>
            <Box sx={{ height: 400, width: 'auto' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Box>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
