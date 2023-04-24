import { useState } from 'react';
import { Switch } from '@headlessui/react';
import SlideOver from '@/common/modals/SlideOver';
import PrivacyPolicy from './PrivacyPolicy';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const notify = (text: string, type: string) => {
    if (type === 'error') {
      return toast.error(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    return toast(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  //const form = useRef(null as any);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [open, setOpen] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!agreed) {
      notify('Necesita aceptar politica y privacidad', 'error');
      return;
    }

    emailjs.send('service_spw9ywo', 'template_xnf7ezl', form, 'D5B6QJc_pTBMExryN').then(
      () => {
        notify('Todo fue enviado corectamente', 'success');
        setForm({ name: '', email: '', phone: '', message: '' });
      },
      (error) => {
        notify('Ocurrio un error, vuelve a intentarlo mas tarde', 'error');
        console.log(error.text);
      }
    );
    emailjs.send('service_spw9ywo', 'template_2rss6vc', form, 'D5B6QJc_pTBMExryN');
  };
  return (
    <>
      <section id="AboutUs">
        <ToastContainer />
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F97316] to-[#FFFFF] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center flex space-y-2 flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contáctanos</h2>
            <span>¡No esperes más para dar el siguiente paso hacia el éxito!</span>
          </div>
          <form onSubmit={sendEmail} className="mx-auto mt-5 max-w-xl sm:mt-9">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="user_name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nombre completo
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    value={form.name}
                    type="text"
                    name="user_name"
                    id="user_name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Correo electronico
                </label>
                <div className="relative mt-2.5">
                  <input
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    value={form.email}
                    type="text"
                    name="user-email"
                    id="user-email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Telefono
                </label>
                <div className="relative mt-2.5">
                  <input
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    value={form.phone}
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    value={form.message}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 w-full justify-between">
                <span className="text-sm leading-6 text-gray-600">
                  Al seleccionar esto, aceptaras nuestra politica de privacidad&nbsp;
                  <span onClick={() => setOpen(!open)} role="presentation" className="cursor-pointer font-semibold text-orange-600">
                    Politica&nbsp;de privacidad.
                  </span>
                </span>
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-orange-500' : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </Switch.Group>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
        <SlideOver open={open} setOpen={setOpen} title="">
          <PrivacyPolicy />
        </SlideOver>
      </section>
    </>
  );
}
