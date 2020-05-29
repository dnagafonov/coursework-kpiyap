import { toast } from 'react-toastify';

export const successToast = message => toast.success(message, { 
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000
 });

 export const errorToast = message => toast.error(message, { 
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000
 });

 export const warningToast = message => toast.warn(message, { 
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000
 });