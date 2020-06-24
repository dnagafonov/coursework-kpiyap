import { toast } from 'react-toastify';

export const successToast = message => toast.success(message, { 
   position: toast.POSITION.TOP_CENTER,
   autoClose: 5000
 });

 export const errorToast = message => toast.error(message, { 
   position: toast.POSITION.TOP_CENTER,
   autoClose: 5000
 });

 export const infoToast = message => toast.info(message, { 
   position: toast.POSITION.TOP_CENTER,
   autoClose: false
});

 export const warningToast = message => toast.warn(message, { 
   position: toast.POSITION.TOP_CENTER,
   autoClose: 5000
 });

 export const updateSuccessToast = (toastId, message) => toast.update(toastId, {
   type: toast.TYPE.SUCCESS,
   render: message,
   autoClose: 5000 
});

export const updateInfoToast = (toastId, message) => toast.update(toastId, {
   type: toast.TYPE.INFO,
   render: message,
   autoClose: 5000 
});

export const updateWarningToast = (toastId, message) => toast.update(toastId, {
   type: toast.TYPE.WARNING,
   render: message,
   autoClose: 5000 
});

export const updateErrorToast = (toastId, message) => toast.update(toastId, {
   type: toast.TYPE.ERROR,
   render: message,
   autoClose: 5000 
});

export const infoToastAutoclose = message => toast.info(message, { 
   position: toast.POSITION.TOP_CENTER,
   autoClose: 5000
});