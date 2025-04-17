import { toast } from 'react-toastify';

function calculateConcreteVolume(thickness, width, length, concreting) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (
          thickness === '' ||
          width === '' ||
          length === '' ||
          concreting === ''
        ) {
          toast.error('Todos os campos devem ser preenchidos.');
          return reject('Campos vazios');
        }

        const t = parseFloat(thickness) / 100;
        const w = parseFloat(width);
        const l = parseFloat(length);

        if (isNaN(t) || isNaN(w) || isNaN(l)) {
          toast.error('Valores inválidos.');
          return reject('Valores inválidos');
        }

        if (typeof concreting !== 'string') {
          toast.error('Concreting deve ser uma string.');
          return reject('Tipo inválido');
        }

        const volume = t * w * l;

        resolve(volume.toFixed(0));
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
}

export default calculateConcreteVolume;
