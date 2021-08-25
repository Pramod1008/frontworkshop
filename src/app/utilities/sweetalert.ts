import Swal from "sweetalert2"

export function alertSuccess(msg : String){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
}

export function alertError(errors : String){
    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errors.toString(),
        footer: '<h2>Please Contact to Adminstrator!!</h2>'
      }) 
}