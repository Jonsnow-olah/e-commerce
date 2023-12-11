import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51Ms6YPChugzAVwzk5V40qHrXty5S2nTm3wMEkBzX76biM0gwaJuuapBpmnNTW13Iopu11VBdeRoR4PVEwcUTaM2I00HcBBjmMM');
  }

  return stripePromise;
}

export default getStripe;