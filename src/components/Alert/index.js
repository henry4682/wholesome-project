import Swal from 'sweetalert2';

// alert 成功的訊息
export function successAlert(title, text) {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    confirmButtonColor: '#9aab82',
  });
}

// alert 成功的 toast 訊息
export function successToastAlert(
  title,
  timer,
  timerProgressBar = true,
  position = 'top-end'
) {
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: timerProgressBar,
  });

  Toast.fire({
    icon: 'success',
    title: title,
  });
}

// alert 錯誤的訊息
export function errorAlert(title, text) {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    confirmButtonColor: '#9aab82',
  });
}

// alert 錯誤的 toast 訊息
export function errorToastAlert(
  title,
  timer,
  timerProgressBar = true,
  position = 'top-end'
) {
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: timerProgressBar,
  });

  Toast.fire({
    icon: 'error',
    title: title,
  });
}

// alert 警告訊息
export function warningAlert(title, text) {
  Swal.fire({
    icon: 'warning',
    title: title,
    text: text,
    confirmButtonColor: '#9aab82',
  });
}

// alert 警告的 toast 訊息
export function warningToastAlert(title, timer, timerProgressBar = true) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: timerProgressBar,
  });

  Toast.fire({
    icon: 'warning',
    title: title,
  });
}
