
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const GazaPopups = () => {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShow(true)
        }, 2000)
        return ()=>clearTimeout(timer)
    }, [])
   if (!show) return null;
   return Swal.fire({
  title: "<strong>HTML <u>example</u></strong>",
  icon: "info",
  html: `
    You can use <b>bold text</b>,
    <a href="#" autofocus>links</a>,
    and other HTML tags
  `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i>
  `,
  cancelButtonAriaLabel: "Thumbs down"
});
};

export default GazaPopups;