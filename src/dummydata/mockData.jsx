import avatar from '../dummydata/photos/avatar.jpg';
import avatar2 from '../dummydata/photos/avatar2.jpg';
import avatar3 from '../dummydata/photos/avatar3.png';
import avatar4 from '../dummydata/photos/avatar4.jpg';

// imported in in tablechart component.
export const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Declined",
    },
];

//dummy data for graph imported in chart component
export const data = [ 
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  { name: "July", Total: 1100 },
  { name: "August", Total: 1400 },
  { name: "September", Total: 1000 },
  { name: "October", Total: 1300 },
  { name: "November", Total: 1600 },
  { name: "December", Total: 1900 },
];




// imported in datatable component
export const userColumns = [

  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return(
        <div className="cellwithimg">
          <img className="cellimg" src = {params.row.img} alt='avatar'/>
          {params.row.username}
        </div>
      )
    },
  },

  {
    field:"email", 
    headerName: "Email", 
    width: 230,
  },
  {
    field:"address", 
    headerName: "Address", 
    width: 100,
  },
  {
    field:"status", 
    headerName: "Status", 
    width: 160,
    renderCell: (params) => {
      return(
        <div className={`cellwithstatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    }
  }
];


//dummy data for creating form  in Add.jsx
export const userInputs = [
  {
    id: 'username',
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 'displayName',
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 'email',
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 'phone',
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 'password',
    label: "Password",
    type: "password",
    placeholder: ""
  },
  {
    id: 'address',
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 'country',
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
];


//products dummy data
export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];



